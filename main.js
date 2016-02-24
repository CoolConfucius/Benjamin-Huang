'use strict'; 

var app = angular.module('myApp', ['ui.router']); 

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {url: '/', templateUrl: './html/home.html' })
  
  $urlRouterProvider.otherwise('/'); 
});

app.controller('mainCtrl', function($scope) {

  console.log("mainCtrl");
  $scope.lightsout = false; 
  $scope.toggle = function(){
    $scope.lightsout = !$scope.lightsout; 
  }

  $scope.hidedeets = true; 
  $scope.toggledeets = function(){
    $scope.hidedeets = !$scope.hidedeets; 
  }
  
}); 