// testing mongoose method example

(function() {
  'use strict';

  var mongoose = require('./01-mongoose-example-00.js');
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

  transformationSchema.statics.findByTransformationId = function(_transformationId, cb) {

    if (_transformationId === null ||
      _transformationId === undefined) {
      if (cb) {
        return cb(new Error("transforamtionId is not valid: " + _transformationId), null);
      }
      return null;
    }

    var queue = this.findOne({
      _id: _transformationId
    });

    if (cb) {
      return queue.exec(cb);
    } else {
      return queue;
    }

  };



  transformationSchema.methods.addMessage = function(_transformationId, _message, cb) {

    var self = this;

    // validieren der übergabeparameter
    if (_message === null ||
      _message === undefined) {
      return cb(new Error("message is not valid: " + _message), null);
    }

    if (typeof _message !== "object") {
      return cb(new Error("message is not an object: " + typeof _message), null);
    }

    // find Transformation
    return new Promise(function(resolve, reject) {
      Transformation.findByTransformationId(_transformationId, function(err, data) {
        if (err) {
          reject(new Error("tranformation couldn't found by transformationId"));
        } else {
          resolve(data);
        }
      });
    })

    // push new message to transformation
    .then(function(data) {
      data.messages.push(_message);

      data.save(function(err, value) {
        if (err) {
          return cb(new Error("transformation couldn't be saved", err), null);
        }
        return cb(null, self.messages);
      });
    })

    // error transformation couldn't be found
    .catch(function(err) {
      return cb(err);
    });

  };



  var Transformation = mongoose.model('Transformation', transformationSchema);

  module.exports = Transformation;

}());
