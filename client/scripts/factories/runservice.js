myApp.factory('RunService', [ '$location', function($location){
  console.log('RunService Factory sourced');
  let thisRun = []

  let enterNewRun = (object) => {
    console.log(object);
  };

  let runView = (object) => {
    let {date, distance, time, notes} = object;
    let viewRun = new Run (date, distance, time, notes);
    thisRun.push(viewRun);
    $location.path('/runView');
  };

  let runSubmit = () => {
    $location.path('/home');
  };
  
  console.log(thisRun);

  return {
    enterNewRun,
    runView,
    thisRun,
    runSubmit
  };
}]);
