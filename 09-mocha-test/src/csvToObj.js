var fs = require('fs');

var CsvToObj = function () {};

CsvToObj.prototype.transform = function (keys, valueCsv) {
  var result = {};

  var values = valueCsv.split(';');

  for (var i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  };

  return result;
};

CsvToObj.prototype.convert = function (inputString) {
  var result = [];

  var input = inputString.split('\n');
  var header = input.shift().split(';');

  input.forEach(function (value) {
    if (value) {
      result.push(this.transform(header, value));
    }
  }.bind(this));

  return result;
};

CsvToObj.prototype.run = function (inputFile, cb) {

  fs.readFile(inputFile, 'utf-8', function (err, data) {
    if(err) throw err;

    var result = this.convert(data);
    cb(result);

  }.bind(this));
};

module.exports = CsvToObj;
