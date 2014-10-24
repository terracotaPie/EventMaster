'use strict';

/*
	- Handle RESTful operations for groups
	- Fetching group info, creating groups, updating group info etc.
*/

angular.module('frontendApp')

  .factory('group', function($resource, $q, $log,server) {
  	var service = {};

  	/* Getting a group */
  	service.getGroups = function() {
	      return server.query().$promise
	          .then(function(allGroups) 
	          	{
	              return allGroups;
	          	})
	          .catch( function(error) 
		      {
		          throw error;
		      });
  	};

  	/* Creating a group */
  	service.setGroup = function (newGroup) {
  		var deferred = $q.defer();
  		server.save({newGroup: newGroup})
  		  .$promise
  		  .then (function() {
  		  	deferred.resolve();
	          $log.log('Group set successfully');
  		  })
  		  .catch(function(error) {
  		  	deferred.reject();
  		  	throw error;
  		  });
  		return deferred.promise;
  	};
 	
  	return service;
  });				