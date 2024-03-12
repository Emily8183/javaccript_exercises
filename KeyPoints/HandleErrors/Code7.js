let a = 8;
try {
  if (a < 18) {
    throw new TypeError("Invalid Age");
  } else {
    console.log("Valid age");
  }
} catch (err) {
  console.log(err.name);
  console.log(err.message);
} finally {
  console.log("Finally code");
}

// finally is something which we use when we have the finishing code. after everything is done, the final block is executed.
