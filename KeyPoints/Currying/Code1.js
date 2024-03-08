const sum = function (a) {
  return function (b) {
    return a + b;
  };
};
const cl = sum(5);
const ans = cl(6);
console.log(ans);

//could just be function( a, b), but break it into two functions that only take one argument
