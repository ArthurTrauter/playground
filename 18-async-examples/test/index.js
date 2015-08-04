'use strict';
// var assert = require('assert');
var expect = require('expect');
var asyncExamples = require('../lib/index.js');

describe('run async-examples tests', function(done) {
  it('should run map functionality', function() {
    var fileList = [];
    var filePath = __dirname + '../files/';
    for (var i = 0; i < 3; i++) {
      fileList.push(filePath + 'test' + i + '.txt');
    }

    asyncExamples.asyncMapExample(fileList);
    done();
  });
});
