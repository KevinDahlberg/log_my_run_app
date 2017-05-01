myApp.controller('ShowRunsController', ['UserService', 'UserAuthService',
function(UserService, UserAuthService){
  let showRun = this;

  showRun.saveRun = UserService.saveRun;
  showRun.enterView = UserService.enterView;
  showRun.user = UserService.user;
  showRun.logout = UserAuthService.logout;
}]);
