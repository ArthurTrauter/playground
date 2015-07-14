// TODO: Einfügen der Funktion in das 03-spider-sequential-iteration Skript
//       und test der darus resultierenden Funktionalität

exports = function iterateSeries(collection, iteratorCallback, finalCallback) {
  function iterate(index) {
    if (index === collection.length) {
      return finalCallback();
    }
    var task = collection[index];
    task(iteratorCallback);
  }

  iterate(0);
}
