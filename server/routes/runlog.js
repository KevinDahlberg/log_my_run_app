var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var runSchema = mongoose.Schema({
  date : String,
  distance : String,
  time : String,
  notes : String
});

var Run = mongoose.model('run', runSchema, 'runs');

router.get('/', function(req,res){
  Favorite.find({}, function (err, allFavorites){
    if (err){
      console.log('Mongo Error: ', err);
    }
    res.send(allRuns);
  });
});

router.post('/', function(req,res){
  var run = new Run({
    date : req.body.date,
    distance : req.body.distance,
    time : req.body.time,
    notes : req.body.notes,
  });
  favorite.save(function(err, saveRun){
    if(err){
      console.log("mongo error: ", err);
      sendStatus(500);
    }
    res.send(saveRun);
  });
});

router.delete('/:date', function (req,res){
  console.log(req.params);
  Favorite.findByIdAndRemove((req.params.date), function (err, allFavorites){
    if (err) {
      console.log("mongo error: ", err);
      sendStatus(500);
    }
    res.sendStatus(200);
  });
});

module.exports=router;
