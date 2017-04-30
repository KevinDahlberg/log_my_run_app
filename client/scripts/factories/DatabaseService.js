myApp.factory('DatabaseService', ['$http', '$location', 'UserService',
function($http, $location, UserService){
  let db = this;

  db.user = UserService.user
  /**
  * @function GET RUN FUNCTION
  * @desc function called after the user logs in to GET all of the runs
  * @param parameters that are sent in the GET include information from the user session.
  * @return sends the data to the populateRuns method in the user
  */
  let getRun = () => {
    if (db.user.runArray.length === 0){
      $http.get('/runlog/').then((response) => {
        let runObj = response.data;
        db.user.populateRuns(runObj);
      });
    } else {
      return;
    }
  };

  return {
    getRun
  }
}]);
