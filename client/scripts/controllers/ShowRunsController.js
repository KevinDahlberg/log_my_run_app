myApp.controller('ShowRunsController', ['UserService', 'UserAuthService',
function(UserService, UserAuthService){
  let showRun = this;


  showRun.currentWeek = UserService.currentWeek;
  showRun.saveRun = UserService.saveRun;
  showRun.enterView = UserService.enterView;
  showRun.user = UserService.user;
  showRun.logout = UserAuthService.logout;
}]);
