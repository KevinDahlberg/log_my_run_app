myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');
  let runArray = [];
  /*
  Checks to see if there is a user logged in.  If there is, then it runs the
  function to fetRun get the information for that USER from the DB.
  */
  let getuser = () => {
    $http.get('/user').then(function(response) {
      if(response.data.username) {
        // user has a curret session on the server
        console.log('User Data: ', response.data.username);
        let currentUser = response.data.username;
        getRun(currentUser)
      } else {
        // user has no session, bounce them back to the login page
        $location.path("/login");
      }
    });
  }

  let getRun = (user) => {
    runArray.length = 0;
    $http.get('/runlog/').then(function(response){
      console.log(response);
      let userObj = new User (user, response)
      runArray.push(userObj);
      console.log(runArray);
    });
  };

  // logout function that is triggered when logout is clicked
  let logout =() => {
    $http.get('/user/logout').then(function(response) {
      console.log('logged out');
      $location.path("/login");
    });
  };

  let addRun = (run, username) => {
    let obj = {user : username, run : run}
    console.log(obj);
    $http.post('/runlog/addRun', obj).then(function(response){
    });
  };

  return {

    getuser,
    logout,
    runArray,
    addRun

  }

}]);
