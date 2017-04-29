myApp.controller('ShowRunsController', ['UserService', function(UserService, RunService){
  let showRun = this;
  showRun.runArray = UserService.runArray;
  showRun.logout = UserService.logout;
  showRun.userName = UserService.userName;
  showRun.saveRun = UserService.saveRun;
  showRun.enterView = UserService.enterView;

}]);
