function solve(sentance, word) {
  let count = 0;

  let array = sentance.split(" ");

  array.forEach((element) => {
    if (element === word) {
      count++;
    }
  });

  console.log(count);
}
solve(
  "softuni is great place for learning new programming languages",
  "softuni"
);
