const testResults = ["PASS", "PASS", "FAIL", "PASS"];
const hasFailedTest = testResults.some((status) => {
  return status === "FAIL";
});

console.log(hasFailedTest);
