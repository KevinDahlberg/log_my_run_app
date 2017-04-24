myApp.factory('RunService', function(){
  console.log('RunService Factory sourced');

  let enterNewRun = (object) => {
    console.log(object);
  };

  return {
    enterNewRun
  };
});
