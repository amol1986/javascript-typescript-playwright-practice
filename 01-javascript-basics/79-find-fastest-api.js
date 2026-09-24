const responseTimes = [1200, 2500, 1800, 3500, 900];

const fastestTime = responseTimes.reduce((min, time) => {
  // Write your return statement
  return min < time ? min : time;
});

console.log(fastestTime);
