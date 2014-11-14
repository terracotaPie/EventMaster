'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('CreateEventCtrl', function ($scope, $log, SERVER_URL, event, group) {

    /* Fetch All groups to display in form. Needs to be re-factored to avoid duplicate call. */
    $scope.fetchAllGroups = function() {
      group.getGroups()
      .then( function(groups)
        {
          $scope.groups = groups;
        });
    };

    /* Setting selected group to $scope */
    $scope.setGroup = function(groupId, groupName) {
      $scope.groupName = groupName;
      $scope.groupId = groupId;
    };

    $scope.createEvent = function() 
    {
      var newEventObj = { 
        'name': $scope.eventName,
        'days': {},
        'description': $scope.description,
        'tags': ['tagg','tagg2'],
        'time': $scope.startTime,
        'repeat': true,
        'duration': $scope.duration        
      };

      event.setEvent(newEventObj, $scope.groupId)
      .then(function(response) {
        	$log.log(response);
      });
    };

    $scope.fetchAllGroups();

  });
