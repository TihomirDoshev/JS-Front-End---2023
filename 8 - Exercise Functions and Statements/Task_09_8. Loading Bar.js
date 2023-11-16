function loading(number) {
  if (number === 100) {
    console.log("100% Complete!");
    console.log("[%%%%%%%%%%]");
  } else {
    let percent = "%".repeat(number / 10);
    let commas = ".".repeat(10 - number / 10);
    console.log(`${number}% [${percent}${commas}]`);
    console.log("Still loading...");
  }
}
loading(50);
