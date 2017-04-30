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

  /**
  * @function ENTER RUN VIEW STEP 1
  * @desc posts the created run into the database
  * @param the run that is created on the Enter Run view
  * @return calls runSubmit function
  */
  let addRun = (object) => {
    let run = object;
    $http.post('/runlog/addRun', run).then((response) => {
    runSubmit();
    });
  };

  /**
  * @function DELETE RUN FUNCTION
  * @desc deletes an item from the DB
  * @param takes in an Object and sends the ID of the object to the server side
  * @return calls runSubmit function
  */
  let deleteRun = (object) => {
    console.log(object.id);
    $http.delete('/runlog/' + object.id).then(function(response){
    runSubmit();
    });
  };

  /**
  * @function EDIT RUN function
  * @desc PUT statement that edits a run in the DB
  * @param run object that gets sent to the DB
  * @return calls runSubmit function
  */
  let editRun = (run) => {
    $http.put('/runlog/editRun', run).then(function(response){
      runSubmit();
    });
  };

  /**
  * @function runSubmit
  # @desc called after a change to the DB is submitted
  * @return clears out the runArray, calls the getRun function, and takes the user
  * to the /home view.
  */
  let runSubmit = () => {
    db.user.runArray.length = 0;
    getRun();
    $location.path('/home');
  }

  return {
    getRun,
    addRun,
    deleteRun,
    editRun
  }
}]);
