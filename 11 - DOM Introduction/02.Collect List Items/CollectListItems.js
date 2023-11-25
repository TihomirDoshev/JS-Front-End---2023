function extractText() {
  let items = document.getElementsByTagName("li");
  let itemsArr = [];

  for (const currElement of Array.from(items)) {
    itemsArr.push(currElement.textContent);
  }
  let textArea = document.getElementById("result");
  textArea.textContent = itemsArr.join("\n");
}
