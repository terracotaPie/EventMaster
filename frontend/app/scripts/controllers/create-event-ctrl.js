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
  		event.setEvent({
        'name': $scope.eventName,
        'description': $scope.description,
        'tags': ['tagg','tagg2'],
        'time': $scope.startTime,
        'repeat': 'monthly',
        'duration': $scope.duration
      }, $scope.groupId)
  		.then(function(response) {
  			$log.log(response);
  		});

  	};

  });
