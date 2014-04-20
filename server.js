var http = require('http');
var express = require('express');
var less = require('less');
var mongojs = require('mongojs');
var app = express();
var port = process.env.PORT || 8000;
var db = mongojs('107.182.179.168:27017/blogdb');
var blogdata = db.collection('firstblog');


app.use(express.static(__dirname + '/ZSM_public'));
app.listen(port);
console.log('TheMatrixBlog is running on port ' + port);
exports = module.exports = app; 