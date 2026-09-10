function isValidResponse(statusCode, responseTime) {
  return statusCode === 200 && responseTime <= 2000;
}

const result = isValidResponse(200, 1500);
console.log(result);
