function solve(array, rotations) {
  for (let index = 0; index < rotations; index++) {
    let element = array.shift();

    array.push(element);
  }
  console.log(array.join(" "));
}
solve([32, 21, 61, 1], 4);
