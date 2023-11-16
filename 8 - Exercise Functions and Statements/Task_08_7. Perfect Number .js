function isPerfect(number) {
  let sum = 0;
  for (let index = 1; index < number; index++) {
    const element = index;

    if (number % element === 0) {
      sum += element;
    }
  }
  if (number === sum) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
isPerfect(123);
