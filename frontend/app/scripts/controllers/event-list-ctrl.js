'use strict';

/*
  - EventList controller
  - Calls calender service

 */

angular.module('frontendApp')
  .controller('EventListCtrl', function ($scope, $log, group) {

  /*
      Fetching Groups from group-service.
  */

  $scope.eventList = [];

  $scope.fetchAllGroups = function() {
    group.getGroups()
      .then( function(groups)
        {
          $log.log(groups);
          groups.forEach(function(group) {
            group.events.forEach(function(event) {
              $scope.eventList.push(event);
            });
          });
          $log.log($scope.eventList);
        });
    };

    $scope.fetchAllGroups();

  });
