// Die gleiche Aufgabe mithilfe von Mongoose
//

var mongoose = require('./00-mongoose-00.js');
var Schema = mongoose.Schema;

var firstNameArg = process.argv[2];
var lastNameArg = process.argv[3];
var insertObject = {
  firstName: firstNameArg,
  lastName: lastNameArg
};

var docsSchemaObj = {
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
};

var docsSchema = new Schema(docsSchemaObj);

var Docs = mongoose.model('docs', docsSchema);

console.log('aha', firstNameArg, lastNameArg);
Docs.create(insertObject, function(err, docs) {
  if (err) throw err;
  console.log(docs);
  console.log(JSON.stringify(insertObject));
  mongoose.disconnect(function() {
    console.log('disconnected');
  });
});
