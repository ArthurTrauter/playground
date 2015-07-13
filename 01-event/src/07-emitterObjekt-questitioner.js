var FindPattern = require('./06-findPatternEmitterObject.js');

findPatternObject = new FindPattern(/hello \w+/);

findPatternObject
  .addFile('fileA.txt')
  .addFile('fileERR.txt')
  .addFile('fileB.json')
  .find()
  .on('fileread', function(file) {
    console.log('...  new File read:', file);
  })
  .on('found', function(file, match) {
    console.log(' [+] Matched "' + match + '" in file ' + file);
  })
  .on('error', function(err) {
    console.log('Error emitted ' + err.message);
  });
