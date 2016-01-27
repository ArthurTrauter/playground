// eine definierte Klasse zur Erstellung eines Tabellenobjektes
(function() {
   'use strict';


   class Table {


      constructor() {
         this.entries = [];
      }

      addEntry(key, value) {
         this.entries.push({
           key: key,
           value: value
         });
      }

      forEach(f, thisArg) {
         var entries = this.entries;
         for (var i = 0, n = entries.length; i < n; i++) {
           console.log('ENTRIES ', entries);
           var entry = entries[i];
           f.call(thisArg, entry.key, entry.value, i);
           console.log(i);
         }
      }

   }

   module.exports = Table;
}());
