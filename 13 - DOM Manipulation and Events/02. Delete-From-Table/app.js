function deleteByEmail() {
  let inputText = document.querySelector("input");
  let tableRows = Array.from(document.querySelector("tbody").children);
  let isDeleteed = false;
  let result = document.querySelector("#result");

  console.log(tableRows);

  for (const row of tableRows) {
    let mailCell = row.children[1];
    if (mailCell.textContent === inputText.value) {
      row.remove();
      isDeleteed = true;
    }
    if (isDeleteed) {
      result.textContent = "Deleted";
    } else {
      result.textContent = "Not found.";
    }
  }
}
