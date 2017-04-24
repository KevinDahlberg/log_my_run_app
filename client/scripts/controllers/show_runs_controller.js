myApp.controller('ShowRunsController', ['dbRoutes', function(dbRoutes){
  let showRun = this;
  showRun.runArray = dbRoutes.runArray;
  showRun.getRun = dbRoutes.getRun;
  showRun.getRun();

}]);
