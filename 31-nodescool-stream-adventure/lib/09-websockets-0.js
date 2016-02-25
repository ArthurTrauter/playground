// Write some browser code that uses the websocket-stream module to print
// the string "hello"

var websocket = require('websocket-stream');
var ws = websocket('ws://localhost:8099');

ws
  .on('data', function(o) {
    console.log('oho', o.toString());
    // ws.destroy();
  })
  .on('error', function(err) {
    console.error(err);
  });

ws.write('hello\n');
