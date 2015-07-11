var http = require('http');

http.createServer(function (req, res) {
   req.pipe(process.stdout);
   res.end();
}).listen(3000);
