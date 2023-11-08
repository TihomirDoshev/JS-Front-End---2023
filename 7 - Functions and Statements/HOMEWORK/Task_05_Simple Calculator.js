function calculator(a, b, operation) {
  switch (operation) {
    case "multiply":
      console.log(a * b);
      break;
    case "divide":
      console.log(a / b);
      break;
    case "add":
      console.log(a + b);
      break;
    case "subtract":
      console.log(a - b);
      break;
  }
}
calculator(12, 19, "add");
