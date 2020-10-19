const express = require('express');
const app = express();
const path = require('path'); //directorios linux o windows /\


//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares


//Routes
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/index.html', (req, res) => {
    res.render('index');
});
app.get('/servicios.html', (req, res) => {
    res.render('servicios');
});
app.get('/productos.html', (req, res) => {
    res.render('productos');
});
app.get('/nosotros.html', (req, res) => {
    res.render('nosotros');
});
app.get('/contacto.html', (req, res) => {
    res.render('contacto');
});

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Listen the server
app.listen(app.get('port'), () => {
    console.log('Server on the port', app.get('port'));
});