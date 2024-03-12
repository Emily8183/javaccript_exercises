//print out the error msgs

try {
  let a = 10;
  console.log(`Value of A${a}`);
  letb = 50;
  console.log(`Value of B${b}`);
} catch (err) {
  console.log("Error Found");
  console.log(err.name); //ReferenceError
  console.log(err.message); //b is not defined
  console.log(err.stack); //ReferenceError: b is not defined
}
