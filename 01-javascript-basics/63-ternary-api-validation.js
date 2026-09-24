const statusCode = 200;
const responseTime = 1500;

const result =
  statusCode === 200 && responseTime <= 2000 ? "API Passed" : "API Failed";
console.log(result);
