'use strict';

/*
	- Handle RESTful operations for groups
	- Fetching group info, creating groups, updating group info etc.
*/

angular.module('frontendApp')

  .factory('group', function($resource, server) {
  	var service = {};

  	service.getGroups = function(group) {
	    /*
		    	Sample GET request to fetch groups
		      return server.query().$promise
		          .then(function(allGroups) {
		              $log.log(allGroups)
		          }); 
	      */
  	};
  });				