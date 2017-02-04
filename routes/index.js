var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pranav', function(req, res, next) {
  res.render('pranav', { title: 'Pranav Kural' });
});

module.exports = router;
