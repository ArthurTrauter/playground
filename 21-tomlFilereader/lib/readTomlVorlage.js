(function() {
  'use strict';

  var fs = require('fs');

  var config = require('config');
  var toml = require('toml');

  var iniPath = __dirname + config.iniFilesPath
  var iniFileName = iniPath + 'vorlage.toml';

  console.log(iniFileName);

  try {
    var data = toml.parse(fs.readFileSync(iniFileName, 'utf-8'));
  } catch (e) {
    console.error("Parsing error on line %s, column %s: %", e.line, e.column,
      e.message);
  }

  console.log("data: ", data);
  console.log("\n\ndata.name: ", data.name);
  console.log('\n\ndata.entladedatum: ', data.entladedatum);
  console.log("\n\ndata.rcsstatus: ", data.rcsstatus);
  console.log("\n\ndata.version.aktuell.v: ", data.version.aktuell.v);
  console.log("\n\ndata.version: ", data.version);
  console.log("\n\ndata.version.aktuell.letzetesCheckinVon: ", data.version.aktuell
    .letzetesCheckinVon);
  console.log("\n\ndata.version.aktuell.beschreibung: ", data.version.aktuell
    .beschreibung);
  console.log("\n\ndata.version.produktiv.v: ", data.version.produktiv.v);
  console.log("\n\ndata.version.produktiv.letzetesCheckinVon: ", data.version
    .produktiv.letzetesCheckinVon);
  console.log("\n\ndata.version.produktiv.beschreibung: ", data.version.produktiv
    .beschreibung);


}());
