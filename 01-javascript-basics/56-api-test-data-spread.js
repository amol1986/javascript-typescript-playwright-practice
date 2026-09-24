const defaultTestData = {
  username: "admin",
  role: "user",
  active: true,
};

const testData = {
  ...defaultTestData,
  role: "admin",
};
console.log(testData);
