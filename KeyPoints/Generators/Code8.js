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

// the generator function gen() is not exhausted after the second yield statement. It still has one more yield statement that hasn't been executed (yield "Two"), so the generator is not considered finished. Therefore, the finally block is not executed at this point.
