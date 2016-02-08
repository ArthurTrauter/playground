
var fs = require('fs');

var path = __dirname + "/21-example-1.js";

fs.stat(path, function (err, stats) {
   if (err) {
      throw new Error(err);
   }
   console.log(stats);
   myReadFunction();
});

function myReadFunction() {
   fs.readFile(path, function (err, file) {
      console.log(file.toString());
   });
}

fs.stat(path, function (err, stats) {
   console.log(stats);
   fs.readFile(path, function (err, file) {
      console.log(file.toString());
   })
})
