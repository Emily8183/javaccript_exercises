//We can generate an error with "throw" statements.

let a = 8;
let ageErr = new Error(); //throw<error object>: the error object can be of class Error, TypeError, SyntaxError etc
//the above line the class of ageErr is Error()

try {
  if (a < 18) {
    throw ageErr;
  } else {
    console.log("Valid age");
  }
} catch (err) {
  console.log("Invalid age error");
}
