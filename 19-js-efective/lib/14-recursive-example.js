// Rekursive Funktion mit named functions
// Durch das Binden der Namen einer benannten Funktion innerhalb
// der Funktion ist ein rekursiver Funktionsaufruf möglich

// Named functions sind für das debugging interessand da dadurch ein gültiger
// trace erzeugt wird

var func = function find(tree, key) {
   if (!tree) {
      return null;
   }
   if (tree.key === key) {
      return tree.value;
   }
   return find(tree.left, key) ||
          find(tree.right, key);
};

var myTree = {
   value: "bar",
   key: "bar",
   left: {
      value: "tar",
      key: "tar",
      left: null,
      right: null
   },
   right: {
      value: "foo",
      key: "foo",
      left: null,
      right: null
   }
};

console.log(myTree, typeof func, func(myTree, "foo"));
