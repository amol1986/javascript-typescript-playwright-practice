const apiTests = [
  { name: "Login", status: "PASS", time: 1200 },
  { name: "Checkout", status: "FAIL", time: 2500 },
  { name: "Payment", status: "PASS", time: 1800 },
  { name: "Search", status: "SKIPPED", time: 0 },
  { name: "Order", status: "PASS", time: 1500 },
];

const summary = apiTests.reduce(
  (result, test) => {
    if (test.status === "PASS") {
      result.passed += 1;
    }
    if (test.status === "FAIL") {
      result.failed += 1;
    }
    if (test.status === "SKIPPED") {
      result.skipped += 1;
    }
    return result;
  },
  { passed: 0, failed: 0, skipped: 0 },
);

console.log(summary);

const totalTests = summary.passed + summary.failed + summary.skipped;

console.log(totalTests);
const passPercentage = totalTests > 0 ? (summary.passed / totalTests) * 100 : 0;

console.log(passPercentage);
const report = `Total: ${totalTests} | Passed: ${summary.passed} | Failed: ${summary.failed} | Skipped: ${summary.skipped} | Pass Rate: ${passPercentage}%`;

console.log(report);
