// The yield operator can use only in generator functions.

// When it comes to recursive function or even calling one generator function from another.

// There is a specific syntax that is by using yield and asterisk.

function* gen() {
  console.log("Hi");
}
function* gen1() {
  yield* gen();
}
const g1 = gen1();
g1.next();
