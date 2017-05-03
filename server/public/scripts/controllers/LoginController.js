myApp.controller('LoginController', ['$http', '$location', 'UserService', 'UserAuthService',
 function($http, $location, UserService, UserAuthService) {
  let login = this;
  
    login.login = UserAuthService.login;
    login.registerUser = UserAuthService.registerUser;
}]);
