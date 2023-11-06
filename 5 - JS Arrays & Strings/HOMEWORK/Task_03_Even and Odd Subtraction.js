function sum(array) {
  let evenSum = 0;
  let oddSum = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 2 === 0) {
      evenSum += element;
    } else {
      oddSum += element;
    }
  }
  console.log(evenSum - oddSum);
}
sum([2, 4, 6, 8, 10]);
