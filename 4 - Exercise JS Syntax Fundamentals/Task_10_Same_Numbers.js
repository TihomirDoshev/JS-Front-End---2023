function areEqual(number) {
  let string = String(number);
  let first = string[0];
  //   let check = true;
  let sum = 0;
  for (let index = 0; index < string.length; index++) {
    sum += Number(string[index]);
    if (string[index] === first) {
      check = true;
    } else {
      check = false;
    }
  }
  console.log(check);
  console.log(sum);
}

areEqual(2222222);
