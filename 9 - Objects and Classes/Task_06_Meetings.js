function makeDate(array) {
  let dateList = {};
  for (const element of array) {
    let [day, name] = element.split(" ");
    if (!dateList.hasOwnProperty(day)) {
      dateList[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }
  for (const key in dateList) {
    console.log(`${key} -> ${dateList[key]}`);
  }
}
makeDate(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
