let arr = [2300, 4500, 5600, 7800, 1200];
const rVal = arr.find((elem) => {
  //only return the first element that satisfies the condition
  return elem > 3000;
});
console.log(rVal);
/*
  Output: 4500
*/
