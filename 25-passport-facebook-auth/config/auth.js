// expose our config directly to our application using module.exports
module.exports = {

  'facebookAuth': {
    'clientID': '1036033116415795', // your App ID
    'clientSecret': 'b0dbc1aa2a4e85b975399385b5ad9a53', // your App Secret
    'callbackURL': 'http://127.0.0.1:3000/auth/facebook/callback'
  },

  'twitterAuth': {
    'consumerKey': 'your-consumer-key-here',
    'consumerSecret': 'your-client-secret-here',
    'callbackURL': 'http://localhost:8080/auth/twitter/callback'
  },

  'googleAuth': {
    'clientID': 'your-secret-clientID-here',
    'clientSecret': 'your-client-secret-here',
    'callbackURL': 'http://localhost:8080/auth/google/callback'
  }

};
