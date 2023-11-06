// function solve(text, word) {
//   while (text.includes(word)) {
//     text = text.replace(word, "*".repeat(word.length));
//   }
//   console.log(text);
// }
// solve("A small sentence with some small", "small");

function solve(sentance, word) {
  let regex = new RegExp(word, "g");
  let replacement = "*".repeat(word.length);
  console.log(sentance.replace(regex, replacement));
}
solve("A small sentence with some small", "small");
