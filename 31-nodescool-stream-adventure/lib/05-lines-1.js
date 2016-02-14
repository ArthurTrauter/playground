// Lines Example
// With SPLIT-Module and THROUGH2-Module
// Startscript: echo "eins\nzwei\ndrei" | node ./lib/05-lines-1.js

var split = require('split');
var through = require('through2');

var sw = true;

var stream = through(function (line, encoding, next) {
   // console.log('%s - %s', sw, line);
   if (sw) {
      this.push(line.toString().toLowerCase() + '\n');
   } else {
      this.push(line.toString().toUpperCase() + '\n');
   }
   sw = !sw;
   next();
});

process.stdin
   .pipe(split(/\\n/))
   .pipe(stream)
   .pipe(process.stdout);
