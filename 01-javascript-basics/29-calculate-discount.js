const calculateDiscount = (price, discount) => {
  return price - (price * discount) / 100;
};
console.log(calculateDiscount(1000, 10));
