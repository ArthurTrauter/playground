var mongo = require('mongodb');

var dbName = process.argv[2];
var collName = process.argv[3];
var docId = process.argv[4];
var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function (err, db) {
   if (err) console.error(err);

   var collection = db.collection(collName);
   collection.remove({ _id: docId }, function (err, data) {
      if (err) console.error(err);
      db.close();
   });
});
