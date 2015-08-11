(function() {
  'use strict';

  var express = require('express');
  var app = express();

  app.use(express.static(__dirname + '/public'));
  app.use(express.static(__dirname + '/bower_components'));
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,HEAD,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'origin, x-http-method-override, accept, content-type, authorization, x-pingother, if-match, if-modified-since, if-none-match, if-unmodified-since, x-requested-with');
    res.header('Access-Control-Expose-Headers', 'tag, link, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes');
    next();
  });

  // Application Header
  // app.use(function(req, res, next) {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  //   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, X-PINGOTHER');
  //   next();
  // });

  app.get('/', function(req, res) {
    res.send(index.html);
  });

  var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
  });

}());
