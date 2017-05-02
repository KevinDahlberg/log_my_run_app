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
    this.summery = [{weekSum : '', monthSum : '', yearSum : ''}];
    this.currentWeek = moment().format('ww');
    this.currentDateRange = moment().weekday(0).format('MM/DD/YYYY') + ' to ' + moment().weekday(6).format('MM/DD/YYYY');
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

  /**
  * @method PopulateRuns
  * @desc method called after the user logs in to GET all of the runs
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

  /**
  * @method populateSummary
  * @desc takes in the current date and only shows the information for that week
  * @param today's date
  * @return the runs for the week of that date.
  * function needs to get the information from the beginning of the week (the week number)
  * from the date.
  */
  populateSummery (array) {
    let weekArray = [];
    let yearArray = [];
    let monthArray = [];
    for (let run of array){
      if (run.date.year === moment().format('YYYY')){
        yearArray.push(run.distance);
        if (run.date.month === moment().format('MM')){
          monthArray.push(run.distance);
        }
      }
      if (run.date.dateRange === this.currentDateRange){
          weekArray.push(run.distance);
      }
    }
    this.summery[0].weekSum = this.arraySum(weekArray);
    this.summery[0].monthSum = this.arraySum(monthArray);
    this.summery[0].yearSum = this.arraySum(yearArray);
  }

  arraySum (array) {
    let sum = 0;
    for (let num of array){
      sum += parseFloat (num);
    }
    return sum;
  }

}
