var EventEmitter = require('events').EventEmitter;
var util = require('util');
var fs = require('fs');
var cfg = require('../config/config.json');

function FindPattern(regex) {
  EventEmitter.call(this);
  this.regex = regex;
  this.files = [];
};

util.inherits(FindPattern, EventEmitter);

FindPattern.prototype.addFile = function(filename) {
  this.files.push(filename);
  return this;
};

FindPattern.prototype.find = function() {
  // var self = this;
  var filesDir = __dirname + '/../' + cfg.filesPath;
  // self.files.forEach(function(file) {
  this.files.forEach(function(file) {
    fs.readFile(filesDir + file, 'utf8', function(err, content) {
      if (err) {
        return this.emit('error', err);
      };

      // self.emit('fileread', file);
      this.emit('fileread', file);

      var match = null;
      // if (match = content.match(self.regex)) {
      if (match = content.match(this.regex)) {
        match.forEach(function(elem) {
          this.emit('found', file, elem);
          // self.emit('found', file, elem);
        }.bind(this));
      };
    }.bind(this));
  }.bind(this));
  return this;
};

module.exports = FindPattern;
