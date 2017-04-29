myApp.controller('LoginController', ['$http', '$location', 'UserService', function($http, $location, UserService) {
  let login = this;
    login.user = {
      username: '',
      password: ''
    };
    
    login.message = '';
    login.getRun = UserService.getRun;

    /*
    Step 1.  Login.  If the Login goes through, all of the data for that user gets stored in the factory with the
    getRun function.
    If the login doesn't go through, it errors out, and the user needs to either try again or register.
    */
    login.login = () => {
      if(login.user.username === '' || login.user.password === '') {
        login.message = "Enter your username and password!";
      } else {
        console.log('sending to server...', login.user);
        $http.post('/', login.user).then(function(response) {
          if(response.data.username) {
            console.log('success: ', response.data);
            // location works with SPA (ng-route)
            $location.path('/home');
          } else {
            console.log('failure: ', response);
            login.message = "Wrong!!";
          }
        });
      }
    };

    /*
    Registers a user.  If it's a success, takes then it takes the new User information
    and logs that person in to a brand new account.
    */
    login.registerUser = () => {
      if(login.user.username === '' || login.user.password === '') {
        login.message = "Choose a username and password!";
      } else {
        console.log('sending to server...', login.user);
        $http.post('/register', login.user).then(function(response) {
          console.log('success');
          login.login();
        },
        function(response) {
          console.log('error');
          login.message = "Please try again."
        });
      }
    }
}]);
