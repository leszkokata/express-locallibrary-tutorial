var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/barmi/', function(req, res, next) {
  res.send('Kismacska');
});

module.exports = router;
