function solve() {
  let text = document.querySelector("#text").value.toLowerCase();
  let command = document.querySelector("#naming-convention").value;
  let result = document.querySelector("#result");

  if (command === "Camel Case") {
    let sentance = [];

    text = text.split(" ");

    sentance.push(text[0]);

    for (let index = 1; index < text.length; index++) {
      sentance.push(text[index].charAt(0).toUpperCase() + text[index].slice(1));
    }
    result.textContent = sentance.join("");
  } else if (command === "Pascal Case") {
    let sentance = [];

    text = text.split(" ");

    for (let index = 0; index < text.length; index++) {
      sentance.push(text[index].charAt(0).toUpperCase() + text[index].slice(1));
    }
    result.textContent = sentance.join("");
  } else {
    result.textContent = "Error!";
  }
}
