const apiTests = [
  { name: "Login API", statusCode: 200, time: 1200 },
  { name: "User API", statusCode: 500, time: 800 },
  { name: "Order API", statusCode: 200, time: 2500 },
  { name: "Payment API", statusCode: 201, time: 1500 },
];

const validApi = apiTests.find((test) => {
  return test.statusCode === 200 && test.time <= 2000;
});

console.log(validApi);
