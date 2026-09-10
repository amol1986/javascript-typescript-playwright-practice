function isValidApiResponse(statusCode, responseTime, isAuthenticated) {
  return (
    (statusCode === 200 || statusCode === 201) &&
    responseTime <= 2000 &&
    isAuthenticated
  );
}
const result = isValidApiResponse(200, 1500, true);
console.log(result);
console.log(isValidApiResponse(200, 1500, true));
console.log(isValidApiResponse(201, 1500, true));
console.log(isValidApiResponse(100, 1500, true));
console.log(isValidApiResponse(200, 2500, true));
console.log(isValidApiResponse(200, 1500, false));
