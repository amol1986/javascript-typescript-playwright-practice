const testResults = [
  { name: "Login", status: "PASS", time: 1200 },
  { name: "Checkout", status: "FAIL", time: 2500 },
  { name: "Search", status: "PASS", time: 800 },
];
const hasFailedTest = testResults.some((test) => {
  return test.status === "FAIL";
});

console.log(hasFailedTest);
