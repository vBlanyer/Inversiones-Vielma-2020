const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});
router.get('/index.html', (req, res) => {
    res.render('index');
});
router.get('/servicios.html', (req, res) => {
    res.render('servicios');
});
router.get('/productos.html', (req, res) => {
    res.render('productos');
});
router.get('/nosotros.html', (req, res) => {
    res.render('nosotros');
});
router.get('/contacto.html', (req, res) => {
    res.render('contacto');
});

module.exports = router;