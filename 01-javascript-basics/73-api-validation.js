const apiTests = [
  { name: "Login", status: "PASS", time: 1200 },
  { name: "Checkout", status: "FAIL", time: 2500 },
  { name: "Payment", status: "PASS", time: 1800 },
  { name: "Search", status: "PASS", time: 2200 },
];

// Find APIs that:
// 1. Passed
// 2. Response time <= 2000 ms
// 3. Return only their names

const validApis = apiTests
  .filter((apiTest) => {
    return apiTest.status === "PASS" && apiTest.time <= 2000;
  })
  .map((apiTest) => {
    return apiTest.name;
  });
console.log(validApis);
