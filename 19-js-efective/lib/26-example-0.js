(function() {
  'use strict';

  // currying: eine Funktion nur an eine eine Teilmenge
  // ihrer Argumente binden. Wird alternativ zu Wrapper-
  // Funktionen verwendet

  function simpleURL(protocol, domain, path) {
    return protocol + "://" + domain + "/" + path;
  }

  var siteDomain = "sabegalowka.de";
  var paths = ["teilpath1", "teilpath2", "teilpath3"];

  var urls = paths.map(function (path) {
    return simpleURL("http", siteDomain, path);
  });

  console.log('urls aus wrapper-function: \n', urls);

  var urls = paths.map(simpleURL.bind(null, "http", siteDomain));

  console.log('urls erzeugt mit currying: \n', urls);

}());
