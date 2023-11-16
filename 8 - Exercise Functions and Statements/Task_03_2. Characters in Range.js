function printChars(char1, char2) {
  let result = "";

  let firstChar = char1.charCodeAt();
  let secondChar = char2.charCodeAt();

  let start = Math.min(firstChar, secondChar);
  let stop = Math.max(firstChar, secondChar);

  for (let index = start + 1; index < stop; index++) {
    const element = String.fromCharCode(index);
    result += element + " ";
  }
  console.log(result);
}
printChars("C", "#");
