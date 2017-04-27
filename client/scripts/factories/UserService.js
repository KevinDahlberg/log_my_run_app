myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');
  let runArray = [];
  let userName= [];
  let thisRun = [];
  let dropdownTime = new Time (HOURS, MINUTES, SECONDS);
  let dropdownMiles = new Distance (MILES, MILES_PARTIAL);

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
  }

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

  /*
  Step: 2
  User logs in, and if the login is a success, then the getRun function is called.
  After the function is called, the response is saved in this factory as runArray.
  */
  let getRun = () => {
    runArray.length = 0;
    $http.get('/runlog/').then(function(response){
      let runObj = response.data;
      for (let item of runObj){
        let run = new Run (item._id, item.date, item.distance, item.time);
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

  /*
  Posts a run to the DB.  After the run posts, getRun function is called to get
  the run history.  Also, the page redirects to the "/home" view.
  */
  let addRun = (run) => {
    let obj = {
      date: run.date,
      distance: run.distance.miles + run.distance.partialMiles,
      time: run.time.hours + ':' + run.time.minutes + ':' + run.time.seconds
    };
    console.log(obj);
    $http.post('/runlog/addRun', obj).then(function(response){
      runArray.length = 0;
    });
  };

  let runSubmit = () => {
    $location.path('/home');
  };

  let runView = (object) => {
    thisRun.length = 0;
    console.log('runview object ', object);
    let viewRun = {
      _id : object.id,
      date : object.date,
      miles : object.parsedDistance.miles,
      partialMiles : object.parsedDistance.partialMiles,
      hours : object.parsedTime.hours,
      minutes : object.parsedTime.minutes,
      seconds : object.parsedTime.seconds
    };
    console.log(viewRun);
    thisRun.push(viewRun);
    $location.path('/runView');
  };

  let deleteRun = (object) => {
    console.log(object.id);
    $http.delete('/runlog/' + object.id).then(function(response){
      runSubmit();
      runArray.length = 0;
    });
  };

  let editRun = (run) => {
    console.log(thisRun[0]);
    let updatedRun = {
      _id : thisRun[0]._id,
      date: run.date,
      distance: run.miles + run.partialMiles,
      time: run.hours + ':' + run.minutes + ':' + run.seconds
    };
    console.log(updatedRun);

    $http.put('/runlog/editRun', updatedRun).then(function(response){
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
    runEdit

  }

}]);
