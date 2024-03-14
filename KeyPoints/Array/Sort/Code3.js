let products = ["Banana", "Orange", undefined, "Grapes", "Apple"];
products.sort(function (a, b) {
  console.log(a, b);
});
console.log(products);

// Orange Banana
// Grapes Orange
// Apple Grapes
// [ 'Banana', 'Orange', 'Grapes', 'Apple' ]
