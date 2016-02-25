// get html into standard stream. convert inner html with class loud to upperCase
// and pipe all the html to stdout

// var fs = require('fs');

var through = require('through2');
var trumpet = require('trumpet');
var tr = trumpet();

var file = __dirname + '/../files/10-input.html';

var tStream = through(function(line, env, next) {
  this.push(line.toString().toUpperCase());
  next();
});

var stream = tr.select('.loud').createStream();
stream.pipe(tStream).pipe(stream);

process.stdin
  .on('error', function(err) {
    console.error(err);
  })
  .pipe(tr)
  .pipe(process.stdout);

// fs.createReadStream(file)
//   .on('error', function(err) {
//     console.error(err);
//   })
//   .pipe(tr)
//   .pipe(process.stdout);
