// asynchrone Callbacks niemals synchron aufrufen

var Dict = require('./45-Dict-3.js');

var cache = new Dict();

function downloadCachingAsync(url, onsuccess, onerror) {
  if (cache.has(url)) {
    onsuccess(cache.get(url)); // Synchroner Aufruf
    return;
  }
  return downloadAsync(url, function(file) {
    cache.set(url, file);
    onsuccess(file);
  }, onerror);
}
