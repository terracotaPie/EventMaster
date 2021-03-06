HOWTORUN
====================
```sh
pip install -r requirements.txt
python flaskapp.py
```

API
===================

This document describes the endpoints for our api

Users
-------------

* POST /user/register
 - Registers a user. no checks on anything right now. Response sets a cookie so it logs in after registration
 - It's like a form post, parameters are user, password. So like ```user=loluser&password=lolpassword```

* POST /user/sign-in
 - Same thing as register, sets a cookie

* GET /user/events
 - Will return a list of events the user is subscribed to. Json line the /group/id/event one


Groups
------------

* POST /groups
 - Creates a group. payload should be a json like
  ```json
  {"name": str(name), "description": str(description), "type": str(type)}
  ```
* GET /groups
 - Returns a json containing all the groups
 ```json
 [{"id": int(id), "name": str(name), "description": str(description), "type": str(type)}, ...]
 ```
* GET /groups/id
 - Returns a json containing all group info
 ```json
 {"name": str(name), "description": str(description), "type": str(type)}
 ```


Events
---------

* POST /groups/id/event
 - Creates an event under the specified group. Payload is
 ```json
 {"name": str(name), "description": str(description), "tags": [str(tag1), str(tag2)...], "time": str(timestamp), "repeat": str(repeat), "duration": int(minutes)}
 ```
 Where timestamp is in the format that comes out of
```js
 (new Date()).toJSON();
 ```
 and repeat is in ("every day", "every week", "every month") [we might add more later?]
* GET /groups/id/events
 - Returns a json with all the events for this group [sorted by time?]
 ```json
  [{"group_id": int(gid), "name": str(name), "description": str(description), "days": {str(day1): str(True | False), str(day2): str(True | False), ...}, "tags": [str(tag1), str(tag2), ...], "time": str(timestamp), "repeat": boolean(true | false), "rank": int(rank)}, ...]
 ```

Other
-------

* GET /tags/event
 - Gets all tags for events
 ```json
 ["tag", "tag", "tag", ...]
 ```
