const responseTimes = [1200, 2500, 1800, 3500, 900];

// Find the highest response time using reduce()

const slowestTime = responseTimes.reduce((max, time) => {
  return max > time ? max : time;
});

console.log(slowestTime);
