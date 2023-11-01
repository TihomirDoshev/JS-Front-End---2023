function calculate(group, type, day) {
  let price = 0;
  switch (type) {
    case "Students":
      if (day === "Friday") {
        price = group * 8.45;
      } else if (day === "Saturday") {
        price = group * 9.8;
      } else if (day === "Sunday") {
        price = group * 10.46;
      }
      if (group >= 30) {
        price -= price * 0.15;
      }
      break;
    case "Business":
      if (group >= 100) {
        group -= 10;
      }
      if (day === `Friday`) {
        price = group * 10.9;
      } else if (day === `Saturday`) {
        price = group * 15.6;
      } else if (day === `Sunday`) {
        price = group * 16;
      }

      break;
    case "Regular":
      if (day === `Friday`) {
        price = group * 15;
      } else if (day === `Saturday`) {
        price = group * 20;
      } else if (day === `Sunday`) {
        price = group * 22.5;
      }

      if (group >= 10 && group <= 20) {
        price -= price * 0.05;
      }
      break;
  }

  console.log(`Total price: ${price.toFixed(2)}`);
}
