exports.promiseFkt = function(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(' [x] Habe ' + ms + ' ms gewartet...');
    }, ms);
    if (Math.random() < 0.1) reject(' [Error] random error accured');
  });
};
