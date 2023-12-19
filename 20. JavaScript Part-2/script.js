// Practice Question 1
// Create a traffic system that shows what to do based on color.
let color = "Green";

// Using If only
if (color === "Red") {
  console.log("Stop!");
}
if (color === "Yellow") {
  console.log("Wait!");
}
if (color === "Green") {
  console.log("GO!");
}

// Using If-else-if
if (color === "Red") {
  console.log("Stop!");
} else if (color === "Yellow") {
  console.log("Wait!");
} else if (color === "Green") {
  console.log("GO!");
}

// Practice Question 2
// Create a system to calculate popcorn prices based on the size customer asked for:
// if size is "XL", price is Rs. 250
// if size is "L",  price is Rs. 200
// if size is "M",  price is Rs. 100
// if size is "S",  price is Rs. 50
let size = "S";
let price;

if (size === "XL") {
  price = 250;
  console.log("Price is Rs. " + price); // String
  console.log(`Price is Rs. ${price}`); // Template literals
} else if (size === "L") {
  price = 200;
  console.log("Price is Rs. " + price); // String
  console.log(`Price is Rs. ${price}`); // Template literals
} else if (size === "M") {
  price = 100;
  console.log("Price is Rs. " + price); // String
  console.log(`Price is Rs. ${price}`); // Template literals
} else if (size === "S") {
  price = 50;
  console.log("Price is Rs. " + price); // String
  console.log(`Price is Rs. ${price}`); // Template literals
} else {
  // console.log("Check the size of Popcorn once again."); // String
  console.log(`Check the size of Popcorn once again.`); // Template literals
}

// Practice Question 3
// A "good string" is a string that starts with the letter 'a' & has a length > 3. Write a program to find if a string is good or not.
// let string = window.prompt("Enter a string");
let string = "Apple";

// Nested If-else
if (string.length > 3) {
  if (string.charAt(0) === "a" || string.charAt(0) === "A") {
    console.log("Good string!");
  }
} else {
  console.log("Bad string!");
}

// Only If-else
if (
  string.length > 3 &&
  (string.charAt(0) === "a" || string.charAt(0) === "A")
) {
  console.log("Good string!");
} else {
  console.log("Bad string!");
}

// Practice Question 4
// Predict the output of following code.
let num = 12;

if (num % 3 === 0 && (num + 1 === 15 || num - 1 === 11)) {
  console.log("Safe");
} else {
  console.log("Unsafe");
}
// Safe

// Practice Question 5
// Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7.
// 1 - Monday, 2 - Tuesday and so on.
let day = window.prompt("Enter a number");
// let day = 2;

day = parseInt(day); // for window.prompt

switch (day) {
  case 1: {
    console.log("Monday");
    break;
  }
  case 2: {
    console.log("Tuesday");
    break;
  }
  case 3: {
    console.log("Wednesday");
    break;
  }
  case 4: {
    console.log("Thursday");
    break;
  }
  case 5: {
    console.log("Friday");
    break;
  }
  case 6: {
    console.log("Saturday");
    break;
  }
  case 7: {
    console.log("Sunday");
    break;
  }
  default: {
    console.log("It's a funday. Enjoy :)");
    break;
  }
}

// Assignment
// Practice Question 1
// Create a number variable num with some value.
// Now, print "good" if the number is divisible by 10 and print "bad" if it is not.
let number = 100;

if (number % 10 === 0) {
  console.log("Good!");
} else {
  console.log("Bad!");
}

// Practice Question 2
// Take the user's name & age as input using prompts.
// Then return back the following statement to the user as an alert (by substituting their name & age):
// NAME is AGE years old.
// Note: Use template literals to print this sentence.
let userName = window.prompt("Enter your name");
// let userName = "Ashish";
let userAge = window.prompt("Enter your age");
// let userAge = 24;

let sentence = `${userName} is ${userAge} years old.`;
alert(sentence);

// Practice Question 3
// Write a switch statement to print the months in a quarter.
// Months in Quarter 1: January, February, March
// Months in Quarter 2: April, May, June
// Months in Quarter 3: July, August, September
// Months in Quarter 4: October, November, December
// Note: Use the number as the case value in switch
let quarterNumber = 6;

switch (quarterNumber) {
  case 1: {
    console.log("Months in Quarter 1: January, February, March");
    break;
  }
  case 2: {
    console.log("Months in Quarter 2: April, May, June");
    break;
  }
  case 3: {
    console.log("Months in Quarter 3: July, August, September");
    break;
  }
  case 4: {
    console.log("Months in Quarter 4: October, November, December");
    break;
  }
  default: {
    console.log("AN YEAR HAS ONLY 4 QUARTERS. LOL.");
  }
}

// Practice Question 4
// A string is a golden string if it start with the character "A" or "a" and has a total length gretaer than 5.
// For a given string print if it is golden or not.
let inputString = "Apples";

if (
  inputString.length > 5 &&
  (inputString.charAt(0) === "A" || inputString.charAt(0) === "a")
) {
  console.log("Golden string");
} else {
  console.log("Not a golden string");
}

// Practice Question 5
// Write a program to find the largest of 3 numbers.
let num1 = 4;
let num2 = 1;
let num3 = 5;

if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2);
} else {
  console.log(num3);
}

// Practice Question 6
// Write a program to check if 2 numbers have the same last digit.
// Example: 32 and 47852 have the same last digit that is 2.
let value1 = window.prompt("Enter value 1");
// let value1 = 246;
let value2 = window.prompt("Enter value 2");
// let value2 = 3906;

if (value1 % 10 === value2 % 10) {
  console.log("True, both numbers have same last digit.");
} else {
  console.log("False, both numbers does not have same last digit.");
}
