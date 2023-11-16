function result(a, b, c) {
  function sum(a, b) {
    return a + b;
  }
  function subtract(a, c) {
    return sum(a, b) - c;
  }
  console.log(sum(a, b) - c);
}
result(1, 17, 30);
