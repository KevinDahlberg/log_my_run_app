myApp.factory('dbRoutes', ['$http', function($http){
  console.log('dbRoutes sourced');
  let runArray = [];

  let deleteRun = () => {
   $http.delete('/favorites/' + runtoDelete.date).then(function(response){
  });
};

  return {
    runArray,
  };

}]);
