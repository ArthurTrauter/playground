var http = require('http');

var server = http.createServer(function (req, res) {

  var body = '';

  req.setEncoding('utf8');

  req.on('data', function (chunk) {
    body += chunk;
  });

  // the end event tells yout that you have entire body
  req.on('end', function () {
    try {
      var data = JSON.parse(body);
    } catch (err) {
      res.statusCode = 400;
      return res.end('error: ' + err.message);
    }

    res.write(typeof data);
    res.end();
  });
});

server.listen(1337);
