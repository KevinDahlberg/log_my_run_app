console.log('client.js sourced');
var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
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
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/enterRun', {
      templateUrl: '/views/templates/enter_run.html',
      controller: 'EnterRunController as enterRun',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/runView', {
      templateUrl: '/views/templates/run_view.html',
      controller: 'RunViewController as runView',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
      }]
    }
    })

    .otherwise({
      redirectTo: 'login'
    });
}]);
