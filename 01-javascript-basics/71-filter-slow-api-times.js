const responseTimes = [800, 2100, 1900, 3500, 2200];

// Find all response times greater than 2000 ms

const slowApis = responseTimes.filter((time) => {
  return time > 2000;
});

console.log(slowApis);
