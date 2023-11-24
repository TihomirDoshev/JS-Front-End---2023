function sortWords(array) {
  let searchingWords = array.shift().split(" ");

  let occurence = {};

  searchingWords.forEach((word) => {
    occurence[word] = 0;
    array.forEach((element) => {
      if (word === element) {
        occurence[word]++;
      }
    });
  });
  let entries = Object.entries(occurence).sort((a, b) => b[1] - a[1]);

  for (const [key, value] of entries) {
    console.log(`${key} - ${value}`);
  }
}
sortWords([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
