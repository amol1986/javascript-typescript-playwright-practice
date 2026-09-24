const apiRequest = {
  username: "admin",
  password: "admin123",
  role: "admin",
};

// Convert object to JSON string
const jsonString = JSON.stringify(apiRequest);
// Print JSON data
console.log(jsonString);

// Print its type
console.log(typeof jsonString);
