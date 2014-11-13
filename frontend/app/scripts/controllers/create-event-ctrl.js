'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('CreateEventCtrl', function ($scope, $log, SERVER_URL, event,group) {
    group.getGroups()
      .then( function(groups)
        {
          $scope.groups = groups;
        });
    $scope.setGroup = function(id,name) {
      $scope.groupName = name;
      $scope.groupId = id;
    };
  	$scope.createEvent = function() {
  		event.setEvent({
        'name': $scope.eventName,
        'days': {},
        'description': $scope.description,
        'tags': ['tagg','tagg2'],
        'time': $scope.startTime,
        'repeat': true,
        'duration': $scope.duration
      }, $scope.groupId)
  		.then(function(response) {
  			$log.log(response);
  		});

  	};

  });
