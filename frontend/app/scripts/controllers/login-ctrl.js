'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('LoginCtrl', function ($scope, $location, auth) {

  	$scope.invalidUsername = false;

  	$scope.login = function() {
  		var email = $scope.email;
      if(typeof email !== 'undefined') {
    		var splitEmail = email.split('@');
    		if (splitEmail[1] === 'mail.utoronto.ca')
  	  		{
  			      auth.login({
  			        username: $scope.email,
  			        password: $scope.password
  			      });
  			}
    		else
    			{
    				$scope.invalidUsername = true;
    			}
        } else {
          auth.login({
            username: 'ANYTHING',
            password: 'ANYTHING'
          });
        }
    	};
    $scope.login();
  });
