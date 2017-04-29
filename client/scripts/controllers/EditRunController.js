myApp.controller('EditRunController', ['UserService', function(UserService){
  let editRun = this;

  this.myDate = new Date();
  this.isOpen = false;

  editRun.savedRun = UserService.savedRun;
  editRun.editRun = UserService.editRun;
  editRun.dropdownTime = UserService.dropdownTime;
  editRun.dropdownMiles = UserService.dropdownMiles;
}]);
