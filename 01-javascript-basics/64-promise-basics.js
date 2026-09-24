const myPromise = new Promise((resolve, reject) => {
  resolve("API call successful");
});

myPromise.then((result) => {
  console.log(result);
});