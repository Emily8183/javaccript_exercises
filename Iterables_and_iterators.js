//go through the iteration in an array
let arr1 = [1, 2, 3, 4];
for (let i of arr1) {
  console.log(i);
}

// the iterator function below to create an iterator object for the array arr2.
let arr2 = [1, 2, 3, 4];
let itr = arr2[Symbol.iterator]();
//The printint result will be: Object [Array Iterator] {}
//console.log(itr);

//itr.next() will iterate through every element one by one
console.log(itr.next());
