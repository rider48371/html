const farenheit = document.getElementById("farenheit");

const celsius = document.getElementById("celsius");

const kelvin = document.getElementById("kelvin");

 

function computeTemp() {

  const currentValue = +event.target.value;

  switch (event.target.name) {

    case "celsius":

      kelvin.value = (currentValue + 273.15).toFixed(2);

      farenheit.value = (currentValue * 1.8 + 32).toFixed(2);

      break;

    case "farenheit":

      celsius.value = ((currentValue - 32) / 1.8).toFixed(2);

      kelvin.value = ((currentValue - 32) / 1.8 + 273.15).toFixed(2);

      break;

    case "kelvin":

      celsius.value = (currentValue - 273.32).toFixed(2);

      farenheit.value = ((currentValue - 32) * 1.8 - 273.15).toFixed(2);

      break;

  }

}