var path = require('path');

var expect = require('expect.js');

var CsvToObj = require('../src/csvToObj.js');

describe('Csv to Object', function () {

  it('should translate csv input to object', function () {
    var csvToObj = new CsvToObj();

    var keyInput = ['vorname', 'name'];
    var csvInput = 'Arthur;Trauter';

    var expected = {
      vorname: "Arthur",
      name: "Trauter"
    };

    var result = csvToObj.transform(keyInput, csvInput);

    expect(expected).to.eql(result);
  });

  it('should convert input file to object array', function () {
    var csvToObj = new CsvToObj();

    var inputString = "vorname;name;strasse;ort\n" +
      "Max;Mustermann;Musterstrasse;Musterstadt\n" +
      "Arthur;Trauter;Lortzingstrasse;Reilingen";

    var expected = [{
      "vorname": "Max",
      "name": "Mustermann",
      "strasse": "Musterstrasse",
      "ort": "Musterstadt"
    },
    {
      "vorname": "Arthur",
      "name": "Trauter",
      "strasse": "Lortzingstrasse",
      "ort": "Reilingen"
    }];

    var result = csvToObj.convert(inputString);

    expect(result).to.be.eql(expected);
  });

  it('should open inputFile and create an object array', function (done) {
    var csvToObj = new CsvToObj();

    var inputFile = path.normalize(__dirname + '/../resources/input.csv');

    var expected = [{
      "vorname": "Max",
      "name": "Mustermann",
      "strasse": "Musterstrasse",
      "ort": "Musterstadt"
    },
    {
      "vorname": "Arthur",
      "name": "Trauter",
      "strasse": "Lortzingstrasse",
      "ort": "Reilingen"
    },
    {
      "vorname": "Irina",
      "name": "Trauter",
      "strasse": "Lortzingstrasse",
      "ort": "Reilingen"
    }];

    csvToObj.run(inputFile, function (result) {
      expect(result).to.be.eql(expected);
      done();
    });
  });
});
