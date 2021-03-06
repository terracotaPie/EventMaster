'use strict';

/*
	- Handle RESTful operations for groups
	- Fetching group info, creating groups, updating group info etc.
*/

angular.module('frontendApp')

  .factory('group', function($resource, $q, $log, server, SERVER_URL, $http) {
  	var service = {};

  	/* Getting a group */
  	service.getGroups = function() {
	      return server.query().$promise
	          .then(function(allGroups)
	          	{
                    service.allGroups = allGroups;
	              return allGroups;
	          	})
	          .catch( function(error)
		      {
		          throw error;
		      });
  	};

    service.getSubscriptions = function () {
      var config = {
        method: 'GET',
        url: SERVER_URL + '/user/subscriptions/events',
        withCredentials: true
      };

      return $http(config);
    };

  	/* Creating a group */
  	service.setGroup = function (newGroup) {
  		var deferred = $q.defer();
  		server.save(newGroup)
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
