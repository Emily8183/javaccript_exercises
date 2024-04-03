function whosPaying(names) {
  let randomSelection = names[Math.floor(Math.random() * names.length) | 0];
  //   in order to get a random number between 0 and the length of the array, added "|0 "
  return `${randomSelection} is going to buy lunch today!`;
}

console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));
