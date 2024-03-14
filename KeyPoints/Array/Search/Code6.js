let arr = [2300, 4500, 5600, 7800, 1200];
const rVal = arr.filter((elem) => {
  return elem > 3000;
});
console.log(rVal);

// filter() returns a new array, it does not modify the original array
//the result is [ 4500, 5600, 7800 ]
