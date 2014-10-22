'use strict';

/*
  - DashBoard controller
  - Calls calender service

 */

angular.module('frontendApp')
  .controller('DashboardCtrl', function ($scope, group) {

  /*
      Fetching Groups from group-service.
  */
    group.getGroups()
      .then( function(groups) 
        {
          $scope.groups = groups;
        });

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
