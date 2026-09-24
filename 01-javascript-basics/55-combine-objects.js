const user = {
  name: "Amol",
  role: "QA Engineer",
};

const details = {
  experience: 11,
  skill: "Playwright",
};

const employee = {
  ...user,
  ...details,
};

console.log(employee);
