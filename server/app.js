//Base Modules
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Route Modules
var index = require('./routes/index.js');
var db = require('./modules/db.js');
var runlog = require('./routes/runlog.js');

//app config
app.set('port', (process.env.PORT || 4000));

//Middleware config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//Routes
app.use('/runlog', runlog);
app.use('/', index);

//listen
app.listen(app.get('port'), function(){
  console.log('Listening on port: ', app.get('port'));
});

module.exports = app;
