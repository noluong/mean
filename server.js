//　module　=================
var express    = require('express');
var app        = express();
var server     = require('http').createServer(app);
// var mongoose   = require('mongoose');
// var bodyParser = require('body-parser');

// configuration =================

// config files
// var db = require('./config/db');
// mongoose.connect(db.url);

var port = process.env.PORT || 8080;

// get all data/stuff of the body (POST) parameters
// parse application/json 
// app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
// app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(__dirname + '/public'));

var routes = require('./app/routes');
routes(app);

server.listen(port);
console.log('Server is running on '+ port);
exports = module.exports = app;