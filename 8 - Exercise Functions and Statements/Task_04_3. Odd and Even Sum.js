function evenAndOddSums(number) {
  let evenSum = 0;
  let oddSum = 0;
  let array = number.toString().split("");

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 2 === 0) {
      evenSum += Number(element);
    } else {
      oddSum += Number(element);
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

evenAndOddSums(3495892137259234);
