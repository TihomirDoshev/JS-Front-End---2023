function convertJasonToJS(obj) {
  let jsObject = JSON.parse(obj);
  for (const key in jsObject) {
    console.log(`${key}: ${jsObject[key]}`);
  }
}
convertJasonToJS('{"name": "George", "age": 40, "town": "Sofia"}');
