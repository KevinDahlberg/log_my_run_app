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
    console.log(object);
    angular.copy(object, savedRun);
    runView();
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
    runEdit, //
    defaultRun, //
    enterView, //
    savedRun, //
    saveRun

  }

}]);
