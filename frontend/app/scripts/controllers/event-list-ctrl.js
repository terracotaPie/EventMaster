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
          groups.forEach(function(group) {
            group.events.forEach(function(event) {
              $scope.eventList.push(event);
            });
          });
          $scope.eventList.sort(compare);
        });
    };

    function compare(a, b) {
        if (a.score < b.score) 
        {
           return 1;
         }
        if (a.score > b.score)
        {
          return -1;
        }
        return 0;
      }

    $scope.fetchAllGroups();

  });
