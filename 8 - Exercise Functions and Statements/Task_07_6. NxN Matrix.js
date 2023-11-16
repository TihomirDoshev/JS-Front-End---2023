function printMatrix(number) {
  for (let index = 0; index < number; index++) {
    let row = "";
    for (let index = 0; index < number; index++) {
      row += `${number} `;
    }
    console.log(row);
  }
}
printMatrix(7);
