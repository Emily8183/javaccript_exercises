let arr = [4, 5];
let [a, b = 0] = arr; //这里0是default value implementation, 最后的console.log还是 4 5 而不是4 0
console.log(a, b);
