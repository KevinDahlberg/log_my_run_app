myApp.controller('RunViewController', ['UserService', 'DatabaseService',
function(UserService, DatabaseService){
  let viewRun = this;
  viewRun.savedRun = UserService.savedRun;
  viewRun.deleteRun = DatabaseService.deleteRun;
  viewRun.runEdit = UserService.runEdit;
  viewRun.user = UserService.user;
}]);
