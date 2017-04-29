myApp.controller('RunViewController', ['UserService', function(UserService){
  let viewRun = this;
  viewRun.savedRun = UserService.savedRun;
  viewRun.deleteRun = UserService.deleteRun;
  viewRun.runEdit = UserService.runEdit;
}]);
