var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
app.use(express.static(__dirname + '/ZSM_public'));
app.listen(3000);


console.log('TheMatrixBlog is running on port ' + port);

exports = module.exports = app; 