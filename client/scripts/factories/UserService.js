myApp.factory('UserService', ['$http', '$location',
($http, $location) => {
  let runApp = this;

  let dropdownTime = new Time (HOURS, MINUTES, SECONDS);
  let dropdownMiles = new Distance (MILES, MILES_PARTIAL);
  let defaultRun = new Run(DEFAULT_RUN);
  let user = new User ();
  let savedRun = {};


  /**
  * @function SAVE RUN FUNCTION
  * @desc copies the information from the object that was clicked to the savedRun object.
  * @param takes in the value of the Run that is clicked on
  * @return copies that value to savedRun, transfers the view to run_view
  */
  let saveRun = (object) => {
    thisRun.length = 0;
    console.log(object);
    angular.copy(object, savedRun);
    runView();
  };

  /**
  * @function DELETE RUN FUNCTION
  * @desc deletes an item from the DB
  * @param takes in an Object and sends the ID of the object to the server side
  * @return upon completion the user is taken home with runSubmit, and the array length is
  * deleted to trigger a repopulation from the DB.
  */
  let deleteRun = (object) => {
    console.log(object.id);
    $http.delete('/runlog/' + object.id).then(function(response){
      runArray.length = 0;
      runSubmit();
    });
  };

  /**
  * @function EDIT RUN function
  * @desc PUT statement that edits a run in the DB
  * @param run object that gets sent to the DB
  * @return clears out runArray, runSubmit changes the view to the homepage, which triggers getUser,
  * which will trigger checkArray, which will trigger getRun.
  */
  let editRun = (run) => {
    $http.put('/runlog/editRun', run).then(function(response){
      runArray.length = 0;
      runSubmit();
    });
  };

  /**
  * @function RUN EDIT FUNCTION
  * @desc catchall function that changes the view to /editRun
  */
  let runEdit = () => {
    console.log('in runEdit path');
    $location.path('/editRun');
  };

  /**
  * @function ENTER VIEW FUNCTION
  * @desc transfers the view to the Enter Run View.
  */
  let enterView = () => {
    angular.copy(defaultRun, savedRun);
    $location.path('/enterRun');
  };

  /**
  * @function RUN VIEW FUNCTION
  * @desc transfers the view to the run view view.
  */
  let runView = () => {
    $location.path('/runView');
  };

  /**
  * @function RUN SUBMIT FUNCTION
  * @desc catchall function that takes the user the the homepage.
  */
  let runSubmit = () => {
    $location.path('/home');
  };

  return {
    user,
    dropdownTime, //
    dropdownMiles, //
    deleteRun, //
    editRun, //
    runEdit, //
    defaultRun, //
    enterView, //
    savedRun, //
    saveRun,

  }

}]);
