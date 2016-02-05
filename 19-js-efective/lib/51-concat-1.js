// concat verhält sich als einzigste Array-Methode nicht allgemeingültig. Concat prüft auf
// [[Class]]-Wert der Argumente

// Arguments wird als Klasse erkannt und bleibt beim concat als Objekt erhalten
function namesColumn() {
  return ["Names"].concat(arguments);
}
console.log(namesColumn("Alice", "Bob", "Chris"));

// Die Lösung für den concat
function namesColumn1() {
  return ["Names"].concat([].slice.call(arguments));
}
console.log(namesColumn1("Alice", "Bob", "Chris"));
