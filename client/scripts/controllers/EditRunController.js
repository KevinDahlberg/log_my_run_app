myApp.controller('EditRunController', ['UserService', function(UserService){
  let editRun = this;

  this.myDate = new Date();
  this.isOpen = false;

  editRun.runSubmit = UserService.runSubmit;
  editRun.thisRun = UserService.thisRun;
  editRun.deleteRun = UserService.deleteRun;
  editRun.editRun = UserService.editRun;
  editRun.runEdit = UserService.runEdit;
  editRun.dropdownTime = UserService.dropdownTime;
  editRun.dropdownMiles = UserService.dropdownMiles;
}]);
