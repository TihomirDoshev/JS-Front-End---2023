function slise(number, array) {
  let reverced = array.slice(0, number).reverse();
  console.log(reverced.join(" "));
}
slise(3, [10, 20, 30, 40, 50]);
