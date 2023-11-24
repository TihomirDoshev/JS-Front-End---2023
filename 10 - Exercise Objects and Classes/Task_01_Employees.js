function emploeeInfo(array) {
  array.forEach((emploee) => {
    let name = emploee;
    let number = emploee.length;
    console.log(`Name: ${emploee} -- Personal Number: ${number}`);
  });
}
emploeeInfo([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
