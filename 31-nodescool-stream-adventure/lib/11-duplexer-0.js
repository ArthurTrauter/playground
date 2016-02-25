// Write a program that exports a function that spawns a process from a `cmd`
// string and an `args` array and returns a single duplex stream joining together
// the stdin and stdout of the spawned process:
//
//     var spawn = require('child_process').spawn;
//
//     module.exports = function (cmd, args) {
//         // spawn the process and return a single stream
//         // joining together the stdin and stdout here
//     };
//
// There is a very handy module you can use here: duplexer2. The duplexer2 module
// exports a single function `duplexer2(writable, readable)` that joins together a
// writable stream and readable stream into a single, readable/writable duplex
// stream.
//
// If you use duplexer2, make sure to `npm install duplexer2` in the directory where
// your solution file is located.

var spawn = require('child_process').spawn;
var duplexer = require('duplexer2');

module.exports = function(_cmd, _args) {
   console.log(_cmd, _args);
   const cmd = spawn(_cmd, _args);
   const duplex = duplexer(cmd.stdin, cmd.stdout);
   //
   // cmd.stdout.on('data', function(data) {
   //    console.log('cmd stdout:', data);
   // });
   //
   // cmd.stderr.on('data', function(data) {
   //    console.log('cmd stderr:', data);
   // });
   //
   // cmd.on('close', function(code) {
   //    console.log('cmd process exited with code', code);
   // });

   return duplex;
};
