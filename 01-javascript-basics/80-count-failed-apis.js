const apiTests = [
  { name: "Login", status: "PASS" },
  { name: "Checkout", status: "FAIL" },
  { name: "Payment", status: "PASS" },
  { name: "Search", status: "FAIL" },
];

const failedCount = apiTests.reduce((count, test) => {
  // Write your logic here
  if (test.status === "FAIL") {
    return count + 1;
  }
  return count;
}, 0);

console.log(failedCount);
