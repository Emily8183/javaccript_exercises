//Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence(斐波纳契数列).
//Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1,
//and where every number thereafter is equal to the sum of the previous two numbers.

//fib(arr - 1) 表示调用 fib 函数来计算第 arr - 1 个斐波那契数。
//fib(arr - 2) 表示调用 fib 函数来计算第 arr - 2 个斐波那契数。
//将这两个值相加，就得到了第 arr 个斐波那契数的值。

function fib(arr) {
  if (arr <= 2) {
    return 1;
  } else {
    return fib(arr - 1) + fib(arr - 2);
  }
}

console.log(fib(10));
