function parkingInfo(array) {
  let cars = [];
  for (const row of array) {
    let [direction, number] = row.split(", ");
    if (direction === "IN" && !cars.includes(number)) {
      cars.push(number);
    } else if (direction === "OUT" && cars.includes(number)) {
      let index = cars.indexOf(number);
      cars.splice(index, 1);
    }
  }
  if (cars.length > 0) {
    cars = cars.sort();
    console.log(cars.join("\n"));
  } else {
    console.log("Parking Lot is Empty");
  }
}
parkingInfo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
