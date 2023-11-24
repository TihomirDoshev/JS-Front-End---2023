function makeDictionary(arr) {
  let dictionary = {};

  for (const data of arr) {
    let obj = JSON.parse(data);

    for (const [term, definition] of Object.entries(obj)) {
      dictionary[term] = definition;
    }
  }

  let sortedTerms = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));

  for (const term of sortedTerms) {
    console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
  }
}
makeDictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
