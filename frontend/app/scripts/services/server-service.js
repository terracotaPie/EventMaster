'use strict';

/*
	 Created by terracotaPie on 14-10-22.
	 Edited by Rick on 14-10-22.
*/

angular.module('frontendApp')

  .constant('SERVER_URL', 'http://localhost:20300') 

  .factory('server', function($resource, SERVER_URL) {
    return $resource(SERVER_URL + '/groups/:id', {}, {
      getAll: {
        isArray: true,
        method: 'GET'
      }
    });
  });