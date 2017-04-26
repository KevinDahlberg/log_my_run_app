myApp.controller('EditRunController', ['UserService', function(UserService){
  let editRun = this;
  editRun.runSubmit = UserService.runSubmit;
  editRun.thisRun = UserService.thisRun;
  editRun.deleteRun = UserService.deleteRun;
  editRun.editRun = UserService.editRun;
}]);
