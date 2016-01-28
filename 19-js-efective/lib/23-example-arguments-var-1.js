// Arguments Parameter sollte niemals verändert werden um die Gefahr
// von Fehlern zu minimieren. Ein Workaround ist eine Kopie des Argument
// Objekts in ein echtes Array:

function callMethode(obj, method) {
   var args = [].slice.call(arguments, 2);

   return obj[method].apply(obj, args);
}

var obj = {
   add: function (x, y) {
      return x + y;
   },
   volume: function (x, y, z) {
      return x * y * z;
   }
};

console.log(callMethode(obj, "add", 17, 25));
console.log(callMethode(obj, "volume", 2, 3, 6));
