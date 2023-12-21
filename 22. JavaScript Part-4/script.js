// For loop
// Print 1 to 5
console.log("For loop - Ascending counting");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Print 5 to 1
console.log("For loop - Descending counting");
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// Print odd numbers
console.log("Odd numbers - Method 1");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

console.log("Odd numbers - Method 2");
for (let i = 1; i <= 10; i = i + 2) {
  console.log(i);
}

// Print even numbers
console.log("Even numbers - Method 1");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("Even numbers - Method 2");
for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}

// Print multiplication table
// let x = prompt("Enter a number");
let x = 5;
console.log("Multiplication table");
for (let i = 1; i <= 10; i++) {
  console.log(`${x} * ${i} = ${x * i}`);
}

// Nested for loop
console.log("Nested for loop");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}

// While loop
// Print 1 to 5
console.log("While loop");
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

// Do-while loop
// Print 1 to 5
console.log("Do-while loop");
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// Favourite movie
let favMovie = "Dhoom";
// let retry = true;
let retry = false; // Comment this and uncomment retry = true while checking.
while (retry) {
  let guessMovie = prompt("Guess the movie");
  if (favMovie === guessMovie) {
    console.log("Congratulations!!! You guessed it right.");
    break;
  } else if (guessMovie === "Quit") {
    console.log("LMAO you quit, My favourite movie is " + favMovie);
    break;
  } else if (favMovie !== guessMovie) {
    let answer = prompt("Do you want to retry? Yes or No.");
    if (answer == "Yes") {
      retry = true;
    } else {
      retry = false;
      console.log("LMAO you quit retrying, My favourite movie is " + favMovie);
    }
  }
}

// let guessMovie = prompt("Guess my favourite movie");
// while (guessMovie != favMovie && guessMovie != "Quit") {
//   guessMovie = prompt("Wrong guess, Please try again");
// }

// if (favMovie === guessMovie) {
//   console.log("Congratulations!!! You guessed it right.");
// } else if (guessMovie === "Quit") {
//   console.log("LMAO you quit, My favourite movie is " + favMovie);
// }

// Loops with arrays
let fruits = ["Mango", "Apple", "Banana", "Litchi", "Orange"];

for (let i = 0; i <= fruits.length - 1; i++) {
  console.log(i, fruits[i]);
}

// for of loop
for (fruit of fruits) {
  console.log(fruit);
}

// Loops with arrays
// Nested loops with nested arrays

let heroes = [
  ["Ram", "Krishan", "Mahadev"],
  ["Durga", "Kalka", "Laxmi"],
];

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
  for (let j = 0; j < heroes[i].length; j++) {
    console.log(heroes[i][j]);
  }
}

// Nested for-of loop
for (list of heroes) {
  for (hero of list) {
    console.log(hero);
  }
}

// Assignment
// Pratice Question 1
// Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example: if arr = [1,2,3,4,5,6,2,3] & num = 2
// Result should be arr = [1,3,4,5,6,3]
let numArr = [1, 2, 3, 4, 5, 6, 2, 3];
let numDel = 2;

for (let i = 0; i <= numArr.length - 1; i++) {
  if (numDel === numArr[i]) {
    numArr.splice(i, 1);
  }
}

console.log(numArr);

// Practice Question 2
// Write a JS program to find the no. of digits in a number.
// Example: if number = 287152, count = 6
let number1 = 287152;
let count = 0;
if (number1 === 0) {
  count = 1;
} else {
  while (number1 > 0) {
    number1 = parseInt(number1 / 10);
    count++;
  }
}
console.log(count);

// Practice Question 3
// Write a JS program to find the sum of digits in a number.
// Example: if number = 287152, sum = 25
let number2 = 28715276548;
let sum = 0;
let rem = 0;
while (number2 > 0) {
  rem = number2 % 10;
  sum = sum + rem;
  number2 = parseInt(number2 / 10);
}

console.log(sum);

// Practice Question 4
// Print the factorial of a number n.
// Example: 7! (factorialof7) = 1x2x3x4x5x6x7 = 5040
// 5! (factorialof5) = 1x2x3x4x5 = 120
// 0! is always 1
// let num = prompt("Enter a number less than 15");
let num = 10;
let fact = 1;

for (let i = 1; i <= num; i++) {
  fact = fact * i;
}

console.log(fact);

// Practice Question 5
// Find the largest number in an array with only positive numbers.
let positiveNumberArray = [
  345, 543, 5678, 890, 9000, 789654, 89, 78, 908768, 8765,
];
let max = 0;

for (let i = 0; i <= positiveNumberArray.length; i++) {
  if (max < positiveNumberArray[i]) {
    max = positiveNumberArray[i];
  }
}

console.log(max);
