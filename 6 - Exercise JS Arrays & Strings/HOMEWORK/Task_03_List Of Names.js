function sortNames(array) {
  array.sort((a, b) => {
    return a.localeCompare(b);
  });

  let index = 1;

  array.forEach((element) => {
    console.log(`${index}.${element}`);
    index++;
  });
}
sortNames(["John", "Bob", "Christina", "Ema"]);
