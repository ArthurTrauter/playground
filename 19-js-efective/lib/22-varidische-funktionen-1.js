// varidische Funktion und alternativer Aufruf dieser durch einen Wrapper
function averageOfArray(a) {
   for (var i = 0, sum = 0, n = a.length; i < n; i++) {
      sum += a[i];
   }
   return sum / n;
}

var arr = [2, 7, 8, 1, 2, 8, 1, 8];
console.log(averageOfArray(arr));

function average() {
   console.log(arguments);
   return averageOfArray(arguments);
}

console.log(average(2, 7, 8, 1, 2, 8, 1, 8));
