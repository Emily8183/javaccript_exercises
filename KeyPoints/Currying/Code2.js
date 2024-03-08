const sum = function (a) {
  return function (b) {
    return a + b;
  };
};

//直接写在一行，（5）指parent function, (6)指child function
const ans = sum(5)(6);
console.log(ans);

//把上面的function改为arrow function
const sum2 = (a) => {
  return (b) => {
    return a + b;
  };
};

//进一步缩写，因为parameter只有一个，return value也只有一个，所以可以改为 ——
const sum3 = (a) => (b) => a + b;
