function validateApi(statusCode) {
  return new Promise((resolve, reject) => {
    if (statusCode === 200 || statusCode === 201) {
      resolve("API Passed");
    } else {
      reject("API Failed");
    }
  });
}

async function testApi() {
  // Write your code here
  try {
    const result = await validateApi(500);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

testApi();
