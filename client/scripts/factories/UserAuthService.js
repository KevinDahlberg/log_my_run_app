myApp.factory('UserAuthService', ['$http', '$location', 'UserService',
function($http, $location, UserService){
  let userAuth = this;

  userAuth.user = UserService.user;

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
      console.log('sending to server...', _user);
      $http.post('/', _user)
      .then((response) => {
        if(response.data.username) {
          console.log('success: ', response.data);
          _user = response.data;
          userAuth.user.populateUser(_user);
          $location.path('/home');
        } else {
          console.log('failure: ', response);
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
      console.log('sending to server...', _user);
      $http.post('/register', _user)
      .then((response) => {
        console.log('success');
        login(_user)
      },
      function(response) {
        console.log('error');
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
      console.log('logged out');
      userAuth.user.userId = '';
      userAuth.user.userName = '';
      userAuth.user.runArray = [];
      $location.path("/login");
    });
  }

  return {
    login,
    logout,
    registerUser
  }
}]);
