function checkSpeed(speed, area) {
  let status = "";
  let diffSpeed = 0;
  switch (area) {
    case "motorway":
      if (speed > 130) {
        if (speed > 130 && speed <= 150) {
          status = "speeding";
          console.log(
            `The speed is ${
              speed - 130
            } km/h faster than the allowed speed of ${130} - ${status}`
          );
        } else if (speed > 150 && speed <= 170) {
          status = "excessive speeding";
          console.log(
            `The speed is ${
              speed - 130
            } km/h faster than the allowed speed of ${130} - ${status}`
          );
        } else {
          status = "reckless driving";
          console.log(
            `The speed is ${
              speed - 130
            } km/h faster than the allowed speed of ${130} - ${status}`
          );
        }
      } else {
        console.log(`Driving ${speed} km/h in a ${130} zone`);
      }
      //   console.log(`The speed is ${speed-130} km/h faster than the allowed speed of ${130} - ${status}`);
      break;
    case "interstate":
      if (speed > 90) {
        if (speed > 90 && speed <= 110) {
          status = "speeding";
          console.log(
            `The speed is ${
              speed - 90
            } km/h faster than the allowed speed of ${90} - ${status}`
          );
        } else if (speed > 110 && speed <= 130) {
          status = "excessive speeding";
          console.log(
            `The speed is ${
              speed - 90
            } km/h faster than the allowed speed of ${90} - ${status}`
          );
        } else {
          status = "reckless driving";
          console.log(
            `The speed is ${
              speed - 90
            } km/h faster than the allowed speed of ${90} - ${status}`
          );
        }
      } else {
        console.log(`Driving ${speed} km/h in a ${90} zone`);
      }
      break;
    case "city":
      if (speed > 50) {
        if (speed > 50 && speed <= 70) {
          status = "speeding";
          console.log(
            `The speed is ${
              speed - 50
            } km/h faster than the allowed speed of ${50} - ${status}`
          );
        } else if (speed > 70 && speed <= 90) {
          status = "excessive speeding";
          console.log(
            `The speed is ${
              speed - 50
            } km/h faster than the allowed speed of ${50} - ${status}`
          );
        } else {
          status = "reckless driving";
          console.log(
            `The speed is ${
              speed - 50
            } km/h faster than the allowed speed of ${50} - ${status}`
          );
        }
      } else {
        console.log(`Driving ${speed} km/h in a ${50} zone`);
      }
      break;
    case "residential":
      if (speed > 20) {
        if (speed > 20 && speed <= 40) {
          status = "speeding";
          console.log(
            `The speed is ${
              speed - 20
            } km/h faster than the allowed speed of ${20} - ${status}`
          );
        } else if (speed > 40 && speed <= 60) {
          status = "excessive speeding";
          console.log(
            `The speed is ${
              speed - 20
            } km/h faster than the allowed speed of ${20} - ${status}`
          );
        } else {
          status = "reckless driving";
          console.log(
            `The speed is ${
              speed - 20
            } km/h faster than the allowed speed of ${20} - ${status}`
          );
        }
      } else {
        console.log(`Driving ${speed} km/h in a ${20} zone`);
      }
      break;
  }
}
checkSpeed(40, "city");

// •	On the motorway, the limit is 130 km/h
// •	On the interstate, the limit is 90 km/h
// •	In the city, the limit is 50 km/h
// •	Within a residential area, the limit is 20 km/h

// For speeding up to 20 km/h over the limit, the status should be speeding.
// For speeding up to 40 km/h over the limit, the status should be excessive speeding.
// For anything else, status should be reckless driving.
