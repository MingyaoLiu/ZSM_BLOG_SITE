var http = require('http');
var express = require('express');
var less = require('less');
var mongojs = require('mongojs');
var db = require("./db");
var app = express();
var port = process.env.PORT || 8000;

db.runCommand({ping:1}, function(err, res) {
    if(!err && res.ok) console.log("we're up");
});

app.use(express.static(__dirname + '/ZSM_public'));
app.listen(port);
console.log('TheMatrixBlog is running on port ' + port);
exports = module.exports = app;