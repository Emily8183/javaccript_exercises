let a = 8;
let ageErr = new Error("Invalid Age"); //define the error message when creates the throw object
try {
  if (a < 18) {
    throw ageErr;
  } else {
    console.log("Valid age");
  }
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}
