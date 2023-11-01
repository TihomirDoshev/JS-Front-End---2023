function sumDigits(number) {
  let sum = 0;
  let numbersString = number.toString();
  for (let index = 0; index < numbersString.length; index++) {
    sum += Number(numbersString[index]);
  }
  console.log(sum);
}
