myApp.controller('LoginController', ['$http', '$location', 'UserService', function($http, $location, UserService) {
  let login = this;
    login.user = {
      username: '',
      password: ''
    };
    login.message = '';

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

    login.registerUser = () => {
      if(login.user.username === '' || login.user.password === '') {
        login.message = "Choose a username and password!";
      } else {
        console.log('sending to server...', login.user);
        $http.post('/register', login.user).then(function(response) {
          console.log('success');
          $location.path('/home');
        },
        function(response) {
          console.log('error');
          login.message = "Please try again."
        });
      }
    }
}]);
