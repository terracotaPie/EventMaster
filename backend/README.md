API
===================

This document describes the endpoints for our api

Users
-------------

TBA

Groups
------------

* POST /group
 - Creates a group. payload should be a json like
  ```json
  {"name": str(name), "description": str(description), "type": str(type)}
  ```
* GET /groups
 - Returns a json containing all the groups
 ```json
 [{"id": int(id), "name": str(name), "description": str(description), "type": str(type)}, ...]
 ```
 * GET /group/id
  - Returns a json containing all group info
   ```json
   {"name": str(name), "description": str(description), "type": str(type)}
   ```


Events
---------

* POST /group/id/event
 - Creates an event under the specified group. Payload is
 ```json
 {"name": str(name), "description": str(description), "tags": [str(tag1), str(tag2)...], time: str(timestamp), repeat: str(repeat)}
 ```
 Where timestamp is in the format that comes out of ```js
 (new Date()).toJSON();
 ```
 and repeat is in ("every day", "every week", "every month") [we might add more later?]
* GET /group/id/events
  - Returns a json with all the events for this group [sorted by time?]
  ```json
  [{"name": str(name), "description": str(description), "tags": [str(tag1), str(tag2)...], time: str(timestamp), repeat: str(repeat), "rank": int(rank)}, ...]
  ```

Other
-------

* GET /tags/event
 - Gets all tags for events
 ```json
 ["tag", "tag", "tag", ...]
 ```
