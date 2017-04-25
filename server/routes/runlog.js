var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var runSchema = mongoose.Schema({
  user : String,
  date : String,
  distance : String,
  time : String,
  notes : String
});

var Run = mongoose.model('run', runSchema, 'runs');

router.get('/', function(req,res){
  Run.find({}, function (err, allRuns){
    if (err){
      console.log('Mongo Error: ', err);
    }
    res.send(allRuns);
  });
});

router.post('/addRun', function(req,res){
  console.log(req.body.user);
  var run = new Run({
    user: req.body.user,
    date : req.body.run.date,
    distance : req.body.run.distance,
    time : req.body.run.time,
    notes : req.body.run.notes,
  });
  run.save(function(err, saveRun){
    if(err){
      console.log("mongo error: ", err);
      sendStatus(500);
    }
    res.send(saveRun);
  });
});

router.delete('/:date', function (req,res){
  console.log(req.params);
  Run.findByIdAndRemove((req.params.date), function (err, allRuns){
    if (err) {
      console.log("mongo error: ", err);
      sendStatus(500);
    }
    res.sendStatus(200);
  });
});

module.exports=router;
