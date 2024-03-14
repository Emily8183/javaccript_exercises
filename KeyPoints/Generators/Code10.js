// the throw method throws an exception at the location of yield, which made the last suspension in the generator function.

function* gen() {
  try {
    yield "One";
    yield "Two";
  } catch (err) {
    console.log("Error:" + err);
  }
}
const gObj = gen();
console.log(gObj.next());
console.log(gObj.throw()); //use the throw method to throw an exception

//具体如何实现throw根据环境来确定
