function isValidPassword(password) {
  let count = 0;
  let regex = /^[A-Za-z0-9]*$/;

  let countCharsCHeck = password.length >= 6 && password.length <= 10;

  let checkOnlyLetterAndDigit = regex.test(password);

  for (let index = 0; index < password.length; index++) {
    let element = password[index];
    if (!isNaN(element)) {
      count++;
    }
  }
  let checkDigitsCount = count >= 2;

  if (!countCharsCHeck) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!checkOnlyLetterAndDigit) {
    console.log("Password must consist only of letters and digits");
  }
  if (!checkDigitsCount) {
    console.log("Password must have at least 2 digits");
  }
  if (countCharsCHeck && checkOnlyLetterAndDigit && checkDigitsCount) {
    console.log("Password is valid");
  }
}
isValidPassword("Pa$s$s");
