module.exports = express.Router() {

	app.get('/phonelist', 'phone.json');
	app.get('/', function(req, res) {
		res.sendfile('index.html');
	});

};