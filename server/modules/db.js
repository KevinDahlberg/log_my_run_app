//requires
var mongoose = require('mongoose');
var mongoURI = "mongodb://kevindahlberg:12345@ds147480.mlab.com:47480/dabombdb";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('Mongo Connection Error: ' + err);
});

MongoDB.once('open', function(){
  console.log('Connected to Mongo');
});

module.exports = MongoDB;
