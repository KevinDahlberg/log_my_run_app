class Time {

  constructor (time) {
    this.hours = [];
    this.minutes = [];
    this.seconds = [];
    this.hoursPopulate(time.hours);
    this.minutesPopulate(time.minutes);
    this.secondsPopulate(time.seconds);
  }

  hoursPopulate (hour) {
  for (let i = 0; i <= hour; i++){
    this.hours.push(i);
  }
  }

  minutesPopulate (minute) {
    for (let i = 0; i <= minute; i++){
      let item = i.toString();
      if  (item.length === 1){
        this.minutes.push("0" + item)
      } else {
      this.minutes.push(item);
    }
  }
}

  secondsPopulate (second) {
    for (let i=0; i <= second; i++){
      let item = i.toString();
      if  (item.length === 1){
        this.seconds.push("0" + item)
      } else {
      this.seconds.push(item);
    }
  }
    }
  }


class Distance {

  constructor (distance) {
    this.miles = [];
    this.partialMiles = [];
    this.milesPopulate(distance.miles);
    this.partialMilesPopulate(distance.partialMiles);
  }

  milesPopulate (mi) {
    for (let i = 0; i <= mi; i++){
      this.miles.push(i);
    }
  }

  partialMilesPopulate (partial) {
    for (let i = 0; i <= partial.length-1; i++){
      this.partialMiles.push(partial[i]);
    }
  }
}

//for loops to populate number arrays
