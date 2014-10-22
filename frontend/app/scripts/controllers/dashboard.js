'use strict';

/*
Documentation for Calendar:
 http://fullcalendar.io/docs/
 https://github.com/angular-ui/ui-calendar
 */

angular.module('frontendApp')
  .controller('DashboardCtrl', function ($scope, Groups) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    Groups.getAll().$promise.then(function(groups) {
      $scope.group = groups;
    });
    $scope.awesomeThings = [
        'This is your calendar'
    ];
    $scope.eventSources = [];
  });
