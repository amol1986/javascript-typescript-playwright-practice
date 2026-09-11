const apiTests = [
  { name: "Login API", statusCode: 200, time: 1200 },
  { name: "User API", statusCode: 200, time: 2500 },
  { name: "Order API", statusCode: 500, time: 3000 },
  { name: "Payment API", statusCode: 200, time: 1800 },
];
const slowApi = apiTests.find((test) => {
  return test.time > 2000;
});

console.log(slowApi);
