// Fehler Beispiel für Hoisting
"use strict";

function isWinnerFailure(player, others) {
  var highest = 0;
  for (var i = 0, n = others.length; i < n; i++) {
    var player = others[i];
    if (player.score > highest) {
      highest = player.score;
    }
  }
  return player.score > highest;
}

function isWinnerCorrect(player, others) {
  var highest = 0;
  var localPlayer = {
    score: 0
  };
  for (var i = 0, n = others.length; i < n; i++) {
    localPlayer.score = others[i];
    if (localPlayer.score > highest) {
      highest = localPlayer.score;
    }
  }
  return player.score > highest;
}


console.log("isWinnerFailure(10, [9,8,7,5,10]) ",
  isWinnerFailure({
    score: 10
  }, [9, 8, 7, 5, 10]));
console.log("isWinnerFailure(11, [9,8,7,5,10]) ",
  isWinnerFailure({
    score: 11
  }, [9, 8, 7, 5, 10]));
console.log("isWinnerCorrect(10, [9,8,7,5,10]) ",
  isWinnerCorrect({
    score: 10
  }, [9, 8, 7, 5, 10]));
console.log("isWinnerCorrect(11, [9,8,7,5,10]) ",
  isWinnerCorrect({
    score: 11
  }, [9, 8, 7, 5, 10]));
