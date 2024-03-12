let a = 8;
try {
  if (a < 18) {
    throw new TypeError("Invalid Age");
    //define the class of throw as TypeError
    //the error object can be of class Error, TypeError, SyntaxError etc
  } else {
    console.log("Valid age");
  }
} catch (err) {
  console.log(err.name); //TypeError
  console.log(err.message); //Invalid Age
}
