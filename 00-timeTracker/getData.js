var in_array = function (needle, haystack) {
   for (var i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle) {
         return true;
      }
   }
   return false;
}

var availableModes = ['start', 'ende', 'statistik'];

exports.getData = function () {
   var result = {},
       mode = process.argv[2];

   if (in_array(mode, availableModes)) {
      result['mode'] = mode;
   } else {
      throw new Error ('Verfuegbare Modi: ' + availableModes.join(', '));
   }

   switch (mode) {
      case 'start':
         if (process.argv.length < 4) {
            throw new Error ('Bitte Aufgabe eingeben')
         }
         result['task'] = process.argv[3];
         break;
      case 'statistik':
         if (process.argv.length < 4) {
            throw new Error ('Bitte Zeitraum eingeben')
         }
         result['period'] = process.argv[3];
         break;
   }
   return result;
}
