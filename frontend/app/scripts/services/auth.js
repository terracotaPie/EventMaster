'use strict';

/*
	- Handle RESTful operations for groups
	- Fetching group info, creating groups, updating group info etc.
*/

angular.module('frontendApp')

  .factory('auth', function($resource, $http, $log, $rootScope, $location, SERVER_URL) {
  	var service = {};
	
  	service.login = function (user) {

            var config = {
				 method: 'POST',
				 url: SERVER_URL + '/user/sign-in',
				 data: 'username=' + user.username + '&password=' + user.password + '&next=/user/sign-in',
				 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				};

		$http(config)
			.success(function(data) {
				$log.log(data);
		            $rootScope.currentUser = data;
		            $location.path('/dashboard');
		          })
			.error(function(error) {
	              	$log.error(error);
	              });
	};
  	return service;
  });				