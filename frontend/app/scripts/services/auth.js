'use strict';

/*
    - Handle RESTful operations for groups
    - Fetching group info, creating groups, updating group info etc.
*/

angular.module('frontendApp')

  .factory('auth', function($resource, $http, $log, $rootScope, $location, SERVER_URL) {
    var service = {};

    service.login = function (user) 
    {
            var config = {
                method: 'POST',
                url: SERVER_URL + '/user/sign-in',
                data: 'username=' + user.username + '&password=' + user.password + '&next=/user/sign-in',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                withCredentials: true
            };

        $http(config)
            .success(function(data) 
            {
              if (data.indexOf('EMPTY SHIT') > -1) 
              {
                $log.log('success');
                $rootScope.isLogged = true;
                $rootScope.currentUser = data;
                $location.path('/dashboard');
              } 
              else 
              {
                $log.log('fail');
                $rootScope.isLogged = false;
            }
        })
        .error(function(error) {
          $log.error(error);
        });
      
    };

    service.logout = function() {
      var config = {
           method: 'POST',
           url: SERVER_URL + '/user/sign-out',
           data: 'next=/user/sign-in',
           headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            withCredentials: true
          };

        $http(config)
            .success(function(data) {
              $log.log(data);
                  $log.log('Logged out User successfully');
                  $rootScope.isLogged = false;
                  $location.path('/login');
            })
            .error(function(error) {
              $log.error(error);
            });
    };


    return service;
  });
