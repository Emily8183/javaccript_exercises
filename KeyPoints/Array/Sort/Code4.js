let products = ["Banana", "Orange", "Grapes", "Apple"];
products.sort(function (a, b) {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  if (a == b) {
    return 0;
  }
});
console.log(products);

// [ 'Orange', 'Grapes', 'Banana', 'Apple' ]
