var Post = require('../models/post');

module.exports = function(app) {
	app.get('/admin/post/list', function (req, res) {
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
        // Post.find(function(err, post) {

        //     // if there is an error retrieving, send the error. 
        //     // nothing after res.send(err) will execute
        //     if (err)
        //         res.send(err);

        //     res.json(post); // return all post in JSON format
        // });

    });

    app.get('/admin/post/create', function(req, res){
        var new_post = new Post();
        new_post.title = 'This is a title 1';
        new_post.slug = 'This is a slug 1';
        new_post.description = 'This is a description 1';
        new_post.content = 'This is a content 1';
        new_post.priority = 1;
        new_post.status = 1;
        new_post.meta.title = 'This is a title seo 1';
        new_post.meta.keyword = 'This is a keyword seo 1';
        new_post.meta.description = 'This is a description seo 1';
        new_post.createdAt = new Date();
        new_post.updatedAt = new Date();
        new_post.save(function(err, post){
            if(err) {
                res.send(err);
            }
            res.json(post);
        });
    });

    app.get('/admin/post/detail/:post_id', function (req, res) {
        Post.findById(req.params.post_id).exec(function (err, post) {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    });

    app.get('/admin/post/delete/:post_id', function (req, res) {
        Post.remove({_id : req.params.post_id}, function (err) {
            if (err) {
                res.send(err);
            }
            res.json({'message': 'Delete successful'});
        });
    });
}
