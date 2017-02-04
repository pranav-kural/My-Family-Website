var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pranav', function(req, res, next) {
  res.render('pranav', { title: 'Pranav Kural' });
});

router.get('/aanchal', function(req, res, next) {
  res.render('aanchal', { title: 'Aanchal Sharma' });
});

router.get('/anu', function(req, res, next) {
  res.render('anu', { title: 'Anuradha Sharma' });
});

router.get('/tarloki', function(req, res, next) {
  res.render('tarloki', { title: 'Tarloki Nath Sharma' });
});

module.exports = router;
