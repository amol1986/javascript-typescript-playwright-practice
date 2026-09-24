const apiResponse = {
  statusCode: 200,
  data: {
    user: {
      name: "Amol",
      role: "QA Engineer",
    },
  },
};

const {
  data: {
    user: { name, role },
  },
} = apiResponse;

console.log(name);
console.log(role);
