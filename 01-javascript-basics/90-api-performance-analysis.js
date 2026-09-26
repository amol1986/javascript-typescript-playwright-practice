const apiTests = [
  { name: "Login", status: "PASS", time: 1200 },
  { name: "Checkout", status: "PASS", time: 2500 },
  { name: "Payment", status: "FAIL", time: 3200 },
  { name: "Search", status: "PASS", time: 1800 },
  { name: "Order", status: "PASS", time: 900 },
];

const failedApis = apiTests
  .filter((test) => {
    return test.stat;
    us === "FAIL";
  })
  .map((test) => {
    return test.name;
  });

console.log(failedApis);

const slowApis = apiTests
  .filter((test) => {
    return test.time > 2000;
  })
  .map((test) => {
    return test.name;
  });

console.log(slowApis);

const fastestTime = apiTests.reduce((min, test) => {
  return min < test.time ? min : test.time;
}, Infinity);
console.log(fastestTime);

const totalTime = apiTests.reduce((sum, test) => {
  return sum + test.time;
}, 0);
console.log(totalTime);
const averageTime = totalTime / apiTests.length;
