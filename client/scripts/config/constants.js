const MILES = 20;
const MILES_PARTIAL = ['.00', '.25', '.50', '.75'];

const MINUTES = 59;
const SECONDS = 59;
const HOURS = 10;

const DEFAULT_RUN = {
    date : moment().format('MM/DD/YYYY'),
    distance : '',
    time : '',
    notes : '',
    parsedDistance : {miles : '0', partialMiles : '.00'},
    parsedTime : {hours : '0', minutes : '00', seconds : '00'}
  };
