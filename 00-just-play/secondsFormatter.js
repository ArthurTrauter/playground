var util = require('util');

var SecondsFormatter = function (numSeconds, glue) {
   this.seconds = numSeconds;
   this.glue = glue;
};

SecondsFormatter.prototype.calculateParts = function (numSecs) {
   var num = parseInt(numSecs);
   var result = [];
   result[0] = Math.floor(num / 3600),
   result[1] = Math.floor((num - (result[0] * 3600)) / 60),
   result[2] = num - (result[0] * 3600) - (result[1] * 60);
   return result;
};

SecondsFormatter.prototype.padParts = function (parts) {
   if (!util.isArray(parts) && parts.length !== 3) {
      throw new Error('Not a valid parts Array!');
   }
   for (var i = 0; i < parts.length; i++) {
      if (('' + parts[i]).length === 1) {
         parts[i] = '0' + parts[i];
      }
   }
   return parts;
};

SecondsFormatter.prototype.toString = function () {
   var parts = this.calculateParts(this.seconds),
       parts = this.padParts(parts);
   this.glue = this.glue || ':';
   return parts.join(this.glue);
};

if (process.argv.length !== 4) {
   throw new Error('Usage: node tracker.js <from> <to>');
}

var from = new SecondsFormatter(process.argv[2]),
    to   = new SecondsFormatter(process.argv[3]),
    diff = new SecondsFormatter(process.argv[3] - process.argv[2]);

util.puts("From:       " + from.toString());
util.puts("Until:      " + to.toString());
util.puts("Difference: " + diff.toString());
