'use strict';
/*global $:false */
/*
  - DashBoard controller
  - Calls calender service

 */

angular.module('frontendApp')
  .controller('DashboardCtrl', function ($scope, $log, group, notification, $location) {
    /*
        Fetching Groups from group-service.
    */
  $scope.group = {};
  $scope.events = [];
  $scope.activeMenu = 'All';
  $scope.colors = ['#00A0B0','#6A4A3C','#CC333F','#EB6841','#EDC951'];
  $scope.groupsColors = [];
  $scope.notifications = [];
  /*
    Store search input and results for this search
  */
  $scope.searchInput = '';
  $scope.searchResults = [];

  /*
    Initiate time steps for timepicker
   */
  $scope.hstep = 1;
  $scope.mstep = 15;
  $scope.changed = function () {
    $log.log('Time changed to: ' + $scope.mytime);
  };

  $scope.fetchAllGroups = function() {
    group.getGroups()
      .then( function(groups)
        {
          $scope.groups = groups;
          $scope.putAllEvents($scope.groups);
        });
    };

    $scope.filter = function (group) {
      $scope.myCalendar.fullCalendar('removeEvents');

      for(var event in group.events) {
        var d = new Date(group.events[event].time);
        $scope.myCalendar.fullCalendar( 'renderEvent', {
          id:group.events[event].id,
          title:group.events[event].name,
          start:group.events[event].time,
          color:group.events[event].color,
          end: d.toJSON(),
          description: group.events[event].description,
          score: group.events[event].score
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
                id:groups[group].events[event].id,
                title:groups[group].events[event].name,
                start:groups[group].events[event].time,
                color:$scope.groupsColors[group],
                end: d.toJSON(),
                description: groups[group].events[event].description,
                score: groups[group].events[event].score
              });
              groups[group].events[event].color = $scope.groupsColors[group];
            }
        }

      $scope.events = $scope.myCalendar.fullCalendar('clientEvents');
    };

    $scope.putSubscriptions = function (){
      group.getSubscriptions()
        .success(function(data) {
          $scope.myCalendar.fullCalendar('removeEvents');
          for(var event in data) {
            var d = new Date(data[event].time);
            d.setMinutes(d.getMinutes() + data[event].duration);
            $scope.myCalendar.fullCalendar( 'renderEvent', {
              id:data[event].id,
              title:data[event].name,
              start:data[event].time,
              color:$scope.groupsColors[0],
              end: d.toJSON(),
              description: data[event].description,
              score: data.score
            });
          }
        })
        .error(function(error) {
          $log.error(error);
        });
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
        },
        eventClick: function(calEvent) {
          $location.path('/events/'+calEvent.id);
        },
        eventRender: function(event, element) {
          element[0].setAttribute('class',element[0].getAttribute('class') + ' custom-popover');
          element[0].setAttribute('data-content','Event Score: ' + event.score);
          element[0].setAttribute('data-trigger','hover');
          $('.custom-popover').popover({ trigger: 'hover' });
        }
      }
    };

    $scope.eventSources = [];
    $scope.fetchAllGroups();
    notification.getNotifications()
      .success(function(data) {
        $scope.notifications = data;
    })
      .error(function(data) {
        $log.log(data);
      });
  });
