class User {

  constructor(user, runs){
    this.user = user;
    this.runs = [];
    this.filterRuns(runs);
  }

  /*
  filters out the runs that belong to the username of the class.  If the username
  is the same, then it pushes the run object into the runs portion of the user.
  */
  filterRuns (object) {
    this.runs.length = 0;
    for (let item of object.data){
    if (this.user===object.userName) {
      this.runs.push(object);
    }
  }
}
}
