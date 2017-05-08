/**
* EDIT RUN CONTROLLER
* @desc controls the view for editing the run.
* @param UserService and DatabaseService
* @return the new run gets submitted to the DB, and on submit the view goes
* back to the home view.
*/

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
