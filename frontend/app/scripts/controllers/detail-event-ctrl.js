'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:DetailEventCtrl
 * @description
 * # DetailEventCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('DetailEventCtrl', function ($scope, $log, $routeParams, eventServer, group) {

    //$scope.fetchEvent = function()
    //{
    //  eventServer.get({id: $routeParams.id})
    //  .$promise
    //  .then(function(fetchedEvent) {
    //    $log.log(fetchedEvent);
    //  })
    //  .then(null, $log.error);
    //};

    $scope.fetchAllGroups = function() {
      group.getGroups()
        .then( function(groups)
        {
          $scope.groups = groups;
          for(var group in groups) {
            for(var event in groups[group].events) {
              $
              if(groups[group].events[event].id == $routeParams.id) {
                $scope.event = groups[group].events[event];
              }
            }
          }
        });
    };
    $scope.fetchAllGroups();
  });
