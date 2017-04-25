new User {

  constructor (user, runs) {
    this.user = user;
    this.runs = [];
    getRun();
    
  }

  let getRun = () => {
    runArray.length = 0;
    $http.get('/runlog/').then(function(response){
      console.log(response);
      for (item of response.data){
        filterRuns(item);
        runArray.push(runObj);
      }
    });
  };

    let filterRuns = (object) => {
      if (user===object.userName) {
        this.runs.push(object);
      }
    };
}
