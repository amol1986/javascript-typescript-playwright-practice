const responseTimes = [800, 1200, 1500, 2500];

// Calculate the total using reduce()

const totalTime = responseTimes.reduce((sum, time) => {
  return sum + time;
});

console.log(totalTime);
