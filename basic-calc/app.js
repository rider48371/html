const buttons = document.querySelectorAll("button");

const inputField = document.getElementById("result");

 

for (let i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener("click", () => {

    const buttonValue = buttons[i].textContent;

    if (buttonValue === "CE") {

      clearResult();

    } else if (buttonValue === "=") {

      calculateResult();

    } else if (buttonValue === "del") {

      delDigit(buttonValue);

    } else {

      appendValue(buttonValue);

    }

  });

}

 

function clearResult() {

  inputField.value = "";

}

 

function calculateResult() {

  inputField.value = eval(inputField.value);

}

 

function appendValue(buttonValue) {

  inputField.value += buttonValue;

}

 

function delDigit(buttonValue) {

  inputField.value = inputField.value.substring(0, inputField.value.length - 1);

}