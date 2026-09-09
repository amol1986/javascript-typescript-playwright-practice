let marks = {
  shivam: 40,
  yadnesh: 50,
  niyansh: 60,
};
console.log(marks);
let mark = Object.keys(marks);
for (let i = 0; i < mark.length; i++) {
  console.log("The marks of " + mark[i] + "are " + marks[mark[i]]);
}

//Prob 2 : Using for in loop
console.log("Using for in loop");

for (let key in marks) {
  console.log("The marks of " + key + "are " + marks[key]);
}

//Prob 3:
let cn = 43;
let i = 43; // change the number to see the while loop code

while (i != cn) {
  console.log("Enter the correct number");
  console.log("Try Again");
}
console.log("You had a enter the correct number");

//Prob 5

function meanofNumbers(a, b, c, d) {
  return (a + b + c + d) / 4;
}

const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};

console.log(mean(1, 2, 3, 4));
console.log(meanofNumbers(1, 2, 3, 5));
