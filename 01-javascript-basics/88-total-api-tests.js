const apiTests = [
  { name: "Login", status: "PASS" },
  { name: "Checkout", status: "SKIPPED" },
  { name: "Payment", status: "FAIL" },
  { name: "Search", status: "PASS" },
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

const totalTest = summary.passed + summary.failed + summary.skipped;
const passPercentage = totalTest > 0 ? (summary.passed / totalTest) * 100 : 0;
console.log(passPercentage);
