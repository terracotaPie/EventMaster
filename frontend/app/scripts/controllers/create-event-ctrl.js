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
    $scope.initTime = function () {
      var d = new Date();
      d.setHours( 14 );
      d.setMinutes( 0 );
      $scope.mytime = d;
      $scope.dt = d;
    };
    $scope.initTime();
    /* Setting selected group to $scope */
    $scope.setGroup = function(groupId, groupName) {
      $scope.groupName = groupName;
      $scope.groupId = groupId;
    };

    $scope.createEvent = function()
    {
      if($scope.mytime === undefined || $scope.dt === undefined) {
        $log.log('Choose time/date');
        return;
      }
      $scope.dt.setMinutes($scope.mytime.getMinutes());
      $scope.dt.setHours($scope.mytime.getHours());
      var newEventObj = {
        'name': $scope.eventName,
        'days': {},
        'description': $scope.description,
        'tags': ['tagg','tagg2'],
        'time': $scope.dt.toJSON(),
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
