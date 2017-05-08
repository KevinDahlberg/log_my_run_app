/**
* RUN VIEW CONTROLLER
* @desc controls the run view
* @param UserService and DatabaseService
* @return shows the run that is selected from the home screen
*/

myApp.controller('RunViewController', ['UserService', 'DatabaseService',
function(UserService, DatabaseService){
  let viewRun = this;

  viewRun.savedRun = UserService.savedRun;
  viewRun.deleteRun = DatabaseService.deleteRun;
  viewRun.user = UserService.user;
  viewRun.runEdit = UserService.runEdit;

}]);
