'use strict';

// Declare app level module which depends on views, and components
angular.module('TimesApp', [
  'ngRoute',
  'TimesApp.home',
  'TimesApp.asset'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
