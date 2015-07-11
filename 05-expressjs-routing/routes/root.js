var express = require('express');
var router = express.Router();

// will match request to the root
router.get('/', function (req, res) {
  res.send('you are in root');
});

router.get('/ab?cd', function (req, res) {
  res.send('get1: ' + req.url);
});

router.get('/ab+cd', function (req, res) {
  res.send('get2: ' + req.url);
});

router.get('/ab*cd', function (req, res) {
  res.send('get3: ' + req.url);
});

router.get(/.*man$/, function (req, res) {
  res.send('get4: ' + req.url);
});

router.get('/example/b', function (req, res, next) {
  console.log('response will be send by the next function...');
  next();
}, function (req, res) {
  res.send('Hallo vom B-Example');
});

var cb0 = function (req, res, next) {
  console.log("CB0");
  next();
};

var cb1 = function (req, res, next) {
  console.log("CB1");
  next();
};

var cb2 = function (req, res) {
  console.log("CB2");
  res.send('Hallo vom C-Example');
};

router.get('/example/c', [cb0, cb1, cb2]);

router.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('response will be send by the next function...');
  next();
}, function (req, res) {
  res.send('Hallo vom D-Example!');
});

router.post('/', function (req, res, next) {
  res.send('A post request on root arrived');
});

module.exports = router;
