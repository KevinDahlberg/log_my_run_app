class Run {
  constructor (id, date, distance, time, notes, parsedDistance, parsedTime){
    this.id = id;
    this.date = date;
    this.distance = distance;
    this.time = time;
    this.notes = notes;
    this.parsedDistance = parsedDistance;
    this.parseShow(parsedDistance, parsedTime);
    this.parsedTime = parsedTime;
  }

  parseShow (parsedDistance, parsedTime){
    console.log(parsedDistance, parsedTime);
  }
  
  parseTime (time) {
    this.parsedTime.hours = time.toString().split(':')[0];
    this.parsedTime.minutes = time.toString().split(':')[1];
    this.parsedTime.seconds = time.toString().split(':')[2];
  }

  // date: run.date,
  // distance: run.distance.miles + run.distance.partialMiles,
  // time: run.time.hours + ':' + run.time.minutes + ':' + run.time.seconds

  parseDistance (distance){
    //takes the number or string, makes sure it is a string and splits it before [0] and after [1] the decimal
      this.parsedDistance.miles = distance.toString().split('.')[0];
      let pMi = distance.toString().split('.')[1];
      this.parsedDistance.partialMiles = pMi
  }

  combineTime (time) {
    time = time.hours + ':' + time.minutes + ':' + time.seconds;
      console.log('combine: ', time);
  }

  combineDistance (distance) {
     distance = distance.miles + distance.partialMiles;
     console.log('combine: ', distance);
  }
}
