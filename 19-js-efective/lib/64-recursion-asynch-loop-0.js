// Für asynchrone Schleifen sollen rekursive Aufrufe verwendet werden
// Damit die Aufrufe nicht alle gleichzeitig passieren kann man die Schleifen Funktionalität
// in eine eigene Funktion auslagern. Siehe Beispiel:

var request = require('request');



var urls = ["http://www.google.com", "http://www.github.com", "http://www.npmjs.org"];



function downloadAsync(url, onsuccess, onfailure) {
  var options = {
    "url": url,
    "method": "GET",
    "proxy": "http://10.120.11.11:8080"
  };

  request(options, function(error, response) {
    if (!error && response.statusCode === 200) {
      return onsuccess("statusCode " + response.statusCode);
    } else {
      return onfailure(error);
    }
  });

}



function downloadOneAsync(urls, onsuccess, onfailure) {
  var n = urls.length;

  function tryNextURL(i) {
    console.log(urls[i]);
    if (i >= n) {
      onfailure("all downloads failed");
      return;
    }
    downloadAsync(urls[i], onsuccess, function(x) {
      console.log('FAIL: ', x);
      tryNextURL(i + 1);
    });
  }

  tryNextURL(0);
}



downloadOneAsync(urls,
  function(x) {
    console.log("SUCCESS ", x);
  },
  function(x) {
    console.log("FAILURE ", x);
  });
