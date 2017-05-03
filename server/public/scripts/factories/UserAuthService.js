console.log('UserAuthService Loaded');
myApp.factory('UserAuthService', ['$http', '$location', 'UserService', 'DatabaseService',
function($http, $location, UserService, DatabaseService){
  let userAuth = this;
  userAuth.getRun = DatabaseService.getRun;
  userAuth.user = UserService.user;
  userAuth.checkArray = UserService.checkArray;

  /**
  * @function Login
  * @param tkaes in the user object which consists of a username and password from the login screen
  * @return If the Login goes through, the name of the user gets stored in the user class, the view changes to home
  * If the login doesn't go through, it errors out, and the user needs to either try again or register.
  */
  let login = (object) => {
    let _user = {username : object.username, password : object.password};
    if(_user.username === '' || _user.password === '') {
      alert("Enter your username and password!");
    } else {
      $http.post('/', _user)
      .then((response) => {
        if(response.data.username) {
          _user = response.data;
          userAuth.user.populateUser(_user);
          $location.path('/home');
        } else {
          alert("Wrong!!");
        }
      });
    }
  };

  /**
  * @function REGISTER USER
  * @param takes in an object that contains a username and password
  * @return If it's a success, takes then it takes the new User information
  * and logs that person in to a brand new account.  Failure, and it asks to try
  * again.
  */
  let registerUser = (object) => {
    let _user = {username: object.username, password : object.password};
    if(_user.username === '' || _user.password === '') {
      alert("Choose a username and password!");
    } else {
      $http.post('/register', _user)
      .then((response) => {
        login(_user)
      },
      function(response) {
        alert("Please try again.");
      });
    }
  };

  /**
  @function logout function that is triggered when logout is clicked
  */
  let logout = () => {
    $http.get('/user/logout')
    .then((response) => {
      userAuth.user.userId = '';
      userAuth.user.userName = '';
      userAuth.user.runArray = [];
      $location.path("/login");
    });
  }

  /**
  * @function GET USER FUNCTION - ON VIEW LOAD THIS FUNCTION RUNS
  * @desc Checks to see if there is a user session.
  * @param the request has a big chunk of something in it that has information on the user that the server side looks at.
  * @return function brings back the user name info, if there is then it runs the checkArray function to see if the
  * run data needs to be repopulated from the DB.  If there is no user info, then it sends the user back to the login screen.
  */
  let getUser = () => {
    $http.get('/user').then(function(response) {
      if(response.data.username === userAuth.user.userName) {
        // user has a curret session on the server
        userAuth.getRun();
      } else {
        // user has no session, bounce them back to the login page
        $location.path("/login");
      }
    });
  };

  return {
    login,
    logout,
    registerUser,
    getUser
  }
}]);
