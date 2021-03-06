console.log('client.js sourced');
var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages']);

myApp.filter('unique', function() {
  return function(obj) {
    let dates = []
      angular.forEach(obj, function(value, key){
        if (dates.includes(value.date.dateRange)){
        } else {
        dates.push(value.date.dateRange);
    }
  });
    return dates;
  };
});

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', '$mdDateLocaleProvider', '$mdThemingProvider',
      function($routeProvider, $locationProvider, $mdDateLocaleProvider, $mdThemingProvider) {
  $locationProvider.hashPrefix('');
  $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('grey')
      .dark();

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
          return UserAuthService.getUser();
      }]
    }
    })
    .otherwise({
      redirectTo: 'login'
    });
    $mdDateLocaleProvider.formatDate = function(date) {
     return date ? moment(date).format('MM/DD/YYYY') : '';
    };
}]);
