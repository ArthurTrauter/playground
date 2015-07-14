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
