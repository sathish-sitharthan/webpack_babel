var express = require('express');
var router = express.Router();
//var router = express.Router([options]);
//options => caseSensitive & strict (true/false)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
