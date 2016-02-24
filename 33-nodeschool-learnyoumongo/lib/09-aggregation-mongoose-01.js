// Die gleiche Aufgabe mithilfe von Mongoose
//

var mongoose = require('./00-mongoose-00.js');
var Schema = mongoose.Schema;

var sizeArg = parseInt(process.argv[2]);

var parrotsSchemaObj = {
  name: {
    type: String
  },
  age: {
    type: Number
  }
};

var match = {
  $match: {
    size: sizeArg
  }
};

var group = {
  $group: {
    _id: 'total',
    total: {
      $avg: '$price'
    }
  }
};

var parrotsSchema = new Schema(parrotsSchemaObj);

var Parrots = mongoose.model('parrots', parrotsSchema);

Parrots.aggregate([match, group])
  .exec(function(err, results) {
    if (err) console.error(err);
    console.log(results);
    // console.log(Number(results[0].total).toFixed(2));
    mongoose.disconnect();
  });
