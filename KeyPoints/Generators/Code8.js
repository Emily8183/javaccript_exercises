function* gen() {
  try {
    yield "One";
    yield "Two";
  } finally {
    console.log("Finally");
  }
}
const gObj = gen();
console.log(gObj.next());
console.log(gObj.next());
// console.log(gObj.next());
