function solve(array) {
  array = array.toLowerCase();

  let arrayOfElements = array.split(" ");

  let map = new Map();

  arrayOfElements.forEach((element) => {
    if (map.has(element)) {
      let oldValue = map.get(element);
      let newValue = oldValue + 1;

      map.set(element, newValue);
    } else {
      map.set(element, 1);
    }
  });

  let result = [];

  map.forEach((value, key) => {
    if (value % 2 !== 0) {
      result.push(key);
    }
  });
  console.log(result.join(" "));
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
