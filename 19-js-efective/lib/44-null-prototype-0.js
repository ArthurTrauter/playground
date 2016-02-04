// NULL-Prototype zum Schutz vor prototype-pollution

// howto
var x = Object.create(null);
console.log(Object.getPrototypeOf(x) === null);

// zu vermeiden. Alternative Lösung für einige JS umgebungen
// vor ES5
var x = {
  __proto__: null
};

console.log(x instanceof Object);
