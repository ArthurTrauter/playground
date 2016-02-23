var mongo = require('mongodb').MongoClient;

var dbName = process.argv[2];

var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, db) {
   if (err) console.error(err);

   var collection = db.collection('users');

   collection.update({
      username: 'tinatime'
   }, {
      $set: {
         age: 40
      }
   }, function(err, data) {
      if (err) console.error(err);
      db.close();
   });
});
