'use strict';

/*
	- Handle RESTful operations for groups
	- Fetching group info, creating groups, updating group info etc.
*/

angular.module('frontendApp')

  .factory('group', function($resource, $q, $log, server) {
  	var service = {};

  	service.getGroups = function() {
	      return server.query().$promise
	          .then(function(allGroups) {
	              return allGroups;
	          }); 
  	};

  	return service;
  });				