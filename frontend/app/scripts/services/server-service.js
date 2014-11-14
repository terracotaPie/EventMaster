'use strict';

/*
	 Very little data received from server.
	 Load all JSON from api URL and do data search on client side.
*/

angular.module('frontendApp')

  .constant('SERVER_URL', 'http://pls.oggettone.com')

  .factory('server', function($resource, SERVER_URL) {
    return $resource(SERVER_URL + '/groups/:id');
  })

  .factory('eventServer', function($resource, SERVER_URL) {
    return $resource(SERVER_URL + '/groups/:id/events/:id');
  })
  .factory('notificationServer', function($resource, SERVER_URL) {
    var tmp = $resource(SERVER_URL + '/user/unread_notifications/');
    tmp.query.withCredentials = true;
    //tmp.query.isArray = true;
    return $resource(SERVER_URL + '/user/unread_notifications/');
  });
