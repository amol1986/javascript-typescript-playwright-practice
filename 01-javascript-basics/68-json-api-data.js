const apiResponse = '{"statusCode":200,"message":"Success","user":"Amol"}';

// Convert JSON string into JavaScript object
const data = JSON.parse(apiResponse);
// Print statusCode
console.log(data.statusCode);

// Print message
console.log(data.message);
// Print user
console.log(data.user);
