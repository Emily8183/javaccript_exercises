let arr = [
  [45, 90],
  [5, 6],
  [2, 4],
];
let fArr = arr.reduce((accumulator, element) => {
  return accumulator.concat(element);
}, []);
//加上[]说明初始值是空的array，这样标注一下更好
console.log(fArr);

//[ 45, 90, 5, 6, 2, 4 ]
