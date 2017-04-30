myApp.factory('UserService', ['$http', '$location',
($http, $location) => {

  let dropdownTime = new Time (HOURS, MINUTES, SECONDS);
  let dropdownMiles = new Distance (MILES, MILES_PARTIAL);
  let defaultRun = new Run(DEFAULT_RUN);
  let user = new User ();
  let savedRun = {};


  /**
  * @function SAVE RUN FUNCTION
  * @desc copies the information from the object that was clicked to the savedRun object.
  * @param takes in the value of the Run that is clicked on
  * @return copies that value to savedRun, transfers the view to /runView
  */
  let saveRun = (object) => {
    console.log(object);
    angular.copy(object, savedRun);
    $location.path('/runView');
  };

  /**
  * @function ENTER VIEW FUNCTION
  * @desc copies the defaultRun to savedRun and transfers the view to the Enter Run View.
  */
  let enterView = () => {
    angular.copy(defaultRun, savedRun);
    $location.path('/enterRun');
  };


  return {
    user,
    dropdownTime, //
    dropdownMiles, //
    defaultRun, //
    enterView, //
    savedRun, //
    saveRun

  }

}]);
