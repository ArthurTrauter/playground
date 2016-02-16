// Write some browser code that uses the websocket-stream module to print
// the string "hello"

var through = require('through2');
var ws = require('websocket-stream');

var stream = ws('ws://localhost:8099');
var tStream = through(function (line, enc, next) {
   this.push(line.toString() + 'hello\n');
   next();
});

stream.pipe(tStream);
// tStream.pipe(stream);
