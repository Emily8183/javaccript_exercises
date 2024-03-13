//Star is the keyword used to define a generator function.
//Yield is an operator which pauses the generator.
//a normal function, function add(a,b) {}

const genFunction = function* () {
  console.log("Hello");
  yield; //the function will pause here
  console.log("World");
  yield;
  console.log("and Galaxy");
};
const gObj = genFunction(); //it turns the generator into an object
console.log(gObj);
gObj.next();
