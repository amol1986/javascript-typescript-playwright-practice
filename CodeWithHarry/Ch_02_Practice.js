//CH02_Practice Set
//Q1.
let age = 10;
if (age >= 10 && age <= 20) {
  console.log("Age Lies between 10 and 20");
}
//Q2

const ages = 9;
switch (ages) {
  case 10:
    console.log("Your age is 10");
    break;
  case 11:
    console.log("Your age is 11");
    break;
  case 12:
    console.log("Your age is 12");
    break;
  case 13:
    console.log("Your age is 13");
    break;
  case 14:
    console.log("Your age is 14");
    break;
  case 15:
    console.log("Your age is 15");
    break;
  case 16:
    console.log("Your age is 16");
    break;
  case 17:
    console.log("Your age is 17");
    break;
  default:
    console.log("Enter age between 10 to 17");
    break;
}
//Q3
let number = 20;
if (number % 2 === 0 && number % 3 === 0) {
  console.log("Number is divisible by 2 and 3");
} else {
  console.log("Number is not divisible 2 and 3");
}
//Q4
let numbers = 20;
if (numbers % 2 === 0 || numbers % 3 === 0) {
  console.log("Number is divisible by 2 and 3");
} else {
  console.log("Number is not divisible 2 and 3");
}
//Q5
let validage = 18;
console.log(validage > 18 ? "Valid for driving" : "Not Valid for driving");
