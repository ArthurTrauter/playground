var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('You are here ./random.txt');
});

module.exports = router;
