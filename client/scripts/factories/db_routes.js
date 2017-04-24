myApp.factory('dbRoutes', ['$http', function($http){
  console.log('dbRoutes sourced');
  let runArray = [];

  let addRun = (object) => {
    console.log(object);
    $http.post('/runlog/addRun', object).then(function(response){
      getRun();
    });
  };


  let getRun = () => {
    runArray.length = 0;
    $http.get('/runlog').then(function(response){
      console.log(response);
      for (item of response.data){
        let runObj = new Run (item.date, item.distance, item.time);
        runArray.push(runObj);
      }

      console.log(runArray);
    });
  };

  let deleteRun = () => {
   $http.delete('/favorites/' + runtoDelete.date).then(function(response){
  });
};

  return {
    addRun,
    runArray,
    getRun
  };

}]);
