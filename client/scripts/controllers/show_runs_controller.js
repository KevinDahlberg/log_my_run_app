myApp.controller('ShowRunsController', ['dbRoutes','UserService', 'RunService', function(dbRoutes, UserService, RunService){
  let showRun = this;
  showRun.runArray = dbRoutes.runArray;
  showRun.getRun = dbRoutes.getRun;
  showRun.getRun();
  showRun.logout = UserService.logout;
  showRun.runView = RunService.runView;
  showRun.userObject = UserService.userObject;

  console.log(showRun.userObject);

}]);
