myApp.controller('LoginController', ['$http', '$location', 'UserService', 'UserAuthService',
 function($http, $location, UserService, UserAuthService) {
  let login = this;
    login.message = '';
    login.getRun = UserService.getRun;
    login.login = UserAuthService.login;
    login.registerUser = UserAuthService.registerUser;
}]);
