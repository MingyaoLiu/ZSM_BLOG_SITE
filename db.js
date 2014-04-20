

var databaseUrl = "107.182.179.168:27017/blogdb";
var collections = ["firstblog"];
var db = require("mongojs").connect(databaseUrl, collections);
module.exports = db;