const apiResponse = {
  statusCode: 200,
  data: {
    user: {
      name: "Amol",
      role: "QA Engineer",
      active: true,
    },
  },
};

const isValidUser =
  apiResponse.statusCode === 200 && apiResponse.data.user.active;

console.log(isValidUser);
