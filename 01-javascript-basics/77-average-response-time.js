const responseTimes = [1000, 2000, 3000, 4000];

const totalTime = responseTimes.reduce((sum, time) => {
  return sum + time;
}, 0);

const averageTime =
  responseTimes.length > 0 ? totalTime / responseTimes.length : 0;

console.log(averageTime); 