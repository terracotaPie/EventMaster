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

  .factory('event', function($resource, $q, $log, server) {
  	var service = {};

  	service.createEventServer = function(newEvent) {	
  		var deferred = $q.defer();
  		$log.log(newEvent);
  		/* Needs to be implemented when server accepts correct arguments*/
  		return deferred.promise;
  	};

  	return service;
});