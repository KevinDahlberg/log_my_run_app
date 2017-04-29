class User {
  constructor($http, $location) {
     'ngInject';
    this._$http = $http;
    this._$location = $location;
    this.userName = {};
    this.runArray = [];
  }

  /*
  filters out the runs that belong to the username of the class.  If the username
  is the same, then it pushes the run object into the runs portion of the user.
  */
  filterRuns (object) {
    this.runs.length = 0;
    for (let item of object.data){
    if (this.user===object.userName) {
      this.runs.push(object);
    }
  }
}

/**
* @method Login
* @param tkaes in the user object which consists of a username and password from the login screen
* @return If the Login goes through, the name of the user gets stored in the user class, the view changes to home
* If the login doesn't go through, it errors out, and the user needs to either try again or register.
*/
login (object) {
  let _user = {username : object.username, password : object.password};
  if(_user.username === '' || _user.password === '') {
    alert("Enter your username and password!");
  } else {
    console.log('sending to server...', _user);
    this._$http.post('/', _user).then((response) => {
      if(response.data.username) {
        console.log('success: ', response.data.username);
        this.username = response.data.username;
        this._$location.path('/home');
      } else {
        console.log('failure: ', response);
        alert("Wrong!!");
      }
    });
  }
}

/**
* @method REGISTER USER
* @param takes in an object that contains a username and password
* @return If it's a success, takes then it takes the new User information
* and logs that person in to a brand new account.  Failure, and it asks to try
* again.
*/
registerUser (object) {
  let _user = {username: object.username, password : object.password};
  if(_user.username === '' || _user.password === '') {
    alert("Choose a username and password!");
  } else {
    console.log('sending to server...', _user);
    this._$http.post('/register', _user).then((response)=> {
      console.log('success');
      this._$location.path('/login');
    },
    function(response) {
      console.log('error');
      alert("Please try again.");
    });
  }
}

/**
* @function Step: 2 GET RUN FUNCTION
* @desc function called after the user logs in to GET all of the runs
* @param parameters that are sent in the GET include information from the user session.
* @return an array of Run objects is created when the items come back from the DB
*/
getRun () {
  runArray.length = 0;
  this._$http.get('/runlog/').then(function(response){
    let runObj = response.data;
    for (let item of runObj){
      let run = new Run (item);
      this.runArray.push(run);
    }
  })
}
}
