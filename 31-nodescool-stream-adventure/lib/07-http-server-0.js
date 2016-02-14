var http = require('http');
var fs = require('fs');

var through = require('through2');

var upperStream = through(function (buffer, enc, next) {
   this.push(buffer.toString().toUpperCase());
   next();
});

var server = http.createServer(function (req, res) {
   if (req.method === 'POST') {
      req.pipe(upperStream)
         .pipe(res)
         .on('error', function (err) {
            console.error(err);
         });
   } else {
      res.end('Hey-HO\n');
   }
});

server.listen(process.argv[2]);
