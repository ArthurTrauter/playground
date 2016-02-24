// search for documents but only fetch the fields we need: projection
var mongo = require('mongodb').MongoClient;

var ageArg = parseInt(process.argv[2]);

// console.log('argument', ageArg);
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) console.error(err);

  var collection = db.collection('parrots');

  collection.find({
    age: {
      $gt: ageArg
    }
  }, {
    name: 1,
    age: 1,
    _id: 0
  }).toArray(function(err, documents) {
    if (err) console.error(err);
    console.log(documents);
    db.close();
  });
});
