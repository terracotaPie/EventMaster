from flask import Flask, render_template_string, request
from flask.ext.user import current_user, login_required, UserManager, SQLAlchemyAdapter
from flask.ext.restful import Resource, Api, abort
from models import db, User, Group
import json

class ConfigClass(object):
    SECRET_KEY = 'THIS IS AN INSECURE SECRET'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///app.sqlite'
    CSRF_ENABLED = False # yeah
    USER_ENABLE_EMAIL = False # Disable emails for now

app = Flask(__name__)
app.config.from_object(__name__+'.ConfigClass')
api = Api(app)
db.init_app(app)

JSON_DATETIME_FMT = '%Y-%m-%dT%H:%M:%S.%fZ'

class GroupList(Resource):
    def get(self):
        return [g.to_JSON() for g in Group.query.all()]

class GroupResource(Resource):
    def get(self, group_id):
        g = Group.query.get(group_id)
        if g is None:
            abort(404, message='Group {} not found'.format(group_id))
        else:
            return g.to_JSON()

api.add_resource(GroupList, '/groups')
api.add_resource(GroupResource, '/group/<int:group_id>')
# Create all database tables
#db.create_all()

db_adapter = SQLAlchemyAdapter(db,  User)
user_manager = UserManager(db_adapter, app,
        password_validator=lambda x,y: True) #lol strong passwords

# The Home page is accessible to anyone
@app.route('/')
def home_page():
    if current_user.is_authenticated():
        return profile_page()
    return render_template_string("""
        {% extends "base.html" %}
        {% block content %}
        <h2>{%trans%}Home Page{%endtrans%}</h2>
        <p> <a href="{{ url_for('user.login') }}">{%trans%}Sign in{%endtrans%}</a> or
            <a href="{{ url_for('user.register') }}">{%trans%}Register{%endtrans%}</a></p>
        {% endblock %}
        """)

# The Profile page requires a logged-in user
@app.route('/profile')
@login_required                                 # Use of @login_required decorator
def profile_page():
    return render_template_string("""
        {% extends "base.html" %}
        {% block content %}
            <h2>{%trans%}Profile Page{%endtrans%}</h2>
            <p> {%trans%}Hello{%endtrans%}
                {{ current_user.username or current_user.email }},</p>
            <p> <a href="{{ url_for('user.change_username') }}">
                {%trans%}Change username{%endtrans%}</a></p>
            <p> <a href="{{ url_for('user.change_password') }}">
                {%trans%}Change password{%endtrans%}</a></p>
            <p> <a href="{{ url_for('user.logout') }}?next={{ url_for('user.login') }}">
                {%trans%}Sign out{%endtrans%}</a></p>
        {% endblock %}
        """)

# Start development web server
if __name__=='__main__':
    app.run(host='0.0.0.0', port=20300, debug=True)
