// Steuerung nebenläufiger Operationen mit einem Zähler

function downloadAllAsync(urls, onsuccess, onerror) {
  var result = [],
    length = urls.length;

  if (length === 0) {
    setTimeout(onsuccess.bind(null, result), 0);
    return;
  }

  urls.forEach(function(url) {
    downloadAsync(url, function(text) {
      if (result) {
        // Race Condition
        result.push(text);
        if (result.length === urls.length) {
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
