function sortNumbers(array) {
  let newArray = [];
  array.sort((a, b) => a - b);

  while (array.length > 0) {
    let firstNum = array.shift();
    let lastNum = array.pop();
    newArray.push(firstNum);
    newArray.push(lastNum);
  }
  return newArray;
}
sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
