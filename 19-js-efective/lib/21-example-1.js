// Variadische Funktionen mit apply
// Der folgende Aufruf:
// avarage.apply(scores) entspricht dem folgenden Aufruf
// average.(scores[0], scores[1], scores[2])

var buffer = {
   state: [],
   append: function () {
      for (var i = 0, n = arguments.length; i < n; i++) {
         this.state.push(arguments[i]);
      }
   }
}

function getInputStrings() {
   return ["Wie ", "geht ", "es ", "dir?"];
}

buffer.append("Hallo, ");
buffer.append("DU");

console.log(buffer.state);

buffer.append.apply(buffer, getInputStrings());

console.log(buffer.state);
