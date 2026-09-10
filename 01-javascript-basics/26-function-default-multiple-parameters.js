function calculateTotal(price, quantity = 1) {
  return price * quantity;
}

console.log(calculateTotal(100, 3));
console.log(calculateTotal(500));
