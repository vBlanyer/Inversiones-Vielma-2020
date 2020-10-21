const express = require('express');
const router = express.Router();

var Form = require('../model/form.js');
const { find, create } = require('../model/form');

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
router.post('/submit', async (req, res, next) => {
    const form = new Form(req.body);
    await form.save();
    res.redirect('/');
  })

module.exports = router;