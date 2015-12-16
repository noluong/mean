var post = require('./post');

var mongoose = require('mongoose');

module.exports = function (app) {
	post(app);

	app.get('*', function(req, res){
		res.sendfile('/var/www/vhosts/mean/public/index.html');
	});
};