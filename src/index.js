const express = require('express');
const app = express();
const path = require('path'); //directorios linux o windows /\


//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares


//Routes
app.use(require('./routes/index'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Listen the server
app.listen(app.get('port'), () => {
    console.log('Server on the port', app.get('port'));
});