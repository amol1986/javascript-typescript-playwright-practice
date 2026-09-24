const apiTests = [
  { name: "Login", status: "PASS" },
  { name: "Checkout", status: "FAIL" },
  { name: "Payment", status: "PASS" },
  { name: "Search", status: "PASS" },
  { name: "Order", status: "FAIL" },
];

const summary = apiTests.reduce(
  (result, test) => {
    if (test.status === "PASS") {
      result.passed += 1;
    }
    if (test.status === "FAIL") {
      result.failed += 1;
    }
    return result;
  },
  { passed: 0, failed: 0 },
);

console.log(summary);
const totalTests = summary.passed + summary.failed;

console.log(totalTests);
const passPercentage = totalTests > 0 ? (summary.passed / totalTests) * 100 : 0;

console.log(passPercentage);
