'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('CreateEventCtrl', function ($scope, $log, SERVER_URL, event) {

  	$scope.createEvent = function() {
  		event.createEventServer(this)
  		.then(function(response) {
  			$log.log(response);
  		});
		
  	};

  });
