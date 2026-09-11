const apiTests = [
  { name: "Login", status: "PASS", time: 1200 },
  { name: "Checkout", status: "FAIL", time: 2500 },
  { name: "Payment", status: "PASS", time: 1800 },
  { name: "Search", status: "PASS", time: 2200 },
];

const validApiNames = apiTests
  .filter((test) => {
    return test.status === "PASS" && test.time <= 2000;
  })
  .map((test) => {
    return test.name;
  });

console.log(validApiNames);
