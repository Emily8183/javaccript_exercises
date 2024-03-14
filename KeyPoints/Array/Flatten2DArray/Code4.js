let arr = [2, 4, 6, 8];
let result = arr.reduce((accumulator, current, index, array) => {
  accumulator += current;
  if (index === array.length - 1) {
    return accumulator / array.length;
  }
  return accumulator;
});
console.log(result);

// 在这里，回调函数接受四个参数：

// accumulator: 累加器，初始值为第一个元素的值。
// current: 当前正在处理的元素的值。
// index: 当前正在处理的元素的索引。
// array: 原始数组。
