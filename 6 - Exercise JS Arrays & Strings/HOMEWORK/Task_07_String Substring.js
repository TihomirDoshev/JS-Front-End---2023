function match(word, text) {
  let textToMatch = text.toLowerCase().split(" ");
  let output = `${word} not found!`;
  for (const element of textToMatch) {
    if (element === word) {
      output = element;
    }
  }
  console.log(output);
}
match("ascript", "JavaScript is the best programming language");
