function processUser(name, callback) {
  callback(name);
}

function sayHello(name) {
  console.log("Hello " + name);
}

processUser("Amol", sayHello);
