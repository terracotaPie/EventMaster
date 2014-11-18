from flask import Flask, request
from flask.ext.user import current_user, login_required, UserManager, SQLAlchemyAdapter
from flask.ext.restful import Resource, Api, abort
from flask.ext.cors import CORS
from models import db, User, Group, Event
import datetime
import json
from logging.handlers import RotatingFileHandler
from logging import Formatter
import logging

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
cors = CORS(app, supports_credentials=True, send_wildcard=False)

filehander = RotatingFileHandler('debug.log')
filehander.setLevel(logging.INFO)
filehander.setFormatter(Formatter(
    '%(asctime)s %(levelname)s: %(message)s '
    '[in %(pathname)s:%(lineno)d]'))
app.logger.addHandler(filehander)

JSON_DATETIME_FMT = '%Y-%m-%dT%H:%M:%S.%fZ'

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
                error_message = 'Json does not contain keys {}'.format(required_args)
                app.logger.info(error_message)
                abort(400, message=error_message)
        return wrapped_f
    return wrap


class GroupList(Resource):
    def get(self):
        return [g.to_JSON() for g in Group.query.all()]

    @json_creates(Group)
    def post(self):
        rj = request.get_json()

        if Group.query.filter_by(name=rj['name']).first() is not None:
            abort(409, message='Group {} already exists'.format(rj['name']))

        try:
            g = Group(**rj)
            db.session.add(g)
            db.session.commit()
            return {'message': 'success'}
        except Exception as e:
            abort(400, message='Bad request: {}'.format(e))

    def delete(self, group_id, event_id):
        rj = request.get_json()

        if 'group_id' in rj.keys():
            try:
                g = Group.query.get(rj['group_id'])
                db.session.delete(g)
                db.session.commit()
                return {'message': 'success:while : pass'}
            except Exception as ex:
                abort(400, message='Bad data format or type: {}'.format(ex))
        else:
            abort(400, message='Missing key group_id in keys {}'.format(rj.keys()))


class GroupResource(Resource):
    def get(self, group_id):
        g = Group.query.get(group_id)
        if g is None:
            abort(404, message='Group {} not found'.format(group_id))
        else:
            return g.to_JSON()

class EventResource(Resource):
    def get(self, group_id, event_id):
        e = Event.query.get(event_id)
        if e is None:
            abort(404, message='Group {} not found'.format(event_id))
        else:
            return e.to_JSON()


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

        rj['group_id'] = group_id

        try:
            rj['time'] = datetime.datetime.strptime(rj['time'], JSON_DATETIME_FMT)
        except ValueError:
            abort(400, message='Bad time value: {}'.format(rj['time']))

        rj['tags'] = json.dumps(rj['tags'])
        rj['days'] = json.dumps(rj['days'])

        g = Group.query.get(group_id)
        if g is None:
            abort(404, message='Group {} not found'.format(group_id))
        else:
            try:
                e = Event(**rj)
                db.session.add(e)
                db.session.commit()
                return {'message': 'success'}
            except Exception as ex:
                abort(400, message='Bad data format or type: {}'.format(ex))

    def delete(self, group_id, event_id):
        rj = request.get_json()

        if 'event_id' in rj.keys():
            try:
                e = Event.query.get(rj['event_id'])
                db.session.delete(e)
                db.session.commit()
                return {'message': 'success:while : pass'}
            except Exception as ex:
                abort(400, message='Bad data format or type: {}'.format(ex))
        else:
            abort(400, message='Missing key event_id in keys {}'.format(rj.keys()))



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
            abort(400, message='Missing key event_id in keys {}'.format(rj.keys()))


class SubscriptionListGroups(Resource):
    decorators = [login_required]
    def get(self):
        return [g.to_JSON() for g in {e.group for e in current_user.events}]


class UnreadNotifications(Resource):
    decorators = [login_required]

    def get(self):
        all_events = current_user.events

        notifications = []
        for e in all_events:
            remaining_time = e.time - datetime.datetime.now()
            offset = 10000
            if(remaining_time > datetime.timedelta() and
                    (remaining_time < datetime.timedelta(hours=offset))):
                notifications.append({'name': e.name,
                                      'description': e.description,
                                      'remaining_time':
                                      str((remaining_time.seconds // 60)) + 'm'}
                                    )

        return notifications


api.add_resource(GroupList, '/groups')
api.add_resource(GroupResource, '/groups/<int:group_id>')
api.add_resource(EventList, '/groups/<int:group_id>/events')
api.add_resource(EventResource, '/groups/<int:group_id>/events/<int:event_id>')
api.add_resource(SubscriptionList, '/user/subscriptions/events')
api.add_resource(SubscriptionListGroups, '/user/subscriptions/groups')
api.add_resource(UnreadNotifications, '/user/unread_notifications')

db_adapter = SQLAlchemyAdapter(db,  User)

@app.route('/logged-in')
def loggedin():
    return "SUCCESS"

@app.route('/')
def root():
    return "EMPTY SHIT"


# lol strong passwords
user_manager = UserManager(db_adapter, app,
                           password_validator=lambda x, y: True,
                           username_validator=lambda x, y: True)
# Start development web server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=20300, debug=True)
