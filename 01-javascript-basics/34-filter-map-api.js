const apiTests = [
  { name: "Login API", statusCode: 200, time: 1200 },
  { name: "User API", statusCode: 500, time: 800 },
  { name: "Order API", statusCode: 200, time: 2500 },
  { name: "Payment API", statusCode: 201, time: 1500 },
];
const passedApis = apiTests
  .filter((test) => {
    return (
      (test.statusCode === 200 || test.statusCode === 201) && test.time <= 2000
    );
  })
  .map((test) => {
    return test.name;
  });

console.log(passedApis);
