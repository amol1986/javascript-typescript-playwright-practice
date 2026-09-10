function isSuccessStatus(statusCode) {
  return statusCode === 200 || statusCode === 201;
}
const result = isSuccessStatus(200);

console.log(result);
