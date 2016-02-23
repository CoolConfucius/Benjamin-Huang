'use strict'; 

var app = angular.module('myApp', []); 

app.controller('mainCtrl', function($scope) {

  console.log("mainCtrl");
  $scope.lightsout = true; 
  $scope.toggle = function(){
    $scope.lightsout = !$scope.lightsout; 
  }
  
}); 