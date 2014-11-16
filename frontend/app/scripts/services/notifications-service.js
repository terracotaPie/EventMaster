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
      return $http(config);
    };
    service.subscribeToEvent = function (id) {
      var config = {
        method: 'POST',
        data: {'event_id':id},
        url: SERVER_URL + '/user/subscriptions/events',
        withCredentials: true
      };
      return $http(config);
    };
    return service;
  });
