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
    $http.get('/runlog').then(function(response){
      console.log(response);
      runArray.length = 0;
      runArray.push(response.data);
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
