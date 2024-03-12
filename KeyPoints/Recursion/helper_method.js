//当有一个数组, 需要遍历这个数组，按照规定来组合一个新的数组时，会用到helper function
//helper function就是在helper function里面进行判断，然后进行递归
//递归的原则是先判断，然后递归。在这个例子中，判断条件是，如果第一个元素是奇数，就push到新的数组里。end point是，helperInput.length === 0，则结束递归。
//搭建helper function后，我们需要把这个helper function传入到collectOddValues函数里，然后进行调用。
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
