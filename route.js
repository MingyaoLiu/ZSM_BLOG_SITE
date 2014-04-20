module.exports = express.Router() {

	var db = require("./db");
	app.get('/phonelist', getAllPhones(db));
	app.get('/', function(req, res) {
		res.sendfile('index.html');
	});

};