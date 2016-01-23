// Closures example
function macheSandwitch() {
  var magischeZutat = 'Erdnussbutter';
  function bereiteZu(füllung) {
    return magischeZutat + " und " + füllung;
  }
  return bereiteZu;
}

var f = macheSandwitch();

console.log(f('Marmelade'));
console.log(f('Bananen'));
console.log(f('Gurken'));
