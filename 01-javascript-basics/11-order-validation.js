const orderStatus = "SHIPPED";
const paymentStatus = "SUCCESS";
const amount = 1500;

if (
  (orderStatus === "SHIPPED" || orderStatus === "DELIVERED") &&
  paymentStatus === "SUCCESS" &&
  amount > 0
) {
  console.log("Order Valid");
} else {
  console.log("Order Invalid");
}
