function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  var interpretation = "";

  if (bmi > 24.9) {
    interpretation = `Your BMI is ${bmi}, so you are overweight.`;
  } else if (bmi < 18.5) {
    interpretation = `Your BMI is ${bmi}, so you are underweight.`;
  } else {
    interpretation = `Your BMI is ${bmi}, so you have a normal weight.`;
  }
  return interpretation;
}

var result = bmiCalculator(50, 172);
console.log(result);
