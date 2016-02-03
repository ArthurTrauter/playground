// von monkey patching spricht man wenn zur Laufzeit bestehenden Prototypen, Objekten (fremden)
// neue Eigenschaften in Form von Methoden hinzufügt. Unbesonnenes Monkey-Patching ist zu vermeiden.
// Sinnvolle Anwendung von Monkey-Patching sind Polyfills (Stopfen von Lücken der fehlenden
// Standard-API)
Array.prototype.split = function(i) {
  return [this.slice(0, i), this.slice(i)];
};

var bspArray = [10, 20, 23, 56, 68];

console.log(bspArray.split(3));
