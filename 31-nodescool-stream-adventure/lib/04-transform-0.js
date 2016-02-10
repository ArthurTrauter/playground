var through = require('through2');
var stream = through(write, end);

function write(buffer, encoding, next) {
   // this.push('I got some data: ' + buffer.toString() + '\n');
   this.push(buffer.toString().toUpperCase());
   next();
}

function end(done) {
   done();
}

process.stdin.pipe(stream).pipe(process.stdout);
