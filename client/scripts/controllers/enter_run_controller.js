myApp.controller('EnterRunController', ['UserService', function(UserService){
  let enterRun = this;

  this.date = new Date();
  this.isOpen = false;

  this.runArray = UserService.runArray;
  enterRun.addRun = UserService.addRun;
  enterRun.runSubmit = UserService.runSubmit;
  enterRun.dropdownTime = UserService.dropdownTime;
  enterRun.dropdownMiles = UserService.dropdownMiles;
}]);
