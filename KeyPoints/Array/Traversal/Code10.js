let arr = ["ES5", "ES6", "ES7", "ES8"];
arr.forEach((elem, index) => {
  console.log(elem, index);
});

// arr.forEach((elem, index, array, thisArg)) 这里elem指的是每一个元素的value, index指每一个index
//如果函数用的是arrow function, 不能用thisArg
//for each cannot be stubbed in between.
// forEach can't be stopped in between like you break the loop
