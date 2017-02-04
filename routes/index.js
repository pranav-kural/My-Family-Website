var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// route to my page
router.get('/pranav', function(req, res, next) {
  res.render('pranav', { title: 'Pranav Kural' });
});

// route to my sister's page
router.get('/aanchal', function(req, res, next) {
  res.render('aanchal', { title: 'Aanchal Sharma' });
});

// route to my mom's page
router.get('/anu', function(req, res, next) {
  res.render('anu', { title: 'Anuradha Sharma' });
});

// route to my dad's page
router.get('/tarloki', function(req, res, next) {
  res.render('tarloki', { title: 'Tarloki Nath Sharma' });
});

module.exports = router;
