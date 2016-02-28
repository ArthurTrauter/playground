(function() {
  'use strict';

  var Transformation = require('./02-schema-method-01.js');
  var mongoose = require('mongoose');

  var command = "afp2web.exe parameter1 parameter2 -pfda 'pfadxy'";



  Promise.resolve()
    .then(function() {
      return Transformation.createTransformation('meine-test-transformation');
    })
    .then(function(item) {
      return Transformation.findByTransformationId(item.id);
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



  // write message to tranformation db
  function persistTransformationMessage(item) {

    var transformationMessageObj = {
      type: "command",
      message: command
    };

    console.log('--- transformationMessageObj', transformationMessageObj);
    return Transformation.addMessage(item._id, transformationMessageObj);
  }



}());
