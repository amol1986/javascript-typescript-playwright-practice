const apiTests = [
  { name: "Login", time: 1200 },
  { name: "Checkout", time: 2500 },
  { name: "Payment", time: 1800 },
  { name: "Search", time: 3200 },
];

// Step 1: Find APIs slower than 2000 ms
// Step 2: Get only their names

const slowApiNames = apiTests
  .filter((test) => {
    return test.time > 2000;
  })
  .map((test) => {
    return (test.name);
  });

console.log(slowApiNames);
