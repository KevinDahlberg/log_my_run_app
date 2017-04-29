myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');
  let runArray = [];
  let userName= [];
  let thisRun = [];
  let dropdownTime = new Time (HOURS, MINUTES, SECONDS);
  let dropdownMiles = new Distance (MILES, MILES_PARTIAL);
  let defaultRun = new Run(DEFAULT_RUN);
  let savedRun = {};

  /**
  * @function GET USER FUNCTION - ON VIEW LOAD THIS FUNCTION RUNS
  * @desc Checks to see if there is a user session.
  * @param the request has a big chunk of something in it that has information on the user that the server side looks at.
  * @return function brings back the user name info, if there is then it runs the checkArray function to see if the
  * run data needs to be repopulated from the DB.  If not, then it sends the user back to the login screen.
  */
  let getUser = () => {
    $http.get('/user').then(function(response) {
      if(response.data.username) {
        // user has a curret session on the server
        userName.length = 0;
        userName.push(response.data.username);
        checkArray(runArray);
      } else {
        // user has no session, bounce them back to the login page
        $location.path("/login");
      }
    });
  };

  /**
  * @function CHECK ARRAY RUNS ON VIEW LOAD
  * @desc checks to see if an array has anything in it, generally happens before getRun
  * @param array
  * @return if there isn't anything in the array, it runs the getRun function, otherwise it does nothing.
  */
  let checkArray = (array) => {
    if (array.length === 0) {
      getRun();
    } else {
      return;
    }
  };

  /**
  * @function Step: 2 GET RUN FUNCTION
  * @desc function called after the user logs in to GET all of the runs
  * @param parameters that are sent in the GET include information from the user session.
  * @return an array of Run objects is created when the items come back from the DB
  */
  let getRun = () => {
    runArray.length = 0;
    $http.get('/runlog/').then(function(response){
      let runObj = response.data;
      for (let item of runObj){
        let run = new Run (item);
        runArray.push(run);
      }
    });

  };

  /**
  @function logout function that is triggered when logout is clicked
  */
  let logout =() => {
    $http.get('/user/logout').then(function(response) {
      userName.length = 0;
      console.log('logged out');
      $location.path("/login");
    });
  };

  /**
  * @function ENTER RUN VIEW STEP 1
  * @desc posts the created run into the database
  * @param the run that is created on the addRun view
  * @return resets the runArray.length, and sends the user to the Home Page (show run view)
  * This  triggers the checkArray function, which triggers the getRun statement whent the User status is checked
  */
  let addRun = (object) => {
    let run = object;
    $http.post('/runlog/addRun', run).then(function(response){
      runArray.length = 0;
      runSubmit();
    });
  };

  /**
  * @function RUN VIEW FUNCTION
  * @desc changes to the runView with the information from the item that was clicked
  * @param takes in the value of the Run that is clicked on
  * @return pushes the run into thisRun and changes the location to runView
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
    dropdownTime, //
    dropdownMiles, //
    logout, //
    runArray, //
    userName, //
    addRun, //
    deleteRun, //
    editRun, //
    runEdit, //
    defaultRun, //
    enterView, //
    savedRun, //
    saveRun,
    getUser,
    getRun //

  }

}]);
