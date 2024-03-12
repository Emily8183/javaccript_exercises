const genFunction = function* () {
  console.log("Hello");
  yield "Y1";
  console.log("World");
  yield "Y2";
  console.log("and Galaxy");
};
const gObj = [...genFunction()];
//becuz generator is iterable, you can use ... spread operator with it,  this will actually create an array with return values.
//All returned values by this generator function will be assigned to this object.
//[ 'Y1', 'Y2' ]
console.log(gObj);
