myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');
  let runArray = [];
  let userName= [];
  let thisRun = [];
  let dropdownTime = new Time (HOURS, MINUTES, SECONDS);
  let dropdownMiles = new Distance (MILES, MILES_PARTIAL);
  let newRun = new NewRun();

  /*
  Checks to see if there is a user logged in.  If there is, then it runs the
  function to fetRun get the information for that USER from the DB.  This
  function is called every time the view changes.
  */
  let getuser = () => {
    $http.get('/user').then(function(response) {
      if(response.data.username) {
        // user has a curret session on the server
        userName.length = 0;
        userName.push(response.data.username);
        console.log('in getuser path');
        checkArray(runArray);
      } else {
        // user has no session, bounce them back to the login page
        $location.path("/login");
      }
    });
  };

  /*
  checks to see if there are runs on runArray, if there aren't it populates the Data.
  */
  let checkArray = (array) => {
    if (array.length === 0) {
      getRun();
    } else {
      return;
    }
  };

  /**
  * Step: 2 GET RUN FUNCTION
  * @desc function called after the user logs in to GET all of the runs
  * @param parameters that are sent in the GET include information from the user session.
  * @return an array of Run objects is created when the items come back from the DB
  */
  let getRun = () => {
    runArray.length = 0;
    $http.get('/runlog/').then(function(response){
      let runObj = response.data;
      for (let item of runObj){
        let run = new Run (item._id, item.date, item.distance, item.time, item.notes, item.parsedDistance, item.parsedTime);
        runArray.push(run);
      }
    });

  };

  // logout function that is triggered when logout is clicked
  let logout =() => {
    $http.get('/user/logout').then(function(response) {
      userName.length = 0;
      console.log('logged out');
      $location.path("/login");
    });
  };

  /**
  * ENTER RUN VIEW STEP 1
  * @desc posts the created run into the database
  * @param the run that is created on the addRun view
  * @return resets the runArray.length, and sends the user to the Home Page (show run view)
  * This  triggers the checkArray function, which triggers the getRun statement whent the User status is checked
  */
  let addRun = (object) => {
    let run = object;
    console.log(run);
    $http.post('/runlog/addRun', run).then(function(response){
      runArray.length = 0;
    });
  };

  let runSubmit = () => {
    $location.path('/home');
  };

  /**
  * RUN VIEW FUNCTION
  * @desc changes to the runView with the information from the item that was clicked
  * @param takes in the value of the Run that is clicked on
  * @return pushes the run into thisRun and changes the location to runView
  */
  let runView = (object) => {
    thisRun.length = 0;
    console.log('runview object ', object);
    let viewRun = object
    console.log(viewRun);
    thisRun.push(viewRun);
    $location.path('/runView');
  };


  /**
  * ENTER VIEW FUNCTION
  * @desc transfers the view to the Enter Run View.
  * @param takes in the values of newRun and creates a new object with them.
  * @return pushes this new run into thisRun array and sends the user to the Enter Run View
  */
  let enterView = () => {
    $location.path('/enterRun');
  };

  let deleteRun = (object) => {
    console.log(object.id);
    $http.delete('/runlog/' + object.id).then(function(response){
      runSubmit();
      runArray.length = 0;
    });
  };

  let editRun = (run) => {
    console.log(run);

    $http.put('/runlog/editRun', run).then(function(response){
      getRun();
      runSubmit();
    });
  };

  let runEdit = () => {
    console.log('in runEdit path');
    $location.path('/editRun');
  };


  return {
    dropdownTime,
    dropdownMiles,
    getuser,
    logout,
    runArray,
    userName,
    addRun,
    runSubmit,
    getRun,
    thisRun,
    deleteRun,
    runView,
    editRun,
    runEdit,
    newRun,
    enterView

  }

}]);
