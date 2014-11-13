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
  $scope.activeMenu = 'All';
  $scope.colors = ['#00A0B0','#6A4A3C','#CC333F','#EB6841','#EDC951'];
  $scope.groupsColors = [];
  /*
    Store search input and results for this search
  */
  $scope.searchInput = '';
  $scope.searchResults = [];
  group.getGroups()
    .then( function(groups)
      {
        $scope.groups = groups;
        $scope.putAllEvents($scope.groups);
      });

    $scope.filter = function (group) {
      $scope.myCalendar.fullCalendar('removeEvents');
      var c = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
      $scope.groupsColors.splice($scope.groups.indexOf(group), 1, c);

      for(var event in group.events) {
        var d = new Date(group.events[event].time);
        $scope.myCalendar.fullCalendar( 'renderEvent', {
          title:group.events[event].name,
          start:group.events[event].time,
          color:c,
          end: d.toJSON(),
          description: group.events[event].description
        });
      }
      $scope.events = $scope.myCalendar.fullCalendar('clientEvents');
    };

    $scope.putAllEvents = function (groups) {
      $scope.myCalendar.fullCalendar('removeEvents');
      for(var group in groups)
      {
          for(var event in groups[group].events)
            {
              var d = new Date(groups[group].events[event].time);
              d.setMinutes(d.getMinutes() + groups[group].events[event].duration);
              if ($scope.groupsColors.length === 0) {
                $scope.groupsColors = $scope.colors;
              }
              $scope.myCalendar.fullCalendar( 'renderEvent', {
                title:groups[group].events[event].name,
                start:groups[group].events[event].time,
                color:$scope.groupsColors[group],
                end: d.toJSON(),
                description: groups[group].events[event].description

              });

            }

        }

      $scope.events = $scope.myCalendar.fullCalendar('clientEvents');
    };

    $scope.makeActive = function (content) {
      $scope.activeMenu = content;
    };

    $scope.isActive = function (content) {
      if(content === $scope.activeMenu) {
        return true;
      }
      return false;
    };

    $scope.addGroup = function() {
      /* newGroups is populated via ngModel in the view */
      group.setGroup($scope.newGroups)
        .then(function(response) {
          $log.log(response);
        });
    };

    $scope.search = function() {
      $scope.searchResults = [];
      if($scope.searchInput.length !== 0) {
        for (var event in $scope.events) {
          if ($scope.events[event].description.indexOf($scope.searchInput) >= 0 ||
            $scope.events[event].title.indexOf($scope.searchInput) >= 0) {
            $scope.searchResults.push($scope.events[event]);
          }
        }
      }
    };

    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: false,
        header:{
          left: 'month basicWeek basicDay',
          center: 'title',
          right: 'today prev,next'
        }
      }
    };

    $scope.eventSources = [];
  });
