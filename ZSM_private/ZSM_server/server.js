var http = require('http');
var express = require('express');
var events = require('events');
var app = express();
var port = process.env.PORT || 3000; // set our port

app.configure(function() {
	app.use(express.static(__dirname + '../ZSM_public')); 	// set the static files location /public/img will be /img for users
	app.use(express.json());
	app.use(app.router);
	app.use(express.logger('dev')); 					// log every request to the console
	app.use(express.bodyParser()); 						// pull information from html in POST
	app.use(express.methodOverride()); 					// simulate DELETE and PUT
});