// Practice Question 1
// What is the value of age after this code runs?
let age = 23;
age + 2;

console.log(age);
console.log(age + 2);
console.log(age);

// Practice Question 2
// What is the value of avg after thos code runs?
let hindi = 80;
let eng = 90;
let math = 100;
let avg = (hindi + eng + math) / 3;

console.log(avg);

// Practice Question 3
// What is the value of each variable in each line of code?
let num = 5;
let newNum = num++; // num = 6, newNum = 5;
console.log(newNum, num);

newNum = ++num; // num = 7, newNum = 7;
console.log(newNum, num);

// Practice Question 4
// Declare your name as a string and print its length
let firstName = "Ashish";
let lastName = "Kumar";
let fullName = firstName + " " + lastName;
console.log(firstName.length); // 6
console.log(lastName.length); // 5
console.log(fullName.length); // 12 includes space

// Declare your first name as a string and print its first character.
console.log(firstName[0]);
console.log(firstName.charAt(0)); // A

// Declare your first name as a string and print its last character.
let pos = firstName.length - 1;
console.log(firstName[pos]); // h
console.log(firstName.charAt(firstName.length - 1)); // h

// What is the output of following code.
// "apnacollege"+123
console.log("apnacollge" + 123); // apnacollege123

// What are lengths of an empty string & a string with a single splace
let nullString = "";
console.log(nullString.length); // 0

let singleSpace = " ";
console.log(singleSpace.length); // 1
