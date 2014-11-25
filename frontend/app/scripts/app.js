'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.calendar',
    'ui.select'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/create-event', {
        templateUrl: 'views/create-event.html',
        controller: 'CreateEventCtrl'
      })
      .when('/create-group', {
        templateUrl: 'views/create-group.html',
        controller: 'CreateGroupCtrl'
      })
      .when('/events/:id', {
        templateUrl: 'views/detail-event.html',
        controller: 'DetailEventCtrl'
      })
      .when('/landing', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl'
      })
      .when('/event-list', {
        templateUrl: 'views/event-list.html',
        controller: 'EventListCtrl'
      })
      .otherwise({
        redirectTo: '/landing'
      });
  });
