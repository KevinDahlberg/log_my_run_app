myApp.controller('EditRunController', ['UserService', 'DatabaseService',
function(UserService, DatabaseService){
  let editRun = this;

  this.myDate = new Date();
  this.isOpen = false;

  editRun.savedRun = UserService.savedRun;
  editRun.editRun = DatabaseService.editRun;
  editRun.dropdownTime = UserService.dropdownTime;
  editRun.dropdownMiles = UserService.dropdownMiles;
  editRun.user = UserService.user;
}]);
