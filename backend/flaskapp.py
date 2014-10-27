from flask import Flask, request
from flask.ext.user import current_user, login_required, UserManager, SQLAlchemyAdapter
from flask.ext.restful import Resource, Api, abort
from flask.ext.cors import CORS
from models import db, User, Group, Event
import datetime
import json


class ConfigClass(object):
    SECRET_KEY = 'THIS IS AN INSECURE SECRET'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///app.sqlite'
    CSRF_ENABLED = False  # yeah
    WTF_CSRF_ENABLED = False  # yeah
    USER_ENABLE_EMAIL = False  # Disable emails for now
    USER_ENABLE_RETYPE_PASSWORD = False
    CORS_HEADERS = 'Content-Type'

app = Flask(__name__)
app.config.from_object(__name__+'.ConfigClass')
api = Api(app)
db.init_app(app)
cors = CORS(app)

JSON_DATETIME_FMT = '%Y-%m-%dT%H:%M:%S.%fZ'
REPEAT_VALUES = ['daily','weekly','monthly']

@app.before_first_request
def initialize_database():
    db.create_all()

# decorators are coool
def json_creates(jclass):
    def wrap(f):
        def wrapped_f(*args, **kwargs):
            # I don't know how I feel about the next 2 lines
            import inspect
            required_args = set(inspect.getargspec(jclass).args[1:]) - set(kwargs.keys())
            if required_args <= request.get_json().keys():
                return f(*args, **kwargs)
            else:
                abort(400, message='Json does not contain keys {}'.format(required_args))
        return wrapped_f
    return wrap


class GroupList(Resource):
    def get(self):
        return [g.to_JSON() for g in Group.query.all()]

    @json_creates(Group)
    def post(self):
        rj = request.get_json()
        if Group.query.filter_by(name=rj['name']) is not None:
            abort(409, message='Group {} already exists'.format(rj['name']))

        try:
            g = Group(**rj)
            db.session.add(g)
            db.session.commit()
            return {'message': 'success'}
        except:
            abort(400, message='Bad request: {}'.format(rj))


class GroupResource(Resource):
    def get(self, group_id):
        g = Group.query.get(group_id)
        if g is None:
            abort(404, message='Group {} not found'.format(group_id))
        else:
            return g.to_JSON()


class EventList(Resource):
    def get(self, group_id):
        g = Group.query.get(group_id)
        if g is not None:
            return [e.to_JSON() for e in g.events.all()]
        else:
            abort(404, message='Group {} not found'.format(group_id))

    @json_creates(Event)
    def post(self, group_id):
        rj = request.get_json()

        if(rj['repeat'] not in REPEAT_VALUES):
            abort(400, message='Bad repeat value: {}'.format(rj['repeat']))

        rj['group_id'] = group_id

        try:
            rj['time'] = datetime.datetime.strptime(rj['time'], JSON_DATETIME_FMT)
        except ValueError:
            abort(400, message='Bad time value: {}'.format(rj['time']))

        rj['tags'] = json.dumps(rj['tags'])

        g = Group.query.get(group_id)
        if g is None:
            abort(404, message='Group {} not found'.format(group_id))
        else:
            try:
                e = Event(**rj)
                db.session.add(e)
                db.session.commit()
                return {'message': 'success'}
            except:
                abort(400, message='Bad request: {}'.format(rj))


class SubscriptionList(Resource):
    decorators = [login_required]
    def get(self):
        return [e.to_JSON() for e in current_user.events]

    def post(self):
        rj = request.get_json()
        if 'event_id' in rj.keys():
            e = Event.query.get(rj['event_id'])
            if e is not None:
                current_user.events.append(e)
                db.session.commit()
                return {'message': 'success'}
            else:
                abort(404, message='Event {} not found'.format(rj['event_id']))
        else:
            abort(400, message='Bad request {}'.format(rj))


class SubscriptionListGroups(Resource):
    decorators = [login_required]
    def get(self):
        return [g.to_JSON() for g in {e.group for e in current_user.events}]


api.add_resource(GroupList, '/groups')
api.add_resource(GroupResource, '/groups/<int:group_id>')
api.add_resource(EventList, '/groups/<int:group_id>/events')
api.add_resource(SubscriptionList, '/user/subscriptions/events')
api.add_resource(SubscriptionListGroups, '/user/subscriptions/groups')

db_adapter = SQLAlchemyAdapter(db,  User)

# lol strong passwords
user_manager = UserManager(db_adapter, app,
                           password_validator=lambda x, y: True)
# Start development web server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=20300, debug=True)
