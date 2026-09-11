const apiTests = [
  { name: "Login", status: "PASS", time: 1200 },
  { name: "Checkout", status: "FAIL", time: 2500 },
  { name: "Payment", status: "FAIL", time: 2200 },
  { name: "Search", status: "PASS", time: 1000 },
];

const failedApi = apiTests.filter((test) => {
  return test.status === "FAIL";
});

console.log(failedApi);
