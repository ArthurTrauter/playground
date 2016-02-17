// asynchrone Callbacks niemals synchron aufrufen
// Korrekterweise macht man keinen synchronen Aufruf sondern einen Asynchronen
// wie im folgenden Beispiel

var Dict = require('./45-Dict-3.js');

var cache = new Dict();

function downloadCachingAsync(url, onsuccess, onerror) {
  if (cache.has(url)) {
    var cached = cache.get(url);
    setTimeout(onsuccess.bind(null, cached), 0);
    return;
  }
  return downloadAsync(url, function(file) {
    cache.set(url, file);
    onsuccess(file);
  }, onerror);
}
