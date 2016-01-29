// Methoden können an eine Funktion höhrer Ordung als callback-Fkt übergeben werden
// dabei sollte jedoch nicht vergessen werden, dass die Objektreferenz der Methode nicht
// automatisch an das Empfängerobjekt gebunden wird
var strBuffer = {
  entries: [],
  add: function(s) {
    this.entries.push(s);
  },
  concat: function() {
    return this.entries.join("");
  }
};

var source = ["867", "-", "5309"];

try {
  // nur die Methode wird zur späteren verwendung Übergeben. Daher kein Verweis auf das Objekt
  // somit ist entries undefined
  source.forEach(strBuffer.add);
} catch (e) {
  console.log('Erwarteter Fehler e:', e);
}

// Zusätzlich zur Methode wird auch der Verweis auf das Zielobjekt mit übergeben. Somit kann
// voreach die Verknüpfung zu entries erstellen
source.forEach(strBuffer.add, strBuffer);
console.log(source);

console.log(strBuffer.concat());
strBuffer.entries = [];

// Wenn die aufnehmende Funktion keine Möglichkeit bietet das Zielobjekt mit zu übergeben, dann
// sollte kein Funktionsname übergeben werden sondern ein konkreter Aufruf durch eine
// anonyme Funktion erfolgen der im Kontext des Zielobjekts passiert somit die Verbindung zu
// den Attributen des Objekts enthält
source.forEach(function(e) {
  strBuffer.add(e);
});

console.log(strBuffer.concat());
strBuffer.entries = [];

// Das gleiche Vorgehen wie eben nur mit Unterstützung einer expliziten ES5 Funktionalität:
// dem BIND. Siehe entsprechendes Beispiel
source.forEach(strBuffer.add.bind(strBuffer));

console.log(strBuffer.concat());
