// Die gleiche Aufgabe mithilfe von Mongoose
//
var mongoose = require('mongoose');

var dbName = process.argv[2];
var collName = process.argv[3];
var docId = process.argv[4];

console.log(dbName, collName, docId);
var url = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(url);

var Schema = mongoose.Schema;

var keysSchemaObj = {
  name: {
    type: String
  }
};

var searchObj = {
  _id: docId
};

var keysSchema = new Schema(keysSchemaObj);

var Keys = mongoose.model(collName, keysSchema);

Keys.findById(searchObj)
  .exec(function(err, data) {
    if (err) throw err;
    console.log('found data', data);

    Keys.remove(searchObj, function(err) {
      if (err) throw err;
      console.log('removed!');
      mongoose.disconnect();
    });
  });
