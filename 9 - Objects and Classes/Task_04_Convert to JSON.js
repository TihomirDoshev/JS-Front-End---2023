function convertJsToJason(firstName, lastName, hairColor) {
  let person = {};
  person.name = firstName;
  person.lastName = lastName;
  person.hairColor = hairColor;

  let jasonObj = JSON.stringify(person);
  console.log(jasonObj);
}
convertJsToJason("George", "Jones", "Brown");
