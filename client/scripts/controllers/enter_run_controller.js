myApp.controller('EnterRunController', ['RunService', function(RunService){
  let enterRun = this;

  enterRun.enterNewRun = RunService.enterNewRun;
}]);
