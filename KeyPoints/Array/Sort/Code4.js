let products = ["Banana", "Orange", "Grapes", "Apple"];
products.sort(function (a, b) {
  if (a < b) {
    return 1; //returns one, that means sort will arrange "a after B"
  }
  if (a > b) {
    return -1; //returns minus one, that means sort will arrange "a before B".
  }
  if (a == b) {
    return 0; //如果 a 的值等于 b 的值，表示 a 和 b 的顺序不需要改变，因此返回 0。
  }
});
console.log(products);

// Now this compare function can return three types of values.

// Less than zero.

// That is minus one more than zero.

// That is one or zero itself.

// [ 'Orange', 'Grapes', 'Banana', 'Apple' ]
