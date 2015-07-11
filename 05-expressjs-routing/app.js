var http = require('http');

var express = require('express');

var routeRoot = require('./routes/root');
var routeAbout = require('./routes/about');
var routeRandom = require('./routes/random');
var routeDownload = require('./routes/downloads');

var app = express();

app.use('/', routeRoot);
app.use('/about', routeAbout);
app.use('/random.text', routeRandom);
app.use('/download', routeDownload);

var server = http.createServer(app);

server.listen(3000, function () {
  console.log('port 3000 connected');
});
