myApp.controller('RunViewController', ['dbRoutes','UserService', 'RunService', function(dbRoutes, UserService, RunService){
  let viewRun = this;
  viewRun.thisRun = RunService.thisRun;
  console.log(viewRun.thisRun);
  viewRun.viewRun = RunService.viewRun;
  

}]);
