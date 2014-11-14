'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:DetailEventCtrl
 * @description
 * # DetailEventCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('DetailEventCtrl', function ($scope, $log, $routeParams, eventServer) {

    $scope.fetchEvent = function() 
    {
      eventServer.get({id: $routeParams.id})
      .$promise
      .then(function(fetchedEvent) {
        $log.log(fetchedEvent);
      })
      .then(null, $log.error);
    };

    $scope.fetchEvent();

  });
