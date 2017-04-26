myApp.controller('RunViewController', ['dbRoutes','UserService', function(dbRoutes, UserService){
  let viewRun = this;
  viewRun.thisRun = UserService.thisRun;
  console.log(viewRun.thisRun);
  viewRun.viewRun = UserService.viewRun;


}]);
