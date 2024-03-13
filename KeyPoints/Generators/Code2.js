const genFunction = function* () {
  console.log("Hello");
  yield;
  console.log("World");
  yield;
  console.log("and Galaxy");
};
const gObj = genFunction();
for (let o of gObj) {
  console.log(o);
}
