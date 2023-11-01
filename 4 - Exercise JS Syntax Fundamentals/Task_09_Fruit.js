function calculate(fruit, grams, price) {
  let kilograms = grams / 1000;
  let finalPrice = kilograms * price;
  console.log(
    `I need $${finalPrice.toFixed(2)} to buy ${kilograms.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
calculate("orange", 2500, 1.8);
