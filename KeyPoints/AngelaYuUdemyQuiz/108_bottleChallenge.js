let i = 99;

while (i >= 1) {
  let bottleWord = " bottles ";
  let condition = i + bottleWord + "of beer on the wall.";

  if (i === 1) {
    bottleWord = " bottle ";
    condition = "no more bottles of beer on the wall.";
  }

  console.log(
    `${i} ${bottleWord} of beer on the wall, ${i} ${bottleWord} of beer.`
  );
  i--;
  console.log(`Take one down and pass it around, ${condition}`);
}

console.log(
  "No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall."
);
