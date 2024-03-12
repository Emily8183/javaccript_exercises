function* gen() {
  try {
    yield "One";
    yield "Two";
  } finally {
    yield "Finally";
  }
}
const gObj = gen();
console.log(gObj.next());
console.log(gObj.return());
//termination of the generator by using return, but when there's finally, it will be suspended
//console.log(gobj.return("Condition done..."));
