console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

//-------------Testing Code -----------------//
const flowers = ["Rose", "Lilly", "Jesmine"];

//const isjasmine = flowers.includes("Rose");

// flowers.map((flower) => {

//   console.log("isjasmine", flower);
// });

const firstFlowerStartingwithL = flowers.find((flower) =>
  flower.toString().startsWith("L")
);

//console.log("Flower with L", firstFlowerStartingwithL);
const includelilly = flowers.includes("Lilly", 1);
//console.log("findlilly", lilly);

const findLilly = flowers.find((flower) => flower.toLowerCase() == "lilly");
const findindexlilly = flowers.findIndex((flower) => flower == "Lilly");
//console.log("findindexlilly", findindexlilly);

const ulElm = document.querySelector('[data-js="ul"]');

flowers.map((flower) => {
  const liElm = document.createElement("li");
  liElm.textContent = flower;
  ulElm.append(liElm);
});
const sortFlower = flowers.slice().sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log("sortFlower", sortFlower);

const numbers = [2000, 1, 6, 0];

const sortNumber = numbers.slice().sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log("sort numer", sortNumber);
//-------------Testing Code -----------------//
//------------------------ old code --------------------------- //
const hippoExists = animalStrings.includes("hippo");

// Hint: You can pass the starting index as second parameter.
const catStartingFromIndexFiveExists = animalStrings.includes("cat", 5);

//console.log("catStartingFromIndexFiveExists", catStartingFromIndexFiveExists);

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterP = animalStrings.find((animal) =>
  animal.toString().startsWith("p")
);
//console.log(firstAnimalStartingWithLetterP);

const indexOfGiraffe = animalStrings.findIndex(
  (animal) => animal === "giraffe"
);
//console.log(indexOfGiraffe);

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// -> Use animals.slice().sort(...) to make a copy.
const animalsSortedAlphabetically = animalStrings.slice().sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log("animalsSortedAlphabetically", animalsSortedAlphabetically);
// Hint: Guess what? There is a string method called `endsWith()`.
const anyAnimalEndsWithLetterZ = animalStrings.some((animal) =>
  animal.toString().endsWith("z")
);

const everyAnimalHasMoreThanTwoLetters = animalStrings.every(
  (animal) => animal.length > 2
);

// Hint: There are several ways to go here. Let's focus on two options:
// Option 1: Concatenate all characters with `reduce()` and check for the `length` property of the result.
// Option 2: Use `map()` to create an array with the length values of all strings,
// 				then sum them up with `reduce()` (keyword: method chaining)

const sumOfAllAnimalCharacters = animalStrings.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  ""
).length;

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};
