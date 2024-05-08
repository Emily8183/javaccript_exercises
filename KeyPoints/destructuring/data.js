const human = [
  { name: "Mary", favorite: "flowers" },
  { name: "boys", favorite: "cars" },
];

//print out two objects
console.log("print out two objects");
console.log(human);

//print out "girls" only
console.log("print out 'girls' only");
const [girls, boys] = human;
console.log(girls);

//destruct an object
// const { name, favorite } = girls;
// console.log(favorite);

//prove an alternative name
// console.log("prove an alternative name");
// const { name: girlsName, favorite: girlsFavorite } = girls;
// console.log(girlsName);
// console.log(girlsFavorite);

//give a customized value to a variable
console.log("give a customized value to a variable");
// const { name = "Mary", favorite = "fruits" } = girls;
// console.log(name);
// console.log(favorite);
//当没有name或者favorite value时，可作为default value

//desctruct nested object (extension destruct)
console.log("desctruct nested object");
const animals = [
  {
    name: "sheep",
    favorite: "grass",
    home: { place: "zoo", size: 25 },
  },
  {
    name: "tiger",
    favorite: "meat",
  },
];

const [sheep, tiger] = animals;

const {
  name,
  favorite,
  home: { place, size },
} = sheep;

console.log(place);
