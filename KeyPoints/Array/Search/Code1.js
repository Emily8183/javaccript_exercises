let arr = ["One", "Two", "One", "Three", "Four", "One", "Five"];
console.log(arr.indexOf("One")); //只显示第一个search结果
console.log(arr.indexOf("One", 3)); //从index =3 开始search
console.log(arr.indexOf("one")); //没有search到，显示-1
