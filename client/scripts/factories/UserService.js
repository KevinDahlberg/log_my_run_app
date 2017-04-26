myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');
  let runArray = [];
  let userName= [];

  /*
  Checks to see if there is a user logged in.  If there is, then it runs the
  function to fetRun get the information for that USER from the DB.  This
  function is called every time the view changes.
  */
  let getuser = () => {
    $http.get('/user').then(function(response) {
      if(response.data.username) {
        // user has a curret session on the server
        console.log('User Data: ', response.data.username);
        userName.length = 0;
        userName.push(response.data.username);
      } else {
        // user has no session, bounce them back to the login page
        $location.path("/login");
      }
    });
  }

  /*
  Step: 2
  User logs in, and if the login is a success, then the getRun function is called.
  After the function is called, the response is saved in this factory as runArray.
  */
  let getRun = () => {
    runArray.length = 0;
    $http.get('/runlog/').then(function(response){
      console.log(response);
      let runObj = response.data;
      for (let item of runObj){
      runArray.push(item);
    }
      // console.log(runArray);
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
    let obj = run
    console.log(obj);
    $http.post('/runlog/addRun', obj).then(function(response){
      getRun();
    });
  };

  let runSubmit = () => {
    $location.path('/home');
  };

  return {

    getuser,
    logout,
    runArray,
    userName,
    addRun,
    runSubmit,
    getRun

  }

}]);
