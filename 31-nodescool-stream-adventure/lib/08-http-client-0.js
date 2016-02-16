// Send an Http post request to http://localhost:8099 and pipe process.stdin into
// it. Pipe the response stream to process.stdout

var request = require('request');

// create a readable + writable Stream
var rwStream = request.post('http://localhost:8099/');

process.stdin.pipe(rwStream).pipe(process.stdout);
