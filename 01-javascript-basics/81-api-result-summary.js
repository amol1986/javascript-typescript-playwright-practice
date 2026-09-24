const apiTests = [
  { name: "Login", status: "PASS" },
  { name: "Checkout", status: "FAIL" },
  { name: "Payment", status: "PASS" },
  { name: "Search", status: "FAIL" },
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
