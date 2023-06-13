const fulltimebtn = document.querySelector("#fulltimebtn");

const fulltimeform = document.getElementById("fulltimeform");

const variablebtn = document.querySelector("#variablebtn");

const variableform = document.getElementById("variableform");

const schedulecbtn = document.querySelector("#schedulecbtn");

const schedulecform = document.getElementById("schedulecform");

const schedebtn = document.querySelector("#schedebtn");

const schedeform = document.getElementById("schedeform");

const scheduleebtn = document.querySelector("#scheduleebtn");

const scheduleeform = document.getElementById("scheduleeform");

const corpbtn = document.querySelector("#corpbtn");

const corpform = document.getElementById("corpform");

const rentalbtn = document.querySelector("#rentalbtn");

const rentalform = document.getElementById("rentalform");

const schedcBtn = document.getElementById("twoyear__btn");

const schedeBtn = document.getElementById("schedetwoyear__btn");

const scheduleeBtn = document.getElementById("scheduleetwoyear__btn");

const corpBtn = document.getElementById("corptwoyear__btn");

 

fulltimebtn.addEventListener("click", () => {

  fulltimeform.classList.remove("hide");

  fulltimeform.classList.add("show");

  variableform.classList.add("hide");

  variableform.classList.remove("show");

  schedulecform.classList.add("hide");

  schedulecform.classList.remove("show");

  schedeform.classList.add("hide");

  schedeform.classList.remove("show");

  scheduleeform.classList.add("hide");

  scheduleeform.classList.remove("show");

  corpform.classList.add("hide");

  corpform.classList.remove("show");

  rentalform.classList.add("hide");

  rentalform.classList.remove("show");

});

 

variablebtn.addEventListener("click", () => {

  fulltimeform.classList.add("hide");

  fulltimeform.classList.remove("show");

  variableform.classList.remove("hide");

  variableform.classList.add("show");

  schedulecform.classList.add("hide");

  schedulecform.classList.remove("show");

  schedeform.classList.add("hide");

  schedeform.classList.remove("show");

  scheduleeform.classList.add("hide");

  scheduleeform.classList.remove("show");

  corpform.classList.add("hide");

  corpform.classList.remove("show");

  rentalform.classList.add("hide");

  rentalform.classList.remove("show");

});

 

schedulecbtn.addEventListener("click", () => {

  fulltimeform.classList.add("hide");

  fulltimeform.classList.remove("show");

  variableform.classList.add("hide");

  variableform.classList.remove("show");

  schedulecform.classList.remove("hide");

  schedulecform.classList.add("show");

  schedeform.classList.add("hide");

  schedeform.classList.remove("show");

  scheduleeform.classList.add("hide");

  scheduleeform.classList.remove("show");

  corpform.classList.add("hide");

  corpform.classList.remove("show");

  rentalform.classList.add("hide");

  rentalform.classList.remove("show");

});

 

schedebtn.addEventListener("click", () => {

  fulltimeform.classList.add("hide");

  fulltimeform.classList.remove("show");

  variableform.classList.add("hide");

  variableform.classList.remove("show");

  schedulecform.classList.add("hide");

  schedulecform.classList.remove("show");

  schedeform.classList.remove("hide");

  schedeform.classList.add("show");

  scheduleeform.classList.add("hide");

  scheduleeform.classList.remove("show");

  corpform.classList.add("hide");

  corpform.classList.remove("show");

  rentalform.classList.add("hide");

  rentalform.classList.remove("show");

});

 

scheduleebtn.addEventListener("click", () => {

  fulltimeform.classList.add("hide");

  fulltimeform.classList.remove("show");

  variableform.classList.add("hide");

  variableform.classList.remove("show");

  schedulecform.classList.add("hide");

  schedulecform.classList.remove("show");

  schedeform.classList.add("hide");

  schedeform.classList.remove("show");

  scheduleeform.classList.remove("hide");

  scheduleeform.classList.add("show");

  corpform.classList.add("hide");

  corpform.classList.remove("show");

  rentalform.classList.add("hide");

  rentalform.classList.remove("show");

});

 

corpbtn.addEventListener("click", () => {

  fulltimeform.classList.add("hide");

  fulltimeform.classList.remove("show");

  variableform.classList.add("hide");

  variableform.classList.remove("show");

  schedulecform.classList.add("hide");

  schedulecform.classList.remove("show");

  schedeform.classList.add("hide");

  schedeform.classList.remove("show");

  scheduleeform.classList.add("hide");

  scheduleeform.classList.remove("show");

  corpform.classList.remove("hide");

  corpform.classList.add("show");

  rentalform.classList.add("hide");

  rentalform.classList.remove("show");

});

 

rentalbtn.addEventListener("click", () => {

  fulltimeform.classList.add("hide");

  fulltimeform.classList.remove("show");

  variableform.classList.add("hide");

  variableform.classList.remove("show");

  schedulecform.classList.add("hide");

  schedulecform.classList.remove("show");

  schedeform.classList.add("hide");

  schedeform.classList.remove("show");

  scheduleeform.classList.add("hide");

  scheduleeform.classList.remove("show");

  corpform.classList.add("hide");

  corpform.classList.remove("show");

  rentalform.classList.remove("hide");

  rentalform.classList.add("show");

});

 

// Hiding 2nd year forms for 1 year calculation

function schedcBtnClick() {

  const schedcForm = document.getElementById("twoyear__form");

 

  if (schedcBtn.value === "1 Year") {

    schedcBtn.value = "2 Years";

  } else if (schedcBtn.value === "2 Years") {

    schedcBtn.value = "1 Year";

  }

  schedcForm.classList.toggle("hide");

}

function schedeBtnClick() {

  const schedeForm = document.getElementById("schedetwoyear__form");

 

  if (schedeBtn.value === "1 Year") {

    schedeBtn.value = "2 Years";

  } else if (schedeBtn.value === "2 Years") {

    schedeBtn.value = "1 Year";

  }

  schedeForm.classList.toggle("hide");

}

function scheduleeBtnClick() {

  const scheduleeForm = document.getElementById("scheduleetwoyear__form");

 

  if (scheduleeBtn.value === "1 Year") {

    scheduleeBtn.value = "2 Years";

  } else if (scheduleeBtn.value === "2 Years") {

    scheduleeBtn.value = "1 Year";

  }

  scheduleeForm.classList.toggle("hide");

}

function corpBtnClick() {

  const corpForm = document.getElementById("corptwoyear__form");

 

  if (corpBtn.value === "1 Year") {

    corpBtn.value = "2 Years";

  } else if (corpBtn.value === "2 Years") {

    corpBtn.value = "1 Year";

  }

  corpForm.classList.toggle("hide");

}

 

// Math Section

 

// Fulltime

const monthEl = document.getElementById("month");

const dayEl = document.getElementById("day");

const yearEl = document.getElementById("year");

const btnEl = document.getElementById("ftbtn");

const payEl = document.getElementById("pay");

const paytypeEl = document.getElementById("paytype");

const ytdEl = document.getElementById("ytd");

const fullResult = document.getElementById("fullresult");

 

btnEl.addEventListener("click", () => {

  let lastYear = lastyear.value / 12;

  var getDaysInMonth = function(month, year) {

    return new Date(year, month, 0).getDate();

  };

  let timeElapsed = (

    monthEl.value -

    Number(1) +

    dayEl.value / getDaysInMonth(monthEl.value, yearEl.value)

  ).toFixed(5);

 

  if (paytypeEl.value === "hourly") {

    let fullIncome = ((payEl.value * 40 * 52) / 12).toFixed(2);

    let ytdIncome = (ytdEl.value / timeElapsed).toFixed(2);

    if (ytdIncome > fullIncome * Number(0.9)) {

      fullResult.innerText = fullIncome + "/month";

    } else {

      fullResult.innerHTML = ytdIncome + "/month. <b>May be variable.</b>";

    }

  } else if (paytypeEl.value === "weekly") {

    let weeklyIncome = ((payEl.value * 52) / 12).toFixed(2);

    let ytdIncome = (ytdEl.value / timeElapsed).toFixed(2);

    if (ytdIncome > weeklyIncome * Number(0.9)) {

      fullResult.innerText = weeklyIncome + "/month";

    } else if (ytdIncome < weeklyIncome * Number(0.9)) {

      fullResult.innerHTML = ytdIncome + "/month. <b>May be variable.</b>";

    }

  } else if (paytypeEl.value === "biweekly") {

    let biweeklyIncome = ((payEl.value * 26) / 12).toFixed(2);

    let ytdIncome = (ytdEl.value / timeElapsed).toFixed(2);

    if (ytdIncome > biweeklyIncome * Number(0.9)) {

      fullResult.innerText = biweeklyIncome + "/month";

    } else if (ytdIncome < biweeklyIncome * Number(0.9)) {

      fullResult.innerHTML = ytdIncome + "/month. <b>May be variable.</b>";

    }

  } else if (paytypeEl.value === "semimonthly") {

    let semimonthlyIncome = ((payEl.value * 24) / 12).toFixed(2);

    let ytdIncome = (ytdEl.value / timeElapsed).toFixed(2);

    if (ytdIncome > semimonthlyIncome * Number(0.9)) {

      fullResult.innerText = semimonthlyIncome + "/month";

    } else if (ytdIncome < semimonthlyIncome * Number(0.9)) {

      fullResult.innerHTML = ytdIncome + "/month. <b>May be variable.</b>";

    }

  } else if (paytypeEl.value === "monthly") {

    let monthlyIncome = payEl.value;

    let ytdIncome = (ytdEl.value / timeElapsed).toFixed(2);

    if (ytdIncome > monthlyIncome * Number(0.9)) {

      fullResult.innerText = monthlyIncome + "/month";

    } else if (ytdIncome < monthlyIncome * Number(0.9)) {

      fullResult.innerHTML = ytdIncome + "/month. <b>May be variable.</b>";

    }

  } else if (paytypeEl.value === "annual") {

    let annualIncome = (payEl.value / 12).toFixed(2);

    let ytdIncome = (ytdEl.value / timeElapsed).toFixed(2);

    if (ytdIncome > annualIncome * Number(0.9)) {

      fullResult.innerText = annualIncome + "/month";

    } else if (ytdIncome < annualIncome * Number(0.9)) {

      fullResult.innerHTML = ytdIncome + "/month. <b>May be variable.</b>";

    }

  } else if (paytypeEl.value === "monthlyteach") {

    let monthlyTeachIncome = ((payEl.value * 10) / 12).toFixed(2);

    let ytdIncome = (ytdEl.value / timeElapsed).toFixed(2);

    if (ytdIncome > monthlyTeachIncome * Number(0.9)) {

      fullResult.innerText = monthlyTeachIncome + "/month";

    } else if (ytdIncome < monthlyTeachIncome * Number(0.9)) {

      fullResult.innerHTML = ytdIncome + "/month. <b>May be variable.</b>";

    }

  } else if (paytypeEl.value === "annualteach") {

    let annualTeachIncome = (payEl.value / 12).toFixed(2);

    let ytdIncome = (ytdEl.value / timeElapsed).toFixed(2);

    if (ytdIncome > annualTeachIncome * Number(0.9)) {

      fullResult.innerText = annualTeachIncome + "/month";

    } else if (ytdIncome < annualTeachIncome * Number(0.9)) {

      fullResult.innerHTML = ytdIncome + "/month. <b>May be variable.</b>";

    }

  }

});