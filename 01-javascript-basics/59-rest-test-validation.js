function areAllTestsPassed(...results) {
  return results.every((result) => {
    return result === "PASS";
  });
}

console.log(areAllTestsPassed("PASS", "PASS", "PASS"));
console.log(areAllTestsPassed("PASS", "FAIL", "PASS"));
