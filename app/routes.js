var Post = require('./models/post');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests

	app.get('/post', function (req, res) {
        var options = {
            "limit": 10,
            "sort": {createdAt: -1},
        }
        Post.find({}, {}, options, function (err, post) {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });

    });

    app.post('/post/create', function(req, res){
        var new_post = new Post();
		new_post.title            = req.body.title;
		new_post.description      = req.body.description;
		new_post.content          = req.body.content;
		new_post.priority         = req.body.priority;
		new_post.status           = req.body.status;
		new_post.meta_keyword     = req.body.meta_keyword;
		new_post.meta_description = req.body.meta_description;
        new_post.type = 'news';
        new_post.createdAt = new Date();
        new_post.updatedAt = new Date();
        new_post.save(function(err, post){
            if(err) {
                res.send(err);
            }
            res.json(post);
        });
    });

    app.get('/post/detail/:id', function (req, res) {
        Post.findById(req.params.id).exec(function (err, post) {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    });

    app.delete('/post/delete/:id', function (req, res) {
        Post.remove({_id : req.params.id}, function (err) {
            if (err) {
                res.send(err);
            }
            res.json({'message': 'Delete successful'});
        });
    });

    app.put('/post/edit', function(req, res){
    	Post.findById(req.body._id, function(err, data) {
    		if(err) {
    			res.send(err);
    		}
			data.title            = req.body.title;
			data.description      = req.body.description;
			data.content          = req.body.content;
			data.priority         = req.body.priority;
			data.status           = req.body.status;
			data.meta_keyword     = req.body.meta_keyword;
			data.meta_description = req.body.meta_description;
	        data.updatedAt = new Date();
	        data.save(function(err, post){
	            if(err) {
	               res.send(err);
	            }
	            res.json(post);
	        });


    	});
    });

	app.get('*', function(req, res) {
		res.sendfile('/var/www/vhosts/mean/public/index.html');
	});

};