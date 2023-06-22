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

  var getDaysInMonth = function(month, year) {

    return new Date(year, month, 0).getDate();

  };

  let timeElapsed = (

    monthEl.value -

    Number(1) +

    dayEl.value / getDaysInMonth(monthEl.value, yearEl.value)

  ).toFixed(5);

 

  if (monthEl.value < 1 || monthEl.value > 12) {

    alert("Please enter month in numerical format between 1 and 12");

  } else if (dayEl.value < 1 || dayEl.value > getDaysInMonth()) {

    alert("Please enter a valid day in the month");

  } else if (yearEl.value === "") {

    alert("Please enter a valid 4 digit year");

  } else if (payEl.value === "") {

    alert("Please enter a valid pay amount");

  } else if (ytdEl.value === "") {

    alert("Please enter a valid year to date income");

  } else {

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

  }

});

 

// Variable Income

const loanType = document.getElementById("loan__type");

const using = document.getElementById("using");

const otSection = document.getElementById("ot__section");

const commissionSection = document.getElementById("commission__section");

const tipSection = document.getElementById("tip__section");

const otCheck = document.getElementById("ot__check");

const bonusCheck = document.getElementById("bonus__check");

const commissionCheck = document.getElementById("comm__check");

const tipCheck = document.getElementById("tip__check");

const incomeType = document.getElementById("income__type");

const paystubCalculator = document.getElementById("paystub__calculator");

const ytdOT = document.getElementById("ytd__ot");

const ytdBonus = document.getElementById("ytd__bonus");

const ytdCommission = document.getElementById("ytd__commission");

const ytdTip = document.getElementById("ytd__tip");

const bonusQuestion = document.getElementById("bonus__question");

const positiveFactors = document.getElementById("positive__factors");

const wvoeCalculator = document.getElementById("wvoe__calculator");

const twoYear = document.getElementById("2year");

const twoYearOptions = document.getElementById("twoyear");

const extraQuestions = document.getElementById("extra__questions");

const ytdOtRead = document.getElementById("ytd__ot-read");

const ytdOtRecent = document.getElementById("recent__ot-w2");

const ytdOtPrev = document.getElementById("previous__ot-w2");

const ytdCommissionRead = document.getElementById("ytd__commission-read");

const ytdCommissionRecent = document.getElementById("recent__commission-w2");

const ytdCommissionPrev = document.getElementById("previous__commission-w2");

const ytdTipRead = document.getElementById("ytd__tip-read");

const ytdTipRecent = document.getElementById("recent__tip-w2");

const ytdTipPrev = document.getElementById("previous__tip-w2");

const varCalc = document.getElementById("varcalc");

const baseIncome = document.getElementById("base__income");

const ytdWVOE = document.getElementById("ytd__wvoe");

const recentWVOE = document.getElementById("recent__wvoe");

const previousWVOE = document.getElementById("previous__wvoe");

const ytdPaystub = document.getElementById("ytd__paystub");

const recentW2 = document.getElementById("recent__w2");

const previousW2 = document.getElementById("previous__w2");

const varTotalResult = document.getElementById("varTotalResult");

const qualBaseWVOE = document.getElementById("qualifying__base-wvoe");

const qualBasePaystub = document.getElementById("qualifying__base-paystub");

const qualOt = document.getElementById("ot__qualifying");

const qualComm = document.getElementById("commission__qualifying");

const qualTip = document.getElementById("tip__qualifying");

 

function daysDifference() {

  var dateI1 = document.getElementById("varStartDate").value;

  var dateI2 = document.getElementById("varPayDate").value;

  var date1 = new Date(dateI1);

  var date2 = new Date(dateI2);

  var time_difference = date2.getTime() - date1.getTime();

  var varResult = time_difference / (1000 * 60 * 60 * 24);

 

  var startYear = date1.getFullYear();

  // var startMonth = date1.getMonth();

  var startDay = date1.getUTCDate();

  var payYear = date2.getFullYear();

  // var payMonth = date2.getMonth();

  var payDay = date2.getUTCDate();

 

  if (startDay == 1) {

    var startMonth = date1.getMonth() + 2;

  } else {

    var startMonth = date1.getMonth() + 1;

  }

  if (payDay == 1) {

    payMonth = date2.getMonth() + 2;

  } else {

    payMonth = date2.getMonth() + 1;

  }

  var getDaysInMonth = function(month, year) {

    return new Date(year, month, 0).getDate();

  };

  let varTimeElapsed = (

    payMonth -

    Number(1) +

    payDay / getDaysInMonth(payMonth, payYear)

  ).toFixed(2);

 

  if (varResult >= 730) {

    if (

      (incomeType.value === "wvoe" &&

        baseIncome.value === "variable" &&

        loanType.value === "Fannie" &&

        otCheck.checked == false &&

        bonusCheck.checked == false &&

        commissionCheck.checked == false &&

        tipCheck.checked == false) ||

      (incomeType.value === "wvoe" &&

        baseIncome.value === "variable" &&

        loanType.value === "Freddie" &&

        otCheck.checked == false &&

        bonusCheck.checked == false &&

        commissionCheck.checked == false &&

        tipCheck.checked == false &&

        Number(ytdWVOE.value) /

          Number(varTimeElapsed) /

          (Number(recentWVOE.value) / Number(12)) >

          Number(0.9) &&

        incomeType.value === "wvoe" &&

        baseIncome.value === "variable" &&

        loanType.value === "Freddie" &&

        otCheck.checked == false &&

        bonusCheck.checked == false &&

        commissionCheck.checked == false &&

        tipCheck.checked == false &&

        Number(ytdWVOE.value) /

          Number(varTimeElapsed) /

          (Number(recentWVOE.value) / Number(12)) <

          Number(1.1))

    ) {

      if (

        Number(recentWVOE.value) + Number(previousWVOE.value) / Number(24) <

          Number(ytdWVOE.value) / Number(varTimeElapsed) &&

        Number(recentWVOE.value) / Number(12) >

          Number(previousWVOE.value) / Number(12)

      ) {

        var baseIncomeResult = (

          (Number(recentWVOE.value) + Number(ytdWVOE.value)) /

          (Number(12) + Number(varTimeElapsed))

        ).toFixed(2);

        qualBaseWVOE.innerText =

          "$" + baseIncomeResult + "/month Variable Base Income";

        console.log("increasing");

      } else if (

        Number(ytdWVOE.value) / Number(varTimeElapsed) <

          (Number(recentWVOE.value) + Number(previousWVOE.value)) /

            Number(24) &&

        Number(recentWVOE.value) / Number(12) <

          Number(previousWVOE.value) / Number(12)

      ) {

        var baseIncomeResult = (

          Number(ytdWVOE.value) / Number(varTimeElapsed)

        ).toFixed(2);

        qualBaseWVOE.innerText =

          "$" + baseIncomeResult + "/month Variable Base Income";

        console.log("declining");

      } else {

        if (

          (Number(recentWVOE.value) +

            Number(previousWVOE.value) +

            Number(ytdWVOE.value)) /

            (Number(24) + Number(varTimeElapsed)) >

          (Number(recentWVOE.value) + Number(ytdWVOE.value)) /

            (Number(12) + Number(varTimeElapsed))

        ) {

          var baseIncomeResult = (

            (Number(recentWVOE.value) +

              Number(previousWVOE.value) +

              Number(ytdWVOE.value)) /

            (Number(24) + Number(varTimeElapsed))

          ).toFixed(2);

          qualBaseWVOE.innerText =

            "$" + baseIncomeResult + "/month Variable Base Income";

          console.log("first");

        } else if (

          (Number(recentWVOE.value) +

            Number(previousWVOE.value) +

            Number(ytdWVOE.value)) /

            (Number(24) + Number(varTimeElapsed)) <

          (Number(recentWVOE.value) + Number(ytdWVOE.value)) /

            (Number(12) + Number(varTimeElapsed))

        ) {

          var baseIncomeResult = (

            (Number(recentWVOE.value) + Number(ytdWVOE.value)) /

            (Number(12) + Number(varTimeElapsed))

          ).toFixed(2);

          qualBaseWVOE.innerHTML =

            "$" + baseIncomeResult + "/month Variable Base Income";

          console.log("second");

        }

      }

    } else if (

      (incomeType.value === "paystub" &&

        baseIncome.value === "variable" &&

        loanType.value === "Fannie" &&

        otCheck.checked == false &&

        bonusCheck.checked == false &&

        commissionCheck.checked == false &&

        tipCheck.checked == false) ||

      (incomeType.value === "paystub" &&

        baseIncome.value === "variable" &&

        loanType.value === "Freddie" &&

        otCheck.checked == false &&

        bonusCheck.checked == false &&

        commissionCheck.checked == false &&

        tipCheck.checked == false &&

        Number(ytdPaystub.value) /

          Number(varTimeElapsed) /

          (Number(recentW2.value) / Number(12)) >

          Number(0.9) &&

        incomeType.value === "paystub" &&

        baseIncome.value === "variable" &&

        loanType.value === "Freddie" &&

        otCheck.checked == false &&

        bonusCheck.checked == false &&

        commissionCheck.checked == false &&

        tipCheck.checked == false &&

        Number(ytdPaystub.value) /

          Number(varTimeElapsed) /

          (Number(recentW2.value) / Number(12)) <

          Number(1.1))

    ) {

      if (twoYearOptions.value == "yes") {

        if (

          Number(ytdPaystub.value) / Number(varTimeElapsed) >

            Number(recentW2.value) / Number(12) &&

          Number(recentW2.value) / Number(12) >

            Number(previousW2.value) / Number(12)

        ) {

          var baseIncomeResult = (

            (Number(ytdPaystub.value) + Number(recentW2.value)) /

            (Number(12) + Number(varTimeElapsed))

          ).toFixed(2);

          qualBasePaystub.innerText =

            "$" + baseIncomeResult + "/month Variable Income";

        } else if (

          Number(ytdPaystub.value) / Number(varTimeElapsed) >

            Number(recentW2.value) / Number(12) &&

          Number(recentW2.value) / Number(12) <

            Number(previousW2.value) / Number(12)

        ) {

          var baseIncomeResult = (

            (Number(ytdPaystub.value) +

              Number(recentW2.value) +

              Number(previousW2.value)) /

            (Number(24) + Number(varTimeElapsed))

          ).toFixed(2);

          qualBasePaystub.innerText =

            "$" + baseIncomeResult + "/month Variable Income";

        } else if (

          Number(ytdPaystub.value) / Number(varTimeElapsed) <

          Number(recentW2.value) / Number(12)

        ) {

          var baseIncomeResult = (

            Number(ytdPaystub.value) / Number(varTimeElapsed)

          ).toFixed(2);

          qualBasePaystub.innerText =

            "$" + baseIncomeResult + "/month Variable Income";

        }

      } else if (twoYearOptions.value == "no") {

        varTotalResult.innerText =

          "Need to have 2 year's of all borrower's w2's";

      }

    }

  } else if (varResult >= 365 && varResult < 730) {

  } else {

    varTotalResult.innerText =

      "Borrower has been receiving variable income for < 1 year. Cannot use variable income.";

  }

}

 

function paystub__calc() {

  if (incomeType.value === "paystub") {

    paystubCalculator.classList.remove("hidden");

    wvoeCalculator.classList.add("hidden");

    twoYear.classList.remove("hidden");

    extraQuestions.classList.remove("hidden");

    ytdOtRead.setAttribute("readonly", true);

    ytdOtRead.value = "";

    ytdOtRecent.setAttribute("readonly", true);

    ytdOtRecent.value = "";

    ytdOtPrev.setAttribute("readonly", true);

    ytdOtPrev.value = "";

    ytdCommissionRead.setAttribute("readonly", true);

    ytdCommissionRead.value = "";

    ytdCommissionRecent.setAttribute("readonly", true);

    ytdCommissionRead.value = "";

    ytdCommissionPrev.setAttribute("readonly", true);

    ytdCommissionRead.value = "";

    ytdTipRead.setAttribute("readonly", true);

    ytdTipRead.value = "";

    ytdTipRecent.setAttribute("readonly", true);

    ytdTipRead.value = "";

    ytdTipPrev.setAttribute("readonly", true);

    ytdTipRead.value = "";

  } else if (incomeType.value === "wvoe") {

    wvoeCalculator.classList.remove("hidden");

    paystubCalculator.classList.add("hidden");

    twoYear.classList.add("hidden");

    extraQuestions.classList.remove("hidden");

    ytdOtRead.removeAttribute("readonly");

    ytdOtRecent.removeAttribute("readonly");

    ytdOtPrev.removeAttribute("readonly");

    ytdCommissionRead.removeAttribute("readonly");

    ytdCommissionRecent.removeAttribute("readonly");

    ytdCommissionPrev.removeAttribute("readonly");

    ytdTipRead.removeAttribute("readonly");

    ytdTipRecent.removeAttribute("readonly");

    ytdTipPrev.removeAttribute("readonly");

  } else {

    paystubCalculator.classList.add("hidden");

    wvoeCalculator.classList.add("hidden");

    twoYear.classList.add("hidden");

    extraQuestions.classList.add("hidden");

  }

}

 

function ot__appear() {

  otSection.classList.toggle("hidden");

  ytdOT.classList.toggle("hidden");

}

function commission__appear() {

  commissionSection.classList.toggle("hidden");

  ytdCommission.classList.toggle("hidden");

}

function tip__appear() {

  tipSection.classList.toggle("hidden");

  ytdTip.classList.toggle("hidden");

}

function positive__appear() {

  var dateI1 = document.getElementById("varStartDate").value;

  var dateI2 = document.getElementById("varPayDate").value;

  var date1 = new Date(dateI1);

  var date2 = new Date(dateI2);

  var time_difference = date2.getTime() - date1.getTime();

  var varResultPositive = Number(time_difference) / (1000 * 60 * 60 * 24);

 

  if (Number(varResultPositive) > 364 && Number(varResultPositive) < 730) {

    positiveFactors.classList.remove("hidden");

  } else {

    positiveFactors.classList.add("hidden");

  }

}

function bonus__question() {

  bonusQuestion.classList.toggle("hidden");

}

function clearAll() {

  qualBasePaystub.innerText = "";

  qualBaseWVOE.innerText = "";

  qualOt.innerText = "";

  qualComm.innerText = "";

  qualTip.innerText = "";

  varTotalResult.innerText = "";

}

 

// Schedule C

const schedcAdd = document.getElementById("cmilesadd");

const schedcAdd2 = document.getElementById("cmilesadd2");

const schedcProfit = document.getElementById("cprofit");

const schedcProfit2 = document.getElementById("cprofit2");

const schedcDepletion = document.getElementById("cdepletion");

const schedcDepletion2 = document.getElementById("cdepletion2");

const schedcDepreciation = document.getElementById("cdepreciation");

const schedcDepreciation2 = document.getElementById("cdepreciation2");

const schedcMeals = document.getElementById("cmeals");

const schedcMeals2 = document.getElementById("cmeals2");

const schedcUse = document.getElementById("cuse");

const schedcUse2 = document.getElementById("cuse2");

const schedcMiles = document.getElementById("cmiles");

const schedcMiles2 = document.getElementById("cmiles2");

const schedcAmortization = document.getElementById("camortization");

const schedcAmortization2 = document.getElementById("camortization2");

const calcBtn = document.getElementById("ccalc");

const result = document.getElementById("cresult");

 

calcBtn.addEventListener("click", () => {

  if (schedcAdd.value === "2022") {

    var schedcRate = "0.26";

  } else if (schedcAdd.value === "2021") {

    var schedcRate = "0.26";

  } else if (schedcAdd.value === "2020") {

    var schedcRate = "0.27";

  } else if (schedcAdd.value === "2019") {

    var schedcRate = "0.26";

  } else if (schedcAdd.value === "2018") {

    var schedcRate = "0.25";

  }

  if (schedcAdd2.value === "2022") {

    var prevschedcRate = "0.26";

  } else if (schedcAdd2.value === "2021") {

    var prevschedcRate = "0.26";

  } else if (schedcAdd2.value === "2020") {

    var prevschedcRate = "0.27";

  } else if (schedcAdd2.value === "2019") {

    var prevschedcRate = "0.26";

  } else if (schedcAdd2.value === "2018") {

    var prevschedcRate = "0.25";

  }

  if (schedcBtn.value === "2 Years") {

    var milesAdd = schedcRate * schedcMiles.value;

    var prevmilesAdd = prevschedcRate * schedcMiles2.value;

    var recentResult =

      Number(schedcProfit.value) +

      Number(schedcDepletion.value) +

      Number(schedcDepreciation.value) +

      Number(schedcUse.value) +

      Number(schedcAmortization.value) +

      milesAdd -

      Number(schedcMeals.value);

    var prevResult =

      Number(schedcProfit2.value) +

      Number(schedcDepletion2.value) +

      Number(schedcDepreciation2.value) +

      Number(schedcUse2.value) +

      Number(schedcAmortization2.value) +

      prevmilesAdd -

      Number(schedcMeals2.value);

  } else {

    var milesAdd = schedcRate * schedcMiles.value;

    var recentResult =

      Number(schedcProfit.value) +

      Number(schedcDepletion.value) +

      Number(schedcDepreciation.value) +

      Number(schedcUse.value) +

      Number(schedcAmortization.value) +

      milesAdd -

      Number(schedcMeals.value);

  }

  if (schedcBtn.value === "2 Years" && recentResult > prevResult) {

    var schedcResult = ((recentResult + prevResult) / Number(24)).toFixed(2);

  } else if (schedcBtn.value === "2 Years" && recentResult < prevResult) {

    var schedcResult = (recentResult / Number(12)).toFixed(2);

  } else if (schedcBtn.value === "1 Year") {

    var schedcResult = (recentResult / Number(12)).toFixed(2);

  }

  result.innerText = "$" + schedcResult + "/Month";

});

 

// 1120S

const schedeownPerc = document.getElementById("schedepercent");

const schedeownPerc2 = document.getElementById("schedepercent2");

const schedeW2 = document.getElementById("schedew2");

const schedeW22 = document.getElementById("schedew22");

const schedeK1 = document.getElementById("schedek1");

const schedeK12 = document.getElementById("schedek12");

const schedeNoi = document.getElementById("schedenoi");

const schedeNoi2 = document.getElementById("schedenoi2");

const schedeDepreciation = document.getElementById("schededepreciation");

const schedeDepreciation2 = document.getElementById("schededepreciation2");

const schedeDepletion = document.getElementById("schededepletion");

const schedeDepletion2 = document.getElementById("schededepletion2");

const schedeNotes = document.getElementById("schedenotes");

const schedeNotes2 = document.getElementById("schedenotes2");

const schedeTravel = document.getElementById("schedetravel");

const schedeTravel2 = document.getElementById("schedetravel2");

const schedeAmort = document.getElementById("schedeamort");

const schedeAmort2 = document.getElementById("schedeamort2");

const schedecalc = document.getElementById("schedecalc");

const schedeResults = document.getElementById("schedeResult");

 

schedecalc.addEventListener("click", () => {

  var schederecentResult =

    Number(schedeW2.value) +

    Number(schedek1.value) +

    (Number(schedeDepreciation.value) +

      Number(schedeDepletion.value) +

      Number(schedeAmort.value) -

      Number(schedeNoi.value) -

      Number(schedeNotes.value) -

      Number(schedeTravel.value)) *

      (Number(schedeownPerc.value) / Number(100));

  var schedeprevResult =

    Number(schedeW22.value) +

    Number(schedek12.value) +

    (Number(schedeDepreciation2.value) +

      Number(schedeDepletion2.value) +

      Number(schedeAmort2.value) -

      Number(schedeNoi2.value) -

      Number(schedeNotes2.value) -

      Number(schedeTravel2.value)) *

      (Number(schedeownPerc2.value) / Number(100));

 

  if (schedeownPerc.value > 100 || schedeownPerc.value < 1) {

    alert(

      "Please enter a number between 1 and 100 in percentage of ownership box of most recent year!"

    );

  } else if (

    (schedeBtn.value === "2 Years" && schedeownPerc2.value > 100) ||

    (schedeBtn.value === "2 Years" && schedeownPerc2.value < 1)

  ) {

    alert(

      "Please enter a number between 1 and 100 in percentage of ownership box of previous year!"

    );

  } else {

    if (

      schedeBtn.value === "2 Years" &&

      schederecentResult > schedeprevResult

    ) {

      var schedeResult = (

        (schederecentResult + schedeprevResult) /

        Number(24)

      ).toFixed(2);

    } else if (

      schedeBtn.value === "2 Years" &&

      schederecentResult < schedeprevResult

   ) {

      var schedeResult = (schederecentResult / Number(12)).toFixed(2);

    } else if (schedeBtn.value === "1 Year") {

      var schedeResult = (schederecentResult / Number(12)).toFixed(2);

    }

    schedeResults.innerText = "$" + schedeResult + "/Month";

  }

});

//  1065 Calculations

const scheduleepercent = document.getElementById("scheduleepercent");

const scheduleew2 = document.getElementById("scheduleew2");

const scheduleek1 = document.getElementById("scheduleek1");

const scheduleenoi = document.getElementById("scheduleenoi");

const scheduleeooi = document.getElementById("scheduleeooi");

const scheduleedepreciation = document.getElementById("scheduleedepreciation");

const scheduleedepletion = document.getElementById("scheduleedepletion");

const scheduleenotes = document.getElementById("scheduleenotes");

const scheduleetravel = document.getElementById("scheduleetravel");

const scheduleeamort = document.getElementById("scheduleeamort");

const scheduleepercent2 = document.getElementById("scheduleepercent2");

const scheduleew22 = document.getElementById("scheduleew22");

const scheduleek12 = document.getElementById("scheduleek12");

const scheduleenoi2 = document.getElementById("scheduleenoi2");

const scheduleeooi2 = document.getElementById("scheduleeooi2");

const scheduleedepreciation2 = document.getElementById(

  "scheduleedepreciation2"

);

const scheduleedepletion2 = document.getElementById("scheduleedepletion2");

const scheduleenotes2 = document.getElementById("scheduleenotes2");

const scheduleetravel2 = document.getElementById("scheduleetravel2");

const scheduleeamort2 = document.getElementById("scheduleeamort2");

const scheduleecalc = document.getElementById("scheduleecalc");

const scheduleeResults = document.getElementById("scheduleeResult");

 

scheduleecalc.addEventListener("click", () => {

  var scheduleeRecentResult =

    Number(scheduleew2.value) +

    Number(scheduleek1.value) +

    (Number(scheduleedepreciation.value) +

      Number(scheduleedepletion.value) +

      Number(scheduleeamort.value) -

      Number(scheduleeooi.value) -

      Number(scheduleenoi.value) -

      Number(scheduleenotes.value) -

      Number(scheduleetravel.value)) *

      (Number(scheduleepercent.value) / Number(100));

  var scheduleePrevResult =

    Number(scheduleew22.value) +

    Number(scheduleek12.value) +

    (Number(scheduleedepreciation2.value) +

      Number(scheduleedepletion2.value) +

      Number(scheduleeamort2.value) -

      Number(scheduleeooi2.value) -

      Number(scheduleenoi2.value) -

      Number(scheduleenotes2.value) -

      Number(scheduleetravel2.value)) *

      (Number(scheduleepercent2.value) / Number(100));

 

  if (scheduleepercent.value > 100 || scheduleepercent.value < 1) {

    alert(

      "Please enter a number between 1 and 100 in percentage of ownership box of most recent year!"

    );

  } else if (

    (scheduleeBtn.value === "2 Years" && scheduleepercent2.value > 100) ||

    (scheduleeBtn.value === "2 Years" && scheduleepercent2.value < 1)

  ) {

    alert(

      "Please enter a number between 1 and 100 in percentage of ownership box of previous year!"

    );

  } else {

    if (

      scheduleeBtn.value === "2 Years" &&

      scheduleeRecentResult > scheduleePrevResult

    ) {

      var scheduleeResult = (

        (scheduleeRecentResult + scheduleePrevResult) /

        Number(24)

      ).toFixed(2);

    } else if (

      scheduleeBtn.value === "2 Years" &&

      scheduleeRecentResult < scheduleePrevResult

    ) {

      var scheduleeResult = (scheduleeRecentResult / Number(12)).toFixed(2);

    } else if (scheduleeBtn.value === "1 Year") {

      var scheduleeResult = (scheduleeRecentResult / Number(12)).toFixed(2);

    }

    scheduleeResults.innerText = "$" + scheduleeResult + "/Month";

  }

});

 

// 1120 Corporate Calculation

const corppercent = document.getElementById("corppercent");

const corpw2 = document.getElementById("corpw2");

const corpnrg = document.getElementById("corpnrg");

const corpnri = document.getElementById("corpnri");

const corpdepreciation = document.getElementById("corpdepreciation");

const corpdepletion = document.getElementById("corpdepletion");

const corpol = document.getElementById("corpol");

const corptil = document.getElementById("corptil");

const corptt = document.getElementById("corptt");

const corpmn = document.getElementById("corpmn");

const corptravel = document.getElementById("corptravel");

const corpam = document.getElementById("corpam");

const corppercent2 = document.getElementById("corppercent2");

const corpw22 = document.getElementById("corpw22");

const corpnrg2 = document.getElementById("corpnrg2");

const corpnri2 = document.getElementById("corpnri2");

const corpdepreciation2 = document.getElementById("corpdepreciation2");

const corpdepletion2 = document.getElementById("corpdepletion2");

const corpol2 = document.getElementById("corpol2");

const corptil2 = document.getElementById("corptil2");

const corptt2 = document.getElementById("corptt2");

const corpmn2 = document.getElementById("corpmn2");

const corptravel2 = document.getElementById("corptravel2");

const corpam2 = document.getElementById("corpam2");

const corpcalc = document.getElementById("corpcalc");

const corpresult = document.getElementById("corpresult");

 

corpcalc.addEventListener("click", () => {

  var corpRecentCalc =

    Number(corpw2.value) +

    (Number(corpdepreciation.value) +

      Number(corpdepletion.value) +

      Number(corptil.value) +

      Number(corpam.value) +

      Number(corpol.value) -

      Number(corpnrg.value) -

      Number(corpnri.value) -

      Number(corptt.value) -

      Number(corpmn.value) -

      Number(corptravel.value)) *

      (Number(corppercent.value) / Number(100));

  var corpPrevCalc =

    Number(corpw22.value) +

    (Number(corpdepreciation2.value) +

      Number(corpdepletion2.value) +

      Number(corptil2.value) +

      Number(corpam2.value) +

      Number(corpol2.value) -

      Number(corpnrg2.value) -

      Number(corpnri2.value) -

      Number(corptt2.value) -

      Number(corpmn2.value) -

      Number(corptravel2.value)) *

      (Number(corppercent2.value) / Number(100));

 

  if (corppercent.value < 1 || corppercent.value > 100) {

    alert("Please enter valid ownership percentage in most recent year");

  } else if (

    (corpBtn.value === "2 Years" && corppercent2.value < 1) ||

    corppercent2.value > 100

  ) {

    alert("Please enter a valid ownership percentage in previous year");

  } else {

    if (corpBtn.value === "2 Years" && corpRecentCalc > corpPrevCalc) {

      var corpResults = ((corpRecentCalc + corpPrevCalc) / Number(24)).toFixed(

        2

      );

    } else if (corpBtn.value === "2 Years" && corpRecentCalc < corpPrevCalc) {

      var corpResults = (corpRecentCalc / Number(12)).toFixed(2);

    } else if (corpBtn.value === "1 Year") {

      var corpResults = (corpRecentCalc / Number(12)).toFixed(2);

    }

  }

  console.log(corpResults);

});

// Rental Income

const rentalLease = document.getElementById("rentallease");

const rentalRent = document.getElementById("rentalgrossrent");

const rentalExpenses = document.getElementById("rentalexpenses");

const rentalInsurance = document.getElementById("rentalinsurance");

const rentalInterest = document.getElementById("rentalinterest");

const rentalTaxes = document.getElementById("rentaltaxes");

const rentalDepreciation = document.getElementById("rentaldepreciation");

const rentalAmort = document.getElementById("rentalamort");

const rentalHoa = document.getElementById("rentalhoa");

const rentalPercent = document.getElementById("rentalpercent");

const annualTotal = document.getElementById("annualtotal");

const rentalMonths = document.getElementById("rentalmonths");

const rentalMonthlyIncome = document.getElementById("rentalmonthlyincome");

const rentalPitia = document.getElementById("rentalpitia");

const netRental = document.getElementById("net_rental");

 

function disable() {

  if (rentalLease.value > 0) {

    rentalRent.disabled = true;

    rentalExpenses.disabled = true;

    rentalInsurance.disabled = true;

    rentalInterest.disabled = true;

    rentalTaxes.disabled = true;

    rentalDepreciation.disabled = true;

    rentalAmort.disabled = true;

    rentalHoa.disabled = true;

    rentalPercent.disabled = true;

    annualTotal.disabled = true;

    rentalMonths.disabled = true;

    rentalMonthlyIncome.disabled = true;

    netRental.disabled = true;

  } else {

    rentalRent.disabled = false;

    rentalExpenses.disabled = false;

    rentalInsurance.disabled = false;

    rentalInterest.disabled = false;

    rentalTaxes.disabled = false;

    rentalDepreciation.disabled = false;

    rentalAmort.disabled = false;

    rentalHoa.disabled = false;

    rentalPercent.disabled = false;

    annualTotal.disabled = false;

    rentalMonths.disabled = false;

    rentalMonthlyIncome.disabled = false;

    netRental.disabled = false;

  }

}

function disablelease() {

  if (rentalRent.value > 0) {

    rentalLease.disabled = true;

  } else {

    rentalLease.disabled = false;

  }

}

 

rentalcalc.addEventListener("click", () => {

  if (rentalLease.value > 0) {

    var netMonthly = rentalLease.value - rentalPitia.value;

    if (netMonthly >= 0) {

      netRental.innerText = "$" + netMonthly + "/Month Net Rental Income";

    } else if (netMonthly < 0) {

      netRental.innerText = "$" + netMonthly + "/Month Net Rental Loss";

    }

  } else {

    var annual =

      (Number(rentalRent.value) -

        Number(rentalExpenses.value) +

        Number(rentalInsurance.value) +

        Number(rentalInterest.value) +

        Number(rentalTaxes.value) +

        Number(rentalDepreciation.value) +

        Number(rentalAmort.value) +

        Number(rentalHoa.value)) *

      (Number(rentalPercent.value) / Number(100));

    annualTotal.innerText = "$" + annual + "/Year";

    var monthly = (annual / rentalMonths.value).toFixed(2);

    rentalMonthlyIncome.innerText = "$" + monthly + "/Month";

    var netMonthly = (monthly - rentalPitia.value).toFixed(2);

    if (netMonthly >= 0) {

      netRental.innerText = "$" + netMonthly + "/Month Net Rental Income";

    } else if (netMonthly < 0) {

      netRental.innerText = "$" + netMonthly + "/Month Net Rental Loss";

    }

  }

});