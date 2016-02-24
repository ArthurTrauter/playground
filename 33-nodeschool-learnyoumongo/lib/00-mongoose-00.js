var mongoose = require('mongoose');

var mongodbUrl = 'mongodb://localhost:27017/learnyoumongo';

mongoose.connect(mongodbUrl);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connecion error:'));
db.once('open', function() {
  // console.log('connected!');
});

module.exports = mongoose;
