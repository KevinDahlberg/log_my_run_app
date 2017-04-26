myApp.controller('ShowRunsController', ['dbRoutes','UserService', function(dbRoutes, UserService, RunService){
  let showRun = this;
  showRun.runArray = UserService.runArray;
  showRun.logout = UserService.logout;
  showRun.runView = UserService.runView;
  showRun.userName = UserService.userName;

}]);
