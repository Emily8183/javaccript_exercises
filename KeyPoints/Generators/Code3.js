const genFunction = function* () {
  console.log("Hello");
  yield "Y1"; //the value of this yield is "Yi"
  console.log("World");
  yield "Y2";
  console.log("and Galaxy");
};
const gObj = genFunction();
for (let o of gObj) {
  //generator is iterable. o is the value of the yield
  console.log(o);
}
