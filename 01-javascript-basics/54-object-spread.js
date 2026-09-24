const user = {
  name: "Amol",
  role: "QA Engineer",
};

const updatedUser = {
  ...user,
  role: "Automation Engineer",
};

console.log(updatedUser);
