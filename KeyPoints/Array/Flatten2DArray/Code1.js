let arr = [2, 4, 6, 8];
let result = arr.reduce((accumulator, current) => {
  return accumulator + current;
  //对数组中的每个元素执行指定的回调函数，并将结果累积到一个最终值中
});
console.log(result);
//20
