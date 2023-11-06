function solve(text) {
  let regex = /#[A-Za-z]+/gm;

  let matches = text.match(regex);

  for (let element of matches) {
    element = element.replace("#", "");
    console.log(element);
  }
}
solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
