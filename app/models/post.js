'use strict';
// grab the mongoose module
var mongoose = require('mongoose');

var schema = mongoose.Schema({
	title: {type: 'String', required: true},
	description: {type: 'String', required: true},
	content:     {type: 'String', required: true},
	priority:    {type: 'Number', required: true},
	status:      {type: 'Boolean', required: true},
	type:        {type: 'String', required: true},
	meta_keyword: 	 {type: 'String', required: true},
	meta_description:{type: 'String', required: true},
	createdAt: {type: 'Date', required: true},
	updatedAt: {type: 'Date', required: true}
});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Post', schema);
