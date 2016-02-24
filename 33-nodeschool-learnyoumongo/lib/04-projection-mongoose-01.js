// Die gleiche Aufgabe mithilfe von Mongoose
// projection with JSON doc

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
  })
  .select({
    name: 1,
    age: 1,
    _id: 0
  })
  .exec(function(err, docs) {
    if (err) throw err;
    console.log(docs);
    mongoose.disconnect(function() {
      console.log('disconnected');
    });
  });
