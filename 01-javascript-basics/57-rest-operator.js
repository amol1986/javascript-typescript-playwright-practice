const user = {
  name: "Amol",
  role: "QA Engineer",
  experience: 11,
  skill: "Playwright"
};

const { name, ...otherDetails } = user;

console.log(name);
console.log(otherDetails);