function cooking(inputNum, comand1, comand2, comand3, comand4, comand5) {
  let comands = [comand1, comand2, comand3, comand4, comand5];
  let number = Number(inputNum);
  for (let index = 0; index < comands.length; index++) {
    if (comands[index] === "chop") {
      number = number / 2;
    } else if (comands[index] === "dice") {
      number = Math.sqrt(number);
    } else if (comands[index] === "spice") {
      number = number + 1;
    } else if (comands[index] === "bake") {
      number = number * 3;
    } else if (comands[index] === "fillet") {
      number = number -= number * 0.2;
    }
    console.log(number);
  }
}
cooking("9", "dice", "spice", "chop", "bake", "fillet");
