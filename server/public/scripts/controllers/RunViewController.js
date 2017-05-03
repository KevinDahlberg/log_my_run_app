myApp.controller('RunViewController', ['UserService', 'DatabaseService',
function(UserService, DatabaseService){
  let viewRun = this;

  viewRun.savedRun = UserService.savedRun;
  viewRun.deleteRun = DatabaseService.deleteRun;
  viewRun.user = UserService.user;
  viewRun.runEdit = UserService.runEdit;

}]);
