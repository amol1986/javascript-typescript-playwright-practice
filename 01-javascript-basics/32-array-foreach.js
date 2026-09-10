const browsers = ["Chrome", "Firefox", "Edge"];
browsers.forEach((browser, index) => {
  // console.log("Browser:", browser);
  console.log(index + " - " + browser);
});

const responseTimes = [120, 450, 180, 2500];

responseTimes.forEach((time, index) => {
  console.log("Test " + (index + 1) + ":" + time + "ms");
});
