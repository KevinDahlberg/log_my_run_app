myApp.controller('EnterRunController', ['UserService', function(UserService){
  let enterRun = this;
  this.runArray = UserService.runArray
  enterRun.addRun = UserService.addRun;
  enterRun.runSubmit = UserService.runSubmit;
}]);
