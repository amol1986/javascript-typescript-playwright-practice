const apiTests = [
  { name: "Login", status: "PASS", time: 1200 },
  { name: "Checkout", status: "PASS", time: 1800 },
  { name: "Payment", status: "FAIL", time: 2200 },
];

const allApisPassed = apiTests.every((test) => {
  return test.status === "PASS";
});
console.log(allApisPassed);
