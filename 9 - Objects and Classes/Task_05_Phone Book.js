function makePhoneBook(array) {
  let phoneBook = {};

  for (const element of array) {
    let [name, number] = element.split(" ");
    phoneBook[name] = number;
  }
  for (const key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}
makePhoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
