/**
 * Created by terracotaPie on 14-11-13.
 */
'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('CreateGroupCtrl', function ($scope, $log, SERVER_URL,group) {
    $scope.createGroup = function() {
      group.setGroup({
        'name': $scope.groupName,
        'description': $scope.description,
        'type': 'Yo mama'
      })
        .then(function(response) {
          $log.log(response);
        });

    };

  });
