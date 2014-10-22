'use strict';

/*
Documentation for Calendar:
 http://fullcalendar.io/docs/
 https://github.com/angular-ui/ui-calendar
 */

angular.module('frontendApp')
  .controller('DashboardCtrl', function ($scope, Groups) {
    Groups.getAll().$promise.then(function(groups) {
      $scope.group = groups;
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
