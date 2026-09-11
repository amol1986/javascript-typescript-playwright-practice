const testResults = ["PASS", "PASS", "PASS", "PASS"];
const allTestsPassed = testResults.every((status) => {
  return status === "PASS";
});

console.log(allTestsPassed);
