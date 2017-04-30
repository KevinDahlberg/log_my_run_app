/**
* @class USER
* @desc Saves the user information, and provides login, logout, and register functionality
* @param nothing gets put in, but it does have $http and $location functionality injected
* @return when the user logs in, the information is saved under userName.  Logout it gets
* removed, register allows for the creation of a new user.
*/

class User {
  constructor() {
    this.userName = '';
    this.userId = '';
    this.runArray = [];
  }

  /**
  @method populateUser
  @desc populates the information of the user.  called after login in the UserAuthService
  @param object that contains username, password, and _id.
  @return the end result is that the detail for the user will populate.
  */
  populateUser (object) {
    this.userName = object.username;
    this.userId = object._id;
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
  * @function Step: 2 GET RUN FUNCTION
  * @desc function called after the user logs in to GET all of the runs
  * @param parameters that are sent in the GET include information from the user session.
  * @return an array of Run objects is created when the items come back from the DB
  */
  populateRuns (object) {
      this.runArray.length = 0;
      for (let item of object){
        let run = new Run (item);
        this.runArray.push(run);
      }
    }
  }
