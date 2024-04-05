// var houseKeeper1 = {
//     name: "Emily",
//     height: 170,
//     age: 36,
// }

//constructor
function HouseKeeper(name, height, age) {
  this.name = name;
  this.height = height;
  this.age = age;
  this.cleaning = function () {
    console.log("cleaning");
  };
}

let houseKeeper1 = new HouseKeeper("Emily", 170, 36);

console.log(houseKeeper1.cleaning());
