var express = require('express');
var rp = require('request-promise');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST for user registration. */
router.post('/register', function(req, res, next) {
  console.log(req.body);

  var options = {
      method: 'POST',
      uri: 'http://localhost:3000/userCreation',
      body: req.body,
      json: true,
      headers: { 'Content-Type': 'application/json' }
  }
  rp(options).then(function (res){
      console.log("Response from external Api: "+res);
  })
  .catch(function (err) {
      console.log(err);
  })
  res.send('Json Data sent to Java/MongoDB & User Created successfully.');

});

module.exports = router;
