var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var runSchema = mongoose.Schema({
  userID : String,
  date : String,
  distance : String,
  time : String,
  notes : String,
  parsedDistance : String,
  parsedTime : String
});

var Run = mongoose.model('run', runSchema, 'runs');

router.get('/', function(req,res){
  var user = req.user._id;
  console.log(user);
  Run.find({userID : user}, function (err, allRuns){
    if (err){
      console.log('Mongo Error: ', err);
    }
    res.send(allRuns);
  });
});

router.post('/addRun', function(req,res){
  console.log(req.user._id);
  console.log(req.body);
  var run = new Run({
    userID: req.user._id,
    date : req.body.date,
    distance : req.body.distance,
    time : req.body.time,
    notes : req.body.notes,
    parsedDistance : req.body.parsedDistance,
    parsedTime : req.body.parsedTime
  });
  run.save(function(err, saveRun){
    if(err){
      console.log("mongo error: ", err);
      sendStatus(500);
    }
    res.send(saveRun);
  });
});

router.put("/editRun", function(req, res){
  console.log(req.body);
  var run = req.body;
  Run.findById(req.body._id, function(err, foundRun){
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    foundRun.date = req.body.date;
    foundRun.distance = req.body.distance;
    foundRun.time = req.body.time;
    foundRun.notes = req.body.notes;
    foundRun.parsedDistance = req.body.parsedDistance;
    foundRun.parsedTime = req.body.parsedTime;

    foundRun.save(function(err, savedRun){
      if (err){
        console.log(err);
        res.sendStatus(500);
      }
      res.send(savedRun);
    });

  });
});
router.delete('/:_id', function (req,res){
  console.log(req.params._id);
  Run.findByIdAndRemove((req.params._id), function (err, allRuns){
    if (err) {
      console.log("mongo error: ", err);
      sendStatus(500);
    }
    res.sendStatus(200);
  });
});

module.exports=router;
