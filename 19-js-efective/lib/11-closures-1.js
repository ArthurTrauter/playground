// Closures example
function sandwitchMaker(magischeZutat) {
  function make(füllung) {
    return magischeZutat + " und " + füllung;
  }
  return make;
}

var hamAnd = sandwitchMaker("ham");
console.log(hamAnd("käse"));
console.log(hamAnd("senf"));

var hamAnd = sandwitchMaker("truthahn");
console.log(hamAnd("swiss"));
console.log(hamAnd("provolone"));
