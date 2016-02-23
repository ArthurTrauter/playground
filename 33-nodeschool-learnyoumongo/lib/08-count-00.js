var mongo = require('mongodb');

var url = 'mongodb://localhost:27017/learnyoumongo';
var ageArg = parseInt(process.argv[2]);

mongo.connect(url, function(err, db) {
   if (err) console.error(err);

   var collection = db.collection('parrots');
   collection.count({
      age: {
         $gt: ageArg
      }
   }, function(err, count) {
      if (err) console.error(err);
      console.log(count);
      db.close();
   });
});
