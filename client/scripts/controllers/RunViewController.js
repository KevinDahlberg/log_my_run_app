myApp.controller('RunViewController', ['UserService', function(UserService){
  let viewRun = this;
  viewRun.thisRun = UserService.thisRun;
  viewRun.deleteRun = UserService.deleteRun;
  viewRun.runEdit = UserService.runEdit;
}]);
