(function() {
  'use strict';

  var Transformation = require('./01-schema-method-01.js');
  var mongoose = require('mongoose');

  var command = "afp2web.exe parameter1 parameter2 -pfda 'pfadxy'";

  createTransformation('meine-test-transformation')
    .then(function(item) {
      return findByTransformationId(item);
    })
    .then(function(item) {
      return persistTransformationMessage(item);
    })
    .catch(function(err) {
      console.error("### mein error", err);
    })
    .then(function(item) {
      mongoose.disconnect();
    });



  function findByTransformationId(item) {

    var transformationId = item._id;

    return new Promise(function(resolve, reject) {

      Transformation.findByTransformationId(transformationId, function(err, result) {
        if (err) {
          reject(err);
        } else {
          console.log('--- findByTransformationId LÄUFT', result);
          resolve(result);
        }
      });
    });
  }



  // write message to tranformation db
  function persistTransformationMessage(item) {

    var transformationMessageObj = {
      type: "command",
      message: command
    };

    return new Promise(function(resolve, reject) {

      console.log('--- transformationMessageObj', transformationMessageObj);
      Transformation.addMessage(item._id, transformationMessageObj, function(err, value) {
        if (err) {
          reject(err);
        } else {
          console.log('--- persistTransformationMessage LÄUFT', value);
          resolve("message pushed to transformation successfully.");
        }
      });
    });

  }



  /**
   * persist new transformation with mongoose
   */
  function createTransformation(name) {

    return new Promise(function(resolve, reject) {

      var t = new Transformation({
        name: name
      });

      t.save(function(err, result) {
        if (err) {
          reject(err);
        } else {
          console.log("Transformation successfully persisted.");
          resolve(result);
        }
      });

    });
  }



}());
