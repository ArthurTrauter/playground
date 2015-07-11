var express = require('express');
var router = express.Router();


var tag = function (req, res, next) {
  console.log('response will be send by the next function...');
  next();
}

router.get('/', tag, function (req, res) {
  res.send('You are here ./about');
});

module.exports = router;
