(function() {
  'use strict';


  var template = `Dies ist ein String mit einem Platzhalter >${getPlatzhalter()}< `;

  function getPlatzhalter() {
    return "Text des Platzhalters";
  }

  console.log(template);

}());
