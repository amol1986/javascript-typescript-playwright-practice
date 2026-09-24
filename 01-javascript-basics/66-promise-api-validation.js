function validateApi(statusCode) {
  return new Promise((resolve, reject) => {
    if (statusCode === 200 || statusCode === 201) {
      resolve("API Passed");
    } else {
      reject("API Failed");
    }
  });
}

validateApi(210)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
