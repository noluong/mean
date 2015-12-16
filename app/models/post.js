// grab the mongoose module
var mongoose = require('mongoose');

var schema = mongoose.Schema({
	title: {type: 'String', required: true},
	slug:  {type: 'String', required: true},
	description: {type: 'String', required: true},
	content:     {type: 'String', required: true},
	priority:    {type: 'Number', required: true},
	status:      {type: 'Boolean', required: true},
	meta: [{
	    title: 		{type: 'String', required: true},
	    keyword: 	{type: 'String', required: true},
	    description:{type: 'String', required: true}
	}],
	createdAt: {type: 'Date', required: true},
	updatedAt: {type: 'Date', required: true}
});

// define our restaurant model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Post', schema);
