function calcolatePrice(product, count) {
  let price = 0;

  if (product === "coffee") {
    price = count * 1.5;
  }
  if (product === "water") {
    price = count * 1.0;
  }
  if (product === "coke") {
    price = count * 1.4;
  }
  if (product === "snacks") {
    price = count * 2.0;
  }
  console.log(`${price.toFixed(2)}`);
}
calcolatePrice("coffee", 2);

// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
