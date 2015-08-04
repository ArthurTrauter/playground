(function() {
  'use strict';

  var fs = require('fs');

  var config = require('config');
  var toml = require('toml');

  var iniPath = __dirname + config.iniFilesPath
  var iniFileName = iniPath + 'B450.toml';

  console.log(iniFileName);

  try {
    var data = toml.parse(fs.readFileSync(iniFileName, 'utf-8'));
  } catch (e) {
    console.error("Parsing error on line %s, column %s: %", e.line, e.column,
      e.message);
  }

  console.log('data.doku.beschreibung: ', data.doku.beschreibung);
  console.log("\n\ndata: ", data);
  console.log("\n\ndata.doku.anmerkung: ", data.doku.anmerkung);


}());
