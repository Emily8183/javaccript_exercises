//High Order Function: a function that takes one or more functions as arguments, or returns a function as its result.

function calculator(num1, num2, operator) {
  // return result; <= 这是错的
  return operator(num1, num2); // <= 这是对的, 正确的call operator function的方式
}

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

var result = calculator(1, 2, multiply);
console.log(result);
