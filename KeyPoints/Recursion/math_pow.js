// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(baseNum, exponent) {
  if (exponent === 0) return 1;
  return baseNum * power(baseNum, exponent - 1);
}

console.log(power(2, 4));
