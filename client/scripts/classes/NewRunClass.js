/**
* @desc NewRun Class creates a new run with default values that can be changed by
* the enterRun function.
*/

class NewRun {
  constructor (date, distance, time, notes, parsedDistance, parsedTime){
    this.date = '';
    this.createDate ();
    this.distance = '0.00';
    this.time = '0:00:00';
    this.notes = '';
    this.parsedDistance = {
      miles : 0,
      partialMiles : 0
    };
    this.parsedTime = {
      hours : 0,
      minutes : 0,
      seconds : 0
    };
  }

  /**
  * @desc gets todays date and formats it in MM/DD/YYYY formats
  * @param takes advantage of the built in Date prototype
  * @return gets the date in Milliseconds, then the year, month and day need to
  * be extrapolated from it.  Then it sets the value of this.date
  */
  createDate (){
    let today = Date.now();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDay();
    let todayDate = (month + '/' + day + '/' + year);
    this.date = todayDate;
  }

}
