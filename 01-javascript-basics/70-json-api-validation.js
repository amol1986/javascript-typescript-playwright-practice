const apiResponse =
  '{"statusCode":200,"message":"Success","responseTime":1500}';

// Convert JSON string to object
const data = JSON.parse(apiResponse);
if (data.statusCode === 200 && data.responseTime <= 2000) {
  console.log("API Test Passed");
} else {
  console.log("API Test Failed");
}
