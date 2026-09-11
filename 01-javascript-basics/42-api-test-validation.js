const apiTests = [
  { name: "Login API", statusCode: 200, time: 1200 },
  { name: "User API", statusCode: 200, time: 1800 },
  { name: "Order API", statusCode: 200, time: 1500 },
];

const allApisPassed = apiTests.every((test) => {
  return test.statusCode === 200 && test.time <= 2000;
});

console.log(allApisPassed);
