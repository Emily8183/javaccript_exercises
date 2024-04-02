function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / height ** 2);
  //   height ** 2 can also be math.pow(height, 2)
  return bmi;
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);
