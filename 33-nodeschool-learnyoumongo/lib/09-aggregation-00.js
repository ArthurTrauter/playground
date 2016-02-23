var mongo = require('mongodb');

var url = 'mongodb://localhost:27017/learnyoumongo';
var sizeArg = process.argv[2];

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

mongo.connect(url, function(err, db) {
   if (err) console.error(err);

   var collection = db.collection('prices');
   collection.aggregate([match, group]).toArray(function(err, results) {
      if (err) console.error(err);
      console.log(Number(results[0].total).toFixed(2));
      db.close();
   });
});
