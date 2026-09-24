const myPromise = new Promise((resolve, reject) => {
  reject("API call failed");
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
