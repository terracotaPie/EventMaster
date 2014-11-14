'use strict';

/*
	- Handle RESTful operations for events
	- Fetching event info, creating events, updating events info etc.

	Current object type sent to server:
	Object :
		{
		  name: "Awesome event",
		  description: "This is an Awesome event",
		  startTime: "6pm",
		  duration: 3,
		  days:
		  {
		    fri: true,
		    mon: true
		  },
		  repeat:
		  {
		    radio: "true"
		  }
		}
*/

angular.module('frontendApp')

  .factory('event', function($resource, $q, $log, eventServer, $location) {
    var service = {};
    /* Getting a group */
    service.setEvent = function (newEvent, groupId) {
      var deferred = $q.defer();
      eventServer.save({id:groupId}, newEvent)
        .$promise
        .then (function() {
          deferred.resolve();
          $log.log('Event set successfully');
          $location.path('/dashboard');
        })
        .catch(function(error) {
          deferred.reject();
          throw error;
        });
      return deferred.promise;
    };
    return service;
  });
