// Die gleiche Aufgabe mithilfe von Mongoose
//
var mongoose = require('mongoose');

var mongodbUrl = 'mongodb://localhost:27017/' + process.argv[2];

mongoose.connect(mongodbUrl);

var Schema = mongoose.Schema;

var usersSchemaObj = {
  name: {
    type: String
  },
  age: {
    type: Number
  },
  username: {
    type: String
  }
};

var usersSchema = new Schema(usersSchemaObj);

var Users = mongoose.model('users', usersSchema);

var querry = {
  username: 'tinatime'
};

var upQuerry = {
  $set: {
    age: 40
  }
};

Users.update(querry, upQuerry, undefined, function(err, data) {
  if (err) throw err;
  mongoose.disconnect(function() {
    console.log('disconnected');
  });
});
