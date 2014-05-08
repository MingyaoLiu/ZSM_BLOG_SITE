var http = require('http');
var express = require('express');
var less = require('less');
var mongojs = require('mongojs');
var db = mongojs('107.182.179.168/blogdb');
var blogdescription = db.collection('BlogDescription');
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

// Route API 
router.route('/blogdescription')
	.post(function(req, res) {
		blogdescription.save(req.body);
	})
	.get(function(req, res) {
		blogdescription.find(function(err, data) {
			if (err)
				res.send(err);
			res.json(data);
		});
	});

app.use('/api', router);

app.use(express.static(__dirname + '/ZSM_public'));
app.get('/', function(req, res) {
	res.sendfile('index.html');
});

app.listen(port);
console.log('WEB is running @ port ' + port);

db.runCommand({ping:1}, function(err, res) {
	if(!err && res.ok) console.log("DB connected @ blogdb");
});
//db.firstblog.runCommand('count', function(err, res) {
//    console.log(res);
//});

exports = module.exports = app;