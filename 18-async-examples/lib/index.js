'use strict';

var async = require('async');

module.exports = function asyncMapExample(fileArr) {
  async.map(fileArr, fs.stat, function(err, results) {
    console.log(results);
  });
};
