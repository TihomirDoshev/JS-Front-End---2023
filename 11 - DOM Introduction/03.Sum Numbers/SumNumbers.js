function calc() {
  let firstnumberRef = document.getElementById("num1");
  let firstnumber = Number(firstnumberRef.value);

  let seconfNumRef = document.getElementById("num2");
  let secondNum = Number(seconfNumRef.value);

  let sum = firstnumber + secondNum;

  document.getElementById("sum").value = sum;
}
