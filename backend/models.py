from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.user import UserMixin
import json

JSON_DATETIME_FMT = '%Y-%m-%dT%H:%M:%S.%fZ'
db = SQLAlchemy()
user_event = db.Table('user_event',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('event_id', db.Integer, db.ForeignKey('event.id'))
)

user_group = db.Table('user_group',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('group_id', db.Integer, db.ForeignKey('group.id'))
)


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    active = db.Column(db.Boolean(), nullable=False, default=False)
    username = db.Column(db.String(50), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False, default='')
    events = db.relationship('Event', secondary=user_event,
            backref=db.backref('users', lazy='dynamic'))
    groups = db.relationship('Group', secondary=user_group,
            backref=db.backref('users', lazy='dynamic'))


class Group(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    description = db.Column(db.String(500), nullable=False)
    type = db.Column(db.String(50), nullable=False)
    events = db.relationship('Event', backref='group',
                             lazy='dynamic')

    def __init__(self, name, description, type):
        self.name = name
        self.description = description
        self.type = type

    def __repr__(self):
        return '<Group {}>'.format(self.name)

    def to_JSON(self):
        return {'id': self.id,
                'name': self.name,
                'description': self.description,
                'type': self.type,
                'events': [e.to_JSON() for e in self.events]}


class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    time = db.Column(db.DateTime, nullable=False)
    tags = db.Column(db.Text, nullable=True)
    repeat = db.Column(db.String(50), nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'))

    def __init__(self, name, description, time, tags,
                 repeat, duration, group_id):
        self.name = name
        self.description = description
        self.time = time
        self.tags = tags
        self.repeat = repeat
        self.duration = duration
        self.group_id = group_id

    def __repr__(self):
        return '<Event {}>'.format(self.name)

    def to_JSON(self):
        return {'id': self.id,
                'name': self.name,
                'description': self.description,
                'time': self.time.strftime(JSON_DATETIME_FMT),
                'tags': json.loads(self.tags),
                'repeat': self.repeat,
                'duration': self.duration}
