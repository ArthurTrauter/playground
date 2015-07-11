var expect = require('expect.js');

var CsvToObj = require('../src/csvToObj.js');

describe('CsvToObj', function () {
   it('should make an object of a string and a key array', function () {
      var keys = ['firstname', 'lastname'];
      var string = 'John;Doe;';

      var csvToObj = new CsvToObj();

      var result = csvToObj.transform(string, keys);

      var expected = {
         firstname: "John",
         lastname: "Doe"
      };

      expect(result).to.eql(expected);
   });

   it('should return the property names as array', function () {
      var csvInput = "vorname;nachname;strasse;ort\n" +
         "Max;Mustermann;Musterstrasse;Musterort\n" +
         "Lisa;Lustig;Lange Strasse;Lübeck";

      var expected = [
         {
            "vorname": "Max",
            "nachname": "Mustermann",
            "strasse": "Musterstrasse",
            "ort": "Musterort"
         },
         {
            "vorname": "Lisa",
            "nachname": "Lustig",
            "strasse": "Lange Strasse",
            "ort": "Lübeck"
         }
      ];
      var csvToObj = new CsvToObj();

      var result = csvToObj.convert(csvInput);

      expect(result).to.eql(expected);
   });

   it('should read form a file and call a function', function (done) {
      var expected = [
         {
            "vorname": "Max",
            "nachname": "Mustermann",
            "strasse": "Musterstrasse",
            "ort": "Musterort"
         },
         {
            "vorname": "Lisa",
            "nachname": "Lustig",
            "strasse": "Lange Strasse",
            "ort": "Lübeck"
         }
      ];

      var csvToObj = new CsvToObj();

      csvToObj.run(__dirname + '/resources/input.csv', function (data) {
         expect(data).to.be.eql(expected);
         done();
      });
   });
});
