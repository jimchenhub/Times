'use strict';

angular.module('TimesApp.asset', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/asset', {
    templateUrl: 'asset/asset.html',
    controller: 'AssetController'
  });
}])

.controller('AssetController', [function() {

}]);