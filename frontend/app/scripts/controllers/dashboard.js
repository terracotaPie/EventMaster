'use strict';

/*
Documentation for Calendar:
 http://fullcalendar.io/docs/
 https://github.com/angular-ui/ui-calendar
 */

angular.module('frontendApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.awesomeThings = [
        'This is your calendar'
    ];
    $scope.eventSources = [];
  });
