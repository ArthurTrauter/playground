(function() {
  'use strict';

  var mongoose = require('mongoose');
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'Mongodb connection error:'));

  db.once('open', function() {
    console.log('MongoDb connection established');
  });

  mongoose.connection.on('disconnected', function() {
    console.log('MongoDb connection disconnected');
  });



  var gracefulExit = function() {
    mongoose.connection.close(function() {
      console.log('MongoDb connection is disconnected through app termination');
      process.exit(0);
    });
  };

  process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

  module.exports = mongoose;

}());
