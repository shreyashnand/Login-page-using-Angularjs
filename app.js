
var validationApp = angular.module('validationApp', []); 
validationApp.controller('mainController',function($scope){
  $scope.submitForm = function (){
    
    if($scope.loginForm.valid){
      alert('success');
    }
  }
});