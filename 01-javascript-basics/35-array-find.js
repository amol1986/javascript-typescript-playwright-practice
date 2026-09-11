const apiTests = [
  { id: 101, name: "Login API", statusCode: 200 },
  { id: 102, name: "User API", statusCode: 500 },
  { id: 103, name: "Order API", statusCode: 200 },
];
const userApi = apiTests.find((test) => {
  return test.id === 102;
});

console.log(userApi);
