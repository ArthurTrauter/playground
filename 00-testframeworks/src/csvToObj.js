var fs = require('fs');

var CsvToObj = function () {}

CsvToObj.prototype.transform = function (string, keys) {
   var result = {};

   var properties = string.split(';');

   for (var i = 0; i < keys.length; i++) {
      result[keys[i]] = properties[i];
   }

   return result;
};

CsvToObj.prototype.convert = function (csvString) {
   var csvInput = csvString.split('\n');
   var keys = csvInput.shift().split(';');
   var result = [];
   var that = this;

   // for (var i = 0; i < csvInput.length; i++) {
   //    result.push(this.transform(csvInput[i], keys));
   // };

   csvInput.forEach(function (value) {
      if (value) {
         result.push(that.transform(value, keys));
      }
   }.bind(this));
   return result;
};

CsvToObj.prototype.run = function (filename, cb) {
   fs.readFile(filename, 'utf-8', function (err, data) {
      if (err) throw err;
      var result = this.convert(data);
      cb(result);
   }.bind(this));
};


module.exports = CsvToObj;
