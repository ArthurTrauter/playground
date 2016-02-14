// concat stream example

var concat = require('concat-stream');

var concatStream = concat(writeFkt);

function writeFkt(buffer) {
   var s1 = buffer.toString().split('');
   var s2 = s1.reverse();
   var s3 = s2.join('');
   // var s = src.toString().split('').reverse().join('');
   // console.log(s1);
   // console.log(s2);
   console.log(s3);
};

var handleError = function (err) {
   console.error(err);
};

process.stdin
   .pipe(concatStream)
   .on('error', handleError);
