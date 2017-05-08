/**
* @class RUN class
* @desc This is the class for all of the runs
* @param a run object is brought into the class
* @return the constructor breaks down the object and assigns the params to different parts.
* it also makes sure the info in the parsed params is the same as the info in the combined params.
*/

class Run {

  constructor (run){
    this.id = run._id;
    this.date = run.date;
    this.distance = run.distance;
    this.time = run.time;
    this.notes = run.notes;
    this.parsedDistance = run.parsedDistance;
    this.parsedTime = run.parsedTime;
    this.combineDistance(run.parsedDistance);
    this.combineTime(run.parsedTime);
    this.formatDate(run.date);
    this.currentDateRange = moment().weekday(0).format('MM/DD/YYYY') + ' to ' + moment().weekday(6).format('MM/DD/YYYY');
    this.weekSum = 0;
  }

  /**
  * @method Combine Time
  * @desc combines time into something that is readable on the DOM
  * @param time object that contains hours, minutes, and seconds
  * @return an item that reads hours:minutes:seconds (0:00:00)
  */
  combineTime (time) {
    time = time.hours + ':' + time.minutes + ':' + time.seconds;
    this.time = time;
  }

  /**
  * @method Combine distance
  * @desc combines the different parts of the distance into something readable on the DOM
  * @param distance object that contains distance.miles and distance.partial miles.
  * @return item that reads miles.partialMiles (0.00)
  */
  combineDistance (distance) {
    distance = distance.miles + distance.partialMiles;
    this.distance = distance;
  }

  /**
  * @method Format date
  * @desc formats the date into something that can be used in various portions of the app.
  * @param a date that is brought in from the calander
  * @return object that contains different formats of the date that are accessed in the app.
  */
  formatDate (date) {
    let _date = moment(date.date).format('MM/DD/YYYY');
    let shortDate = moment(date.date).format('MM/DD')
    let dayOfWeek = moment(date.date).format('e');
    let weekOfYear = moment(date.date).format('ww');
    let dayOfYear = moment(date.date).format('DDDD');
    let month = moment(date.date).format('MM');
    let year =  moment(date.date).format('YYYY');
    let dateRange = moment(date.date).weekday(0).format('MM/DD/YYYY') + ' to ' + moment(date.date).weekday(6).format('MM/DD/YYYY');
    this.date = {
      date : _date,
      shortDate : shortDate,
      dayOfWeek : dayOfWeek,
      weekOfYear : weekOfYear,
      dayOfYear : dayOfYear,
      month : month,
      year : year,
      dateRange : dateRange
    };
  }
}
