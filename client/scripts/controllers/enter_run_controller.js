myApp.controller('EnterRunController', ['RunService', 'dbRoutes', function(RunService, dbRoutes){
  let enterRun = this;

  enterRun.addRun = dbRoutes.addRun;
  enterRun.runSubmit = RunService.runSubmit;
}]);
