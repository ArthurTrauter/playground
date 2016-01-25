// Gültigkeitsbereiche von lokalen FUnktionsdeklarationen
function f() { return "global"; }

function test(x) {

   var result = [];
   if (x) {
      function f() { return "local"; }
      result.push(f());
   }
   result.push(f());
   return result;
}

console.log(test(true));
console.log(test(false));
