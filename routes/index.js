var express = require('express');
var router = express.Router();
var familyData = require('../public/data/my-family');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: familyData[0].name, description: familyData[0].description, short_code: familyData[0].short_code });
});

// route to my page
router.get('/pranav', function(req, res, next) {
  res.render('pranav', { title: familyData[1].name, description: familyData[1].description, short_code: familyData[1].short_code });
});

// route to my sister's page
router.get('/aanchal', function(req, res, next) {
  res.render('aanchal', { title: familyData[2].name, description: familyData[2].description, short_code: familyData[2].short_code });
});

// route to my mom's page
router.get('/anu', function(req, res, next) {
  res.render('anu', { title: familyData[3].name, description: familyData[3].description, short_code: familyData[3].short_code });
});

// route to my dad's page
router.get('/tarloki', function(req, res, next) {
  res.render('tarloki', { title: 'Tarloki Nath Sharma', description: 'My dad\'s a businessman and he owns a pharmacy store.'});
});

module.exports = router;
