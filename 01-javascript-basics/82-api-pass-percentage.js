const summary = {
  passed: 8,
  failed: 2,
};

const totalTests = summary.passed + summary.failed;

const passPercentage = totalTests > 0 ? (summary.passed / totalTests) * 100 : 0;

console.log(passPercentage);
