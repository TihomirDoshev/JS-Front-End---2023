function sumTable() {
  let rows = document.querySelectorAll("tr");
  let sum = 0;

  for (let index = 1; index < rows.length; index++) {
    let currentPrice = Number(rows[index].children[1].textContent);
    sum += currentPrice;
  }
  document.getElementById("sum").textContent = sum;
}
