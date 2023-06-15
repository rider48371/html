const feet = document.getElementById("feet");

const inches = document.getElementById("inches");

const weight = document.getElementById("weight");

const btn = document.getElementById("btn");

const bmiCalc = document.getElementById("bmi-calculation");

const weightCond = document.getElementById("weight-condition");

 function checkText(){

  if (!(feet.value > 0)) {

    alert("Please fill in feet");

  } else if (!(inches.value >= 0)) {

    alert("Please fill in inches");

  } else if (!(weight.value > 0)) {

    alert("Please fill in weight");

  } else {

    computeBMI();

  }

}

 

function computeBMI() {

  event.preventDefault();

  const totalInches = Number(feet.value * 12) + Number(inches.value);

  const totalCm = (Number(totalInches) * 2.54).toFixed(2);

  const totalM = Math.pow(Number(totalCm) / 100, 2).toFixed(2);

  const kilo = (Number(weight.value) / 2.205).toFixed(2);

  const BMI = (Number(kilo) / Number(totalM)).toFixed(1);

  bmiCalc.innerText = BMI;

 

  if (BMI < 18.5) {

    weightCond.innerText = "Underweight";

  } else if (BMI >= 18.5 && BMI < 25) {

    weightCond.innerText = "Healthy Weight";

  } else if (BMI >= 25 && BMI < 30) {

    weightCond.innerText = "Overweight";

  } else {

    weightCond.innerText = "Obesity";

  }

}
