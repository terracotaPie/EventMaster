/**
 * Created by terracotaPie on 14-10-22.
 */
angular.module('frontendApp')
  .factory('Groups', function($resource) {
    return $resource('http://localhost:20300/groups', {}, {
      getAll: {
        isArray: true,
        method: 'GET'
      }
    });
  });