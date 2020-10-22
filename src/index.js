const express = require('express');
const morgan = require('morgan');
const path = require('path'); //directorios linux o windows /\
var mongoose = require('mongoose');

const app = express();

// connection to db
mongoose.connect('mongodb://localhost/inversionesVielma')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev')); //aqui pasa algo que no se
app.use(express.urlencoded({extended: false}))

//Routes
app.use(require('./routes/index'));


//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Listen the server
app.listen(app.get('port'), () => {
    console.log('Server on the port', app.get('port'));
});