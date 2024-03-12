//pure recursion和helper function区别是，helper function可以有多个，pure recursion不需要搭建新的函数
//arr[0] % 2 !== 0时, 直接push到新的array。注意，这里push的只是第一个指数
//那还有很多数字怎么办呢？ok，用同样的方法不断地push。用arr.concat() method连接所有值。这就是pure recursion
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);
