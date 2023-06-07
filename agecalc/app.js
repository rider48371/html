const button = document.getElementById("calculate");

const date = document.getElementById("birthday");

const result = document.getElementById("results");

 

function calculateAge() {

  const dateValue = date.value;

  if (dateValue === "") {

    alert("Please enter your birthday");

  } else {

    const age = getAge(dateValue);

    result.innerText = `You are ${age} ${age > 1 ? "years" : "year"} old!`;

  }

}

 

function getAge(dateValue) {

  const currentDate = new Date();

  const birthdayDate = new Date(dateValue);

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();

  const month = currentDate.getMonth() - birthdayDate.getMonth();

 

  if (

    month < 0 ||

    (month === 0 && currentDate.getDate() < birthdayDate.getDate())

  ) {

    age--;

  }

  return age;

}

 

button.addEventListener("click", calculateAge);