'use strict';

/*
	 Very little data received from server.
	 Load all JSON from api URL and do data search on client side.
*/

angular.module('frontendApp')

  .constant('SERVER_URL', 'http://localhost:20300') 

  .factory('server', function($resource, SERVER_URL) {
	    return $resource(SERVER_URL + '/groups/:id', {}, {
	    });
  });