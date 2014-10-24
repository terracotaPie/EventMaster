'use strict';

/*
  - DashBoard controller
  - Calls calender service

 */

angular.module('frontendApp')
  .controller('DashboardCtrl', function ($scope, $log, group) {

  /*
      Fetching Groups from group-service.
  */
  $scope.group = {};
  console.log($scope.group.selected);
    group.getGroups()
      .then( function(groups) 
        {
          $scope.groups = groups;
        });

    $scope.addGroup = function() {
      /* newGroups is populated via ngModel in the view */
      group.setGroup($scope.newGroups)
        .then(function(response) {
          $log.log(response);
        });
    };

    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek basicDay',
          center: 'title',
          right: 'today prev,next'
        }
      }
    };

    $scope.eventSources = [];
  });
