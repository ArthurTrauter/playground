// Steuerung nebenläufiger Operationen mit einem Zähler

function downloadAllAsync(urls, onsuccess, onerror) {
  var pending = urls.length;
  var result = [];

  if (pending === 0) {
    setTimeout(onsuccess.bind(null, result), 0);
    return;
  }

  urls.forEach(function(url, i) {
    downloadAsync(url, function(text) {
      if (result) {
        // Race Condition
        result[i] = text; // speichert einene festen Index
        pending--;
        if (pending === 0) {
          onsuccess(result);
        }
      }
    }, function(error) {

      if (result) {
        result = null;
        onerror(error);
      }
    });
  });
}
