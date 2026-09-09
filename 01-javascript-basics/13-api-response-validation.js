const statusCode = 200;
const responseTime = 1800;
const isAuthenticated = true;

if (
  (statusCode === 200 || statusCode === 201) &&
  responseTime <= 2000 &&
  isAuthenticated === true
) {
  console.log("API Test Passed");
} else {
  console.log("API Test Failed");
}
