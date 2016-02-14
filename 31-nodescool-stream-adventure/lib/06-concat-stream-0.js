// concat stream example

var http = require('http');

var concat = require('concat-stream');

var server = http.createServer(function (req, res) {
   if (req.method === 'POST') {
      req.pipe(concat(function (body) {
         var obj = JSON.parse(body);
         console.log('body:', body.toString());
         res.end(Object.keys(obj).join('\n'));
      }));
   } else {
      res.end();
   }
});

server.listen(5000);
