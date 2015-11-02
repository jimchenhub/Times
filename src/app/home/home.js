'use strict';

var homeModule = angular.module('TimesApp.home', ['ngRoute']);

homeModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeController'
  });
}]);

homeModule.controller('HomeController', [function($scope) {

}]);

$(document).ready(function(){
  setTimeout(function(){showIcon(1)}, 100);
  setTimeout(function(){showIcon(2)}, 600);
  setTimeout(function(){showIcon(3)}, 1100);

  function showIcon(iconNum) {
    var va = "#icon-"+iconNum;
    $(va).animate({
      top:'0', opacity: 1
    }, 1000);
  }

  $(window).scroll(function(event){
    if($(window).scrollTop()>0){
      setTimeout(function test()
      {
        $(".page-1 .img-1").animate({
          top:'10', opacity: 1
        }, 1000);
        $(".page-1 .contact").animate({
          opacity:1
        },1000);
      } , 500);
    }
    if($(window).scrollTop()>($(".page").height())){
      setTimeout(function test()
      {
        $(".page-2 .img-1").animate({
          top:'10', opacity: 1
        }, 1000);
        $(".page-2 .contact").animate({
          opacity:1
        },1000);
      } , 500);
    }
  });
});