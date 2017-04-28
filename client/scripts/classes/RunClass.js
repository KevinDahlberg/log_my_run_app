class Run {
  constructor (id, date, distance, time, notes, parsedDistance, parsedTime){
    this.id = id;
    this.date = date;
    this.distance = distance;
    this.time = time;
    this.notes = notes;
    this.parsedDistance = parsedDistance;
    this.parsedTime = parsedTime;
    this.combineTime(parsedTime);
    this.combineDistance(parsedDistance);
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
}
