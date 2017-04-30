console.log('client.js sourced');
var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', '$mdDateLocaleProvider',
      function($routeProvider, $locationProvider, $mdDateLocaleProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/login', {
      templateUrl: '/views/templates/login.html',
      controller: 'LoginController as login',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as register'
    })
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'ShowRunsController as showRun',
      resolve: {
        getuser : ['UserAuthService', function(UserAuthService){
          return UserAuthService.getUser();
        }]
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController',
      resolve: {
        getuser : ['UserAuthService', function(UserAuthService){
          return UserAuthService.getUser();
        }]
      }
    })
    .when('/enterRun', {
      templateUrl: '/views/templates/enter_run.html',
      controller: 'EnterRunController as enterRun',
      resolve: {
        getuser : ['UserAuthService', function(UserAuthService){
          return UserAuthService.getUser();
        }]
      }
    })
    .when('/runView', {
      templateUrl: '/views/templates/run_view.html',
      controller: 'RunViewController as runView',
      resolve: {
        getuser : ['UserAuthService', function(UserAuthService){
          return UserAuthService.getUser();
      }]
    }
    })
    .when('/editRun', {
      templateUrl: '/views/templates/edit_run.html',
      controller: 'EditRunController as editRun',
      resolve: {
        getuser : ['UserAuthService', function(UserAuthService){
          return UserAuthService.getuser();
      }]
    }
    })
    .otherwise({
      redirectTo: 'login'
    });

  $mdDateLocaleProvider.formatDate = function(date) {
   return moment(date).format('MM-DD-YYYY');
  };
}]);
