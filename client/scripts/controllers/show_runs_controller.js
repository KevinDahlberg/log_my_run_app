myApp.controller('ShowRunsController', ['dbRoutes','UserService', function(dbRoutes, UserService){
  let showRun = this;
  showRun.runArray = dbRoutes.runArray;
  showRun.getRun = dbRoutes.getRun;
  showRun.getRun();
  showRun.logout = UserService.logout;

}]);
