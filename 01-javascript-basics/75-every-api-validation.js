const apiTests = [
  { name: "Login", status: "PASS" },
  { name: "Checkout", status: "PASS" },
  { name: "Payment", status: "FAIL" },
];

// Check whether ALL APIs passed.

const allApisPassed = apiTests.every((apiTest) => {
  return apiTest.status === "PASS";
});

console.log(allApisPassed);
