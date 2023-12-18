var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/Ticket', function(req, res, next) {
  res.render('Ticket'); 
});
router.get('/Trans', function(req, res, next) {
  res.render('Trans'); 
});
module.exports = router;
