'use strict';

/*
	- Handle RESTful operations for groups
	- Fetching group info, creating groups, updating group info etc.
*/

angular.module('frontendApp')

  .factory('group', function($resource, $q, server) {
  	var service = {};

  	service.getGroups = function() {
  		var deferred = $q.defer();
	    /*
		    	Sample GET request to fetch groups
		      return server.query().$promise
		          .then(function(allGroups) {
		              $log.log(allGroups)
		          }); 
	      */
	      return deferred.promise;
  	};

  	return service;
  });				