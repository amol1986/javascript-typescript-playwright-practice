const apiResponse = {
  statusCode: 200,
  message: "Success",
  data: {
    userId: 101,
    name: "Amol"
  }
};

const { statusCode, message } = apiResponse;

console.log(statusCode);
console.log(message);