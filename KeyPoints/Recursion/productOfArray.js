//the product of an array

function productOfArray(arr) {
  if (arr.length === 0)
    //product of an empty array is "1"
    return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3]));
