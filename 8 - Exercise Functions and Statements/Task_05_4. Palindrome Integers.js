function isPalindrome(array) {
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    let reverse = Number(element.toString().split("").reverse().join(""));
    if (element === reverse) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
isPalindrome([123, 323, 421, 121]);
