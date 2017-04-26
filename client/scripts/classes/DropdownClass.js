class Time {

  constructor (hours, minutes, seconds) {
    this.hours = [];
    this.minutes = [];
    this.seconds = [];
    this.hoursPopulate(hours);
    this.minutesPopulate(minutes);
    this.secondsPopulate(seconds);
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

  constructor (miles, partialMiles) {
    this.miles = [];
    this.partialMiles = [];
    this.milesPopulate(miles);
    this.partialMilesPopulate(partialMiles);
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
