
// modules =================================================
var express = require('express');
var app     = express();
var mongojs = require('mongojs');
var db = mongojs('node', ['restaurants']);

app.use(express.static(__dirname + "/public"));

app.get('/restaurants', function (req, res) {
    console.log('I received a GET request');
    var options = {
        "limit": 10,
    }
    db.restaurants.find({}, {}, options, function (err, docs) {
            // console.log(docs);
            res.json(docs);
    });
});

app.listen(3000);
console.log('server running 3000');
