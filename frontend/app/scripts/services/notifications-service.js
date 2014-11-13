'use strict';
angular.module('frontendApp')

  .factory('notification', function($resource, $q, $log, $http, notificationServer, SERVER_URL) {
    var service = {};
    /* Getting a group */
    service.getNotifications = function () {
      var config = {
        method: 'GET',
        url: SERVER_URL + '/user/unread_notifications',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        withCredentials: true
      };
      return $http(config)
    };
    return service;
  });
