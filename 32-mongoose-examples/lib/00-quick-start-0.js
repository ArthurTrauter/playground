var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection.error:'));
db.once('open', function() {
  console.log('connected!');
});

var transformationSchemaJson = {
  "deliverId": {
    "type": "string",
    "required": false,
    "default": null
  },
  "data": {
    "type": "object",
    "required": true,
    "default": {}
  },
  "creationTime": {
    "type": "date",
    "default": Date.now
  },
  "messages": {
    "type": "array",
    "default": []
  }
};

var transformationSchema = mongoose.Schema(transformationSchemaJson);

var TransformationModel = mongoose.model('TestTransformation', transformationSchema);

var transformationData = {
  deliverId: '12346',
  data: {
    name: 'Irina'
  },
  messages: ['created']
};

var transformation = new TransformationModel(transformationData);

transformation.save(function(err, transformation) {
  if (err) return console.error(err);
  console.log('Erfolgreich', transformation);
});
