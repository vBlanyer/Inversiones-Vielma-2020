const express = require('express');
const morgan = require('morgan');
const path = require('path'); //directorios linux o windows /\
var mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// connection to db
mongoose.connect('mongodb+srv://blanyer:575217@cluster0.lduze.mongodb.net/<dbname>?retryWrites=true&w=majority') 
  .then(db => console.log(`DB is connected`))
  .catch(err => console.error(err));

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