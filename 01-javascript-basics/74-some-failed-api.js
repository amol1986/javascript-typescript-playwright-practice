const apiTests = [
  { name: "Login", status: "PASS", time: 1200 },
  { name: "Checkout", status: "FAIL", time: 2500 },
  { name: "Payment", status: "PASS", time: 1800 },
];

// Check whether at least one API has failed.

const hasFailedApi = apiTests.some((apiTest) => {
  return apiTest.status === "FAIL";
});

console.log(hasFailedApi);
