const human = [
  { name: "girls", favorite: "flowers" },
  { name: "boys", favourite: "cars" },
];

//print out two objects
console.log(human);

//print out "girls" only
const [girls, boys] = human;
console.log(girls);

//destruct an object
const { name, favorite } = girls;
console.log(favorite);
