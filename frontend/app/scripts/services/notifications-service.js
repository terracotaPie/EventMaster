'use strict';
angular.module('frontendApp')

  .factory('notification', function($resource, $q, $log, notificationServer) {
    var service = {};
    /* Getting a group */
    service.getNotifications = function () {
      var deferred = $q.defer();
      notificationServer.query()
        .$promise
        .then (function() {
          deferred.resolve();
          $log.log('Notification recieved');
        })
        .catch(function(error) {
          deferred.reject();
          throw error;
        });
      return deferred.promise;
    };
    return service;
  });
