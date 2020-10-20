var mongoose = require('mongoose');

// note: your host/port number may be different!
mongoose.connect('mongodb://localhost:27017/inversionesVielma');

var Schema = mongoose.Schema;

var formSchema = new Schema( {
	name: {type: String, required: true},
	correo: {type: String, required: true},
	comentario: {type: String, required: true}
    });


module.exports = mongoose.model('Form', formSchema);
