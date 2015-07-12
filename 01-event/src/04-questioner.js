var findPattern = require('./03-findPattern.js');

findPattern(
  ['fileA.txt', 'fileErr.txt', 'fileB.json'], /hello \w+/g
)
.on('fileread', function (file) {
  console.log(file + ' was read');
})
.on('found', function (file, match) {
  console.log('Matched "' + match + '" in file ' + file);
})
.on('error', function (err) {
  console.log('Error emitted: ' + err.message);
});
