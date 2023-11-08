function loginCheck(array) {
  let username = array[0].split("").reverse().join("");
  let count = 0;
  for (let index = 1; index < array.length; index++) {
    if (array[index] !== username) {
      count++;
      if (count >= 4) {
        console.log(`User ${array[0]} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    } else {
      console.log("User Acer logged in.");
    }
  }
}
loginCheck(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
