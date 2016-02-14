// concat stream example
// Versuch mit through2 anstatt von concat

// var concat = require('concat-stream');
var through = require('through2');

var throughStream = through(function (buffer, encoding, next) {
   this.push(buffer.toString().split('').reverse().join(''));
   next();
});

var handleError = function (err) {
   console.error(err);
};

process.stdin
   .pipe(throughStream)
   // .pipe(concatStream)
   .on('error', handleError)
   .pipe(process.stdout);
