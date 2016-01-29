// Bind beim Currying
//
function simpleURL(protocol, domain, path) {
  return protocol + "://" + domain + "/" + path;
}

var siteDomain = "mySite.de";
var paths = ["home", "kontakt", "impressum"];

// Standard vorgehen beim Aufruf der map-Funktion übergabe einer anonymen Funktion
var urls = paths.map(function(path) {
  return simpleURL("http", siteDomain, path);
});

console.log(urls);

// CURRYING Beispiel mit Bind. sparrt code
var urls2 = paths.map(simpleURL.bind(null, "http", siteDomain));

console.log(urls2);
