const username = "admin";
const password = "admin123";
const isAccountLocked = false;
const isAccountActive = true;
if (
  username === "admin" &&
  password === "admin123" &&
  !isAccountLocked &&
  isAccountActive
) {
  console.log("Login Successful");
} else {
  console.log("Login Failed");
}
