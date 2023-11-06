function solve(words, array) {
  let splitedWords = words.split(", ");
  let splitedArray = array.split(" ");

  for (let index = 0; index < splitedWords.length; index++) {
    for (let j = 0; j < splitedArray.length; j++) {
      if (
        splitedArray[j].includes("*") &&
        splitedArray[j].length === splitedWords[index].length
      ) {
        splitedArray[j] = splitedWords[index];
      }
    }
  }
  console.log(splitedArray.join(" "));
}
solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
