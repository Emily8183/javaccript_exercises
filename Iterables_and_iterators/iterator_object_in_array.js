//create an iterator object for array by using iterator function
let arr = [4, 6, 8, 10];
let itr = arr[Symbol.iterator]();
//The print result will be: Object [Array Iterator] {}
console.log(itr);

//itr.next() will iterate through every element one by one
//the 1st print result is { value: 1, done: false }
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
