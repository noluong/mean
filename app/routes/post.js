var Post = require('../models/post');

module.exports = function(app) {
	app.get('/post', function (req, res) {
        var options = {
            "limit": 10,
        }
        Post.find({}, {}, options, function (err, passport) {
        	if (err) {
                return res.send(err);
            }
            return res.json(post);
        });
	});
}