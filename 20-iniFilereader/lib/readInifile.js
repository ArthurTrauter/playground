(function() {
  'use strict';

  var fs = require('fs');

  var ini = require('ini');
  var config = require('config');

  var iniPath = __dirname + config.iniFilesPath
  var iniFileName = iniPath + 'initialize.ini';
  console.log(iniFileName);

  var iniFile = ini.parse(fs.readFileSync(iniFileName, 'utf-8'));
  console.log('iniFile.Name: ----------------> ', iniFile.Name);
  console.log('iniFile.Beschreibung: --------> ', iniFile.Beschreibung);
  console.log('iniFile.RCS-Version: ---------> ', iniFile.RCSVersion);
  console.log('\n\n');

  var iniFileName2 = iniPath + 'initialize2.ini';

  console.log(iniFileName2);

  var iniFile2 = ini.parse(fs.readFileSync(iniFileName2, 'utf-8'));
  console.log('iniFile2.RCSDoku: ------------> ', iniFile2.RCSDoku);
  console.log('iniFile2.RCSDoku.name: -------> ', iniFile2.RCSDoku.name);
  console.log('iniFile2.RCSDoku.beschreibung:  ', iniFile2.RCSDoku.beschreibung);
  console.log('iniFile2.version.aktuell: ----> ', iniFile2.version.aktuell);
  console.log('iniFile2.version.produktiv: --> ', iniFile2.version.produktiv);


}());
