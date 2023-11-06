function solve(array, number) {
  let result = [];
  for (let index = 0; index < array.length; index += number) {
    const element = array[index];
    result.push(element);
  }
  return result;
}
solve(["5", "20", "31", "4", "20"], 2);
