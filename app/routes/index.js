var post = require('./post');

module.exports = function (app) {

	post(app);
	
	// Tất cả request phải đi qua trang index.html để xử lý.
    app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};