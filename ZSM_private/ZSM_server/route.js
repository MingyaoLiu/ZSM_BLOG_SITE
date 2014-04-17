module.exports = express.Router() {

	app.get('*', function(req, res) {
		res.sendfile('/ZSM_public/index.html'); // load our public/views/index.html file
	});

};