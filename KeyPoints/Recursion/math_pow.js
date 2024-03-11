// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(baseNum, exponent) {
  if (num === 0) return 1;
  return num * power(num - 1);
}
