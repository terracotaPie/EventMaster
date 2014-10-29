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
  $scope.events = [];
  group.getGroups()
    .then( function(groups)
      {
        $scope.groups = groups;
        for(var group in groups)
          {
            for(var event in groups[group].events)
              {
                var d = new Date(groups[group].events[event].time);
                d.setMinutes(d.getMinutes() + groups[group].events[event].duration);
                $scope.myCalendar.fullCalendar( 'renderEvent', {
                  title:groups[group].events[event].name,
                  start:groups[group].events[event].time,
                  end: d.toJSON()
                });
              }
          }

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
