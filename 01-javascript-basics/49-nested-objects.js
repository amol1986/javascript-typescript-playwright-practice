const apiResponse = {
  statusCode: 200,
  data: {
    user: {
      name: "Amol",
      role: "QA Engineer",
    },
  },
};

console.log(apiResponse.data.user.name);
console.log(apiResponse.data.user.role);
