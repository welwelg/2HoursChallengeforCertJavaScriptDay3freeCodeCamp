const firstResult = 5 + 10;
console.log(`5 + 10 = ${firstResult}`); 	//15

const secondResult = 8 - 5;
console.log(`8 - 5 = ${secondResult}`); 	//3

const thirdResult = 1 + 5;
console.log(`1 + 5 = ${thirdResult}`);	//6

const fourthResult = 0 + 8;
console.log(`0 + 8 = ${fourthResult}`);	//8

const fifthResult = 10 * 2;
console.log(`10 * 2 = ${fifthResult}`);	//20

const sixthResult = 0 + 22;
console.log(`0 + 22 = ${sixthResult}`);	//22

const seventhResult = 1 + 22;
console.log(`1 + 22 = ${seventhResult}`);	//23

// Debugging exercise for increment and decrement operators

let counter = 10;
console.log(`Counter is currently ${counter}`);

let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`);

let score = 8;
console.log(`Score is currently ${score}`);

let finalScore = score++;
console.log(`Score is still ${finalScore}`);

let coins = 3;
console.log(`Coins is currently ${coins}`);

let updatedCoins = --coins;

console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

let newHealth = health--;
console.log(`Health is still ${newHealth}`); 

//BOLEAN LOGIC OPERATORS
let isOldEnoughToDrive = true;

if (isOldEnoughToDrive) {
 console.log("You're old enough to drive"); // You're old enough to drive
} else {
 console.log("Sorry, you are not old enough to drive");
}

console.log(5 == "5"); // true 
console.log(5 === '5'); // false 
console.log(5 != "5"); // false
console.log(5 !== "5"); // true

//Comparison Operators,
let a = 6;
let b = 9;
let c = 6;

console.log(a >= b); // false
console.log(b >= a); // true
console.log(a >= c); // true

let d = 7;
let e = 8;

console.log(d < e); // true
console.log(e < d); // false

let f = 6;
let g = 9;
let h = 6;

console.log(f <= g); // true
console.log(g <= f); // false
console.log(f <= h); // true

const trueOrFalsy = true;
console.log(Boolean(trueOrFalsy)); // true

const truthyOrFalsy = "freeCodeCamp";
console.log(Boolean(truthyOrFalsy)); // true

const truthOrFalsy = "";

console.log(Boolean(truthOrFalsy)); // false

// Example with logical 
const hasDeveloperJob = true;
if (hasDeveloperJob){
  console.log("Timmy is employed as a developer.");
}

const isTimmyAGamer = false;
if (isTimmyAGamer){
  console.log("Timmy loves to play World of Warcraft.");
}


const timmyAge = 18;

if (timmyAge >= 16) {
  console.log("Timmy is old enough to drive.");
}

const edenAge = 15;

if (edenAge >= 16) {
    console.log("Eden is old enough to drive.");
}else {
  console.log("Eden is not old enough to drive.");
}