var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var formSchema = new Schema( {
	name: {type: String, required: true},
	mail: {type: String, required: true},
	comment: {type: String, required: true}
    });


module.exports = mongoose.model('Form', formSchema);
