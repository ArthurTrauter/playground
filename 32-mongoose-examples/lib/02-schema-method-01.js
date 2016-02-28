// testing mongoose method example

(function() {
  'use strict';

  var mongoose = require('./02-mongoose-example-00.js');
  var Schema = mongoose.Schema;

  var datasourceUrl = 'mongodb://localhost/test';

  mongoose.connect(datasourceUrl);
  console.log('datasource connected to', datasourceUrl);

  var transformationSchemaJson = {
    "name": {
      "type": "string",
      "required": true
    },
    "state": {
      "type": "string",
      "requered": true,
      "default": "initial"
    },
    "value": {
      "type": "object",
      "required": true,
      "default": {}
    },
    "messages": {
      "type": "array",
      "required": false,
      "default": [{
        type: "init",
        message: "transformation created"
      }]
    },
    "creationTime": {
      "type": "date",
      "default": Date.now
    }
  };

  var transformationSchema = new Schema(transformationSchemaJson);



  /**
   * persist new transformation with mongoose
   */
  transformationSchema.statics.createTransformation = function(_name) {

    return new Promise(function(resolve, reject) {

      var t = new Transformation({
        name: _name
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

  };



  transformationSchema.statics.findByTransformationId = function(_transformationId) {

    var self = this;

    return new Promise(function(resolve, reject) {

      if (_transformationId === null ||
        _transformationId === undefined) {
        return reject(new Error("transforamtionId is not valid: " + _transformationId));
      }

      var queue = self.findOne({
        _id: _transformationId
      });

      return queue.exec(function(err, value) {
        if (err) {
          return reject(
            new Error("tranformation couldn't found by transformationId" + err));
        } else {
          console.log('--- findByTransformationId LÄUFT', value);
          return resolve(value);
        }
      });
    });

  };



  transformationSchema.statics.addMessage = function(_transformationId, _message, cb) {

    var self = this;

    // validieren der übergabeparameter
    if (_message === null ||
      _message === undefined) {
      return Promise.reject(new Error("message is not valid: " + _message));
    }

    if (typeof _message !== "object") {
      return Promise.reject(new Error("message is not an object: " + typeof _message));
    }

    // find Transformation
    return Transformation.findByTransformationId(_transformationId)

    // push new message to transformation
    .then(function(data) {

      return new Promise(function functionName(resolve, reject) {
        console.log('_message', _message);
        data.messages.push(_message);
        console.log('data', data);

        data.save(function(err, value) {
          if (err) {
            return reject(new Error("transformation couldn't be saved", err));
          }
          console.log('--- persistTransformationMessage LÄUFT', value);
          return resolve(value);
        });
      });
    });

  };



  var Transformation = mongoose.model('Transformation', transformationSchema);

  module.exports = Transformation;

}());
