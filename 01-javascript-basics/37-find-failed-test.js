const testResults = [
  { name: "Login", status: "PASS", time: 1200 },
  { name: "Checkout", status: "PASS", time: 1800 },
  { name: "Payment", status: "FAIL", time: 2200 },
  { name: "Search", status: "FAIL", time: 3000 },
];
const failedTest = testResults.find((test) => {
  return test.status === "FAIL";
});
console.log(failedTest);
