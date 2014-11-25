'use strict';

angular.module('frontendApp')
  .controller('LandingCtrl', function ($scope, $location, auth) {

    $scope.invalidUsername = false;

    $scope.signUp = function() {
      var email = $scope.email;
      var splitEmail = email.split('@');
      if (splitEmail[1] === 'mail.utoronto.ca')
      {
        auth.signUp({
          username: $scope.email,
          password: $scope.password
        });
      }
      else
      {
        $scope.invalidUsername = true;
      }
    };
  });
