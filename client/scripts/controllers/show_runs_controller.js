myApp.controller('ShowRunsController', ['dbRoutes','UserService', 'RunService', function(dbRoutes, UserService, RunService){
  let showRun = this;
  showRun.runArray = UserService.runArray;
  showRun.logout = UserService.logout;
  showRun.runView = RunService.runView;
  showRun.userName = UserService.userName;

}]);
