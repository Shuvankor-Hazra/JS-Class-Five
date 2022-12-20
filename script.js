// 1. JavaScript Ternary Operator
// If else example
let age = 16;
if (age >= 18) {
  console.log("You are full age.");
} else {
  console.log("You are not full age.");
}

// Ternary Operator
// Example One
age >= 18
  ? console.log("You are full age.")
  : console.log("You are not full age.");

// Example Two
let food;
if (age > 12) {
  food = "Chicken";
} else {
  food = "Ice Cream";
}
console.log(`He like to eat ${food}`);

//
console.log(`He like to eat ${age > 12 ? "Chicken" : "Ice Cream"}`);

// Example Three
let game;
if (age > 15) {
  game = "Football";
} else {
  game = "Cricket";
}
console.log(`He like to play ${game}`);

//
console.log(`He like to play ${age > 15 ? "Football" : "Cricket"}`);

// 2. JavaScript Function
// Example One
function showText() {
  console.log(`Some Text`);
}
showText();
showText();
showText();

// Example Two
function showName(name) {
  console.log(name);
}
showName("Shuvankor");
showName("Hazra");
showName("Shuvo");

// Example Three
function calculateNumber(n1, n2) {
  console.log(n1 * n2);
}
calculateNumber(5, 8);
calculateNumber(50005, 85058);

// Example Four
function calculateNumber2(n1, n2, n3, n4) {
  console.log(n1 * n2 + n3 - n4);
}
calculateNumber2(5, 8, 10, 6);
calculateNumber2(50005, 85058, 56765, 13531);

// Example Five
function averageMark(s1, s2, s3, s4, s5) {
  console.log((s1 + s2 + s3 + s4 + s5) / 5);
}
averageMark(70, 88, 90, 86, 80);

//
function averageMark(s1, s2, s3, s4, s5) {
  const average = (s1 + s2 + s3 + s4 + s5) / 5;
  return average;
}
// A Mark
const aAverageMark = averageMark(70, 88, 90, 86, 60);
console.log(aAverageMark);

// B Mark
const bAverageMark = averageMark(80, 98, 94, 86, 80);
console.log(bAverageMark);

// C Mark
const cAverageMark = averageMark(98, 92, 94, 86, 88);
console.log(cAverageMark);

console.log(aAverageMark, bAverageMark, cAverageMark);
