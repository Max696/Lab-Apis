var express = require('express');
var router = express.Router();

/* Home page */
//working
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Serie 1 lab3 '});
});

module.exports = router;
