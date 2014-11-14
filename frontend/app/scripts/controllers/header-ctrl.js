'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('HeaderCtrl', function ($scope, $location, auth, $rootScope, $log) {

  	$scope.isUserLogged = false;

	$rootScope.$watch('isLogged', function(current, previous){
		$log.log(previous);
		$log.log(current);
	  	$scope.isUserLogged = current;
	});

	$scope.logout = function() {
		auth.logout();
	};
  });