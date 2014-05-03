var http = require('http');
var express = require('express');
var less = require('less');
var mongojs = require('mongojs');
var db = mongojs('107.182.179.168/blogdb', ['firstblog']);
var app = express();
var router = express.Router(); 
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
app.use(bodyParser());

router.use(function(req, res, next) {
	console.log('Something is happening.');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

// more routes for our API will happen here

app.use('/api', router);

app.use(express.static(__dirname + '/ZSM_public'));
app.get('/', function(req, res) {
	res.sendfile('index.html');
});

app.listen(port);
console.log('WEB is running @ port ' + port);

db.runCommand({ping:1}, function(err, res) {
	if(!err && res.ok) console.log("DB connected @ blogdb @ 'firstblog'");
});
//db.firstblog.runCommand('count', function(err, res) {
//    console.log(res);
//});

exports = module.exports = app;