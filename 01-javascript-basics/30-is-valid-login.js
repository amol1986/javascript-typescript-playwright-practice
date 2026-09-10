const isValidLogin = (username, password, isAccountActive) => {
  return (
    username === "admin" && password === "admin123" && isAccountActive === true
  );
};
console.log(isValidLogin("admin", "admin123", true)); // true
console.log(isValidLogin("admin", "wrong", true)); // false
console.log(isValidLogin("admin", "admin123", false)); // false
