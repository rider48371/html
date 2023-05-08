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

 

const twoYear = document.querySelector(".twoyear__form");

const twoYear__btn = document.querySelector(".twoyear__btn");

 

twoYear__btn.addEventListener("click", () => {

  const visibility = twoYear.getAttribute("data-visible");

 

  if (visibility === "false") {

    twoYear.setAttribute("data-visible", "false");

  }

});

 

scheduleeTwoYear__btn.addEventListener("click", () => {

  if (scheduleeTwoYear__btn.value === "1 Year") {

    schedeTwoYear__btn.value = "2 Years";

  } else {

    scheduleeTwoYear__btn.value = "1 Year";

  }

});

 

const corpTwoYear = document.querySelector(".corptwoyear__form");

const corpTwoYear__btn = document.querySelector(".corptwoyear__btn");

 

corpTwoYear__btn.addEventListener("click", () => {

  const visibility = corpTwoYear.getAttribute("data-visible");

 

  if (visibility === "false") {

    corpTwoYear.setAttribute("data-visible", "true");

  } else if (visibility === "true") {

    corpTwoYear.setAttribute("data-visible", "false");

  }

});

 

corpTwoYear__btn.addEventListener("click", () => {

  if (corpTwoYear__btn.value === "1 Year") {

    corpTwoYear__btn.value = "2 Years";

  } else {

    corpTwoYear__btn.value = "1 Year";

  }

});