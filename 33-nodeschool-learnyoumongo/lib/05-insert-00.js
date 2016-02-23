var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo'

var firstNameArg = process.argv[2];
var lastNameArg = process.argv[3];
var insertObject = {
   firstName: firstNameArg,
   lastName: lastNameArg
};

mongo.connect(url, function(err, db) {
   if (err) console.error(err);

   var collection = db.collection('docs');

   collection.insert(insertObject, function(err, data) {
      if (err) console.error(err);
      console.log(JSON.stringify(insertObject));
      db.close();
   });
});
