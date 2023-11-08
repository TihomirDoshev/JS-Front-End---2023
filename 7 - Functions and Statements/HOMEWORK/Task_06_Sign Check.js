function positiveOrNegative(a, b, c) {
  let sum = a * b * c;
  if (sum < 0) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
}
positiveOrNegative(-6, -12, 14);
