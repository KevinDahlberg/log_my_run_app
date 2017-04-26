myApp.controller('EnterRunController', ['dbRoutes', 'UserService', function(RunService, dbRoutes, UserService){
  let enterRun = this;
  this.runArray = UserService.runArray
  enterRun.addRun = UserService.addRun;
  enterRun.runSubmit = UserService.runSubmit;
}]);
