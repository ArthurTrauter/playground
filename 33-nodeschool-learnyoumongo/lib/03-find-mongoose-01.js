// Die gleiche Aufgabe mithilfe von Mongoose
// exec <-- passed callback

var mongoose = require('./00-mongoose-00.js');
var Schema = mongoose.Schema;

var ageArg = parseInt(process.argv[2]);

var parrotsSchemaObj = {
  name: {
    type: String
  },
  age: {
    type: Number
  }
};

var parrotsSchema = new Schema(parrotsSchemaObj);

var Parrots = mongoose.model('parrots', parrotsSchema);

Parrots.find({
  age: {
    $gt: ageArg
  }
}).exec(function(err, docs) {
  if (err) throw err;
  console.log(docs);
  mongoose.disconnect(function() {
    console.log('disconnected');
  });
});
