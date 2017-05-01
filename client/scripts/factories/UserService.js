myApp.factory('UserService', ['$http', '$location',
($http, $location) => {

  let dropdownTime = new Time (TIME);
  let dropdownMiles = new Distance (DISTANCE);
  let defaultRun = new Run(DEFAULT_RUN);
  let user = new User ();
  let savedRun = {};
  let currentWeek = moment().format('ww');
  console.log(currentWeek);

  console.log(defaultRun);
  /**
  * @function SAVE RUN FUNCTION
  * @desc copies the information from the object that was clicked to the savedRun object.
  * @param takes in the value of the Run that is clicked on
  * @return copies that value to savedRun, transfers the view to /runView
  */
  let saveRun = (object) => {
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

  let runEdit = () => {
    $location.path('/editRun')
  };





  return {
    user,
    dropdownTime, //
    dropdownMiles, //
    defaultRun, //
    enterView, //
    savedRun, //
    saveRun,
    runEdit,
    currentWeek

  }

}]);
