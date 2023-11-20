function sortPersonInfo(array) {
  let personObj = {};

  for (const element of array) {
    let [name, address] = element.split(":");
    personObj[name] = address;
  }

  const sorted = Object.entries(personObj);
  let newSorted = sorted.sort();
  for (const element of newSorted) {
    console.log(`${element[0]} -> ${element[1]}`);
  }
}
sortPersonInfo([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
