class Run {

  constructor (run){
    //id, date, distance, time, notes, parsedDistance, parsedTime

    this.id = run.id;
    this.date = run.date;
    this.distance = run.distance;
    this.time = run.time;
    this.notes = run.notes;
    this.parsedDistance = run.parsedDistance;
    this.parsedTime = run.parsedTime;
    this.combineDistance(run.parsedDistance);
    this.combineTime(run.parsedTime);
  }

  combineTime (time) {
    time = time.hours + ':' + time.minutes + ':' + time.seconds;
      console.log('combine: ', time);
    this.time = time;
  }

  combineDistance (distance) {
     distance = distance.miles + distance.partialMiles;
     console.log('combine: ', distance);
     this.distance = distance;
  }

  // static createDefaultRun (){
  //   let run = {
  //     date : '',
  //     distance : '',
  //     time : '',
  //     notes : '',
  //     parsedDistance : {miles : '0', partialMiles : '.00'},
  //     parsedTime : {hours : '0', minutes : '00', seconds : '00'}
  //   };
  //   let today = moment().format('MM/DD/YYYY');
  //   run.date = today;
  //   let defaultRun = new Run (run);
  // }

  createDate (){
    let today = moment().format('MM/DD/YYYY');
    this.date = today;
  }
}

// /**
// * @desc NewRun Class creates a new run with default values that can be changed by
// * the enterRun function.
// */
// class NewRun extends Run{
//   constructor (date, distance, time, notes, parsedDistance, parsedTime){
//     this.date = '';
//     this.distance = '0.00';
//     this.time = '0:00:00';
//     this.notes = '';
//     this.parsedDistance = {miles : '0', partialMiles : '.00'};
//     this.parsedTime = {hours : '0', minutes : '00', seconds : '00'};
//     this.createDate ();
//   }
//
//   /**
//   * @desc gets todays date and formats it in MM/DD/YYYY formats
//   * @param takes advantage of the built in Date prototype
//   * @return gets the date in Milliseconds, then the year, month and day need to
//   * be extrapolated from it.  Then it sets the value of this.date
//   */
//   createDate (){
//     let today = moment().format('MM/DD/YYYY');
//     this.date = today;
//   }
// }
