const btn = document.getElementById("calculate");

const bill = document.getElementById("bill");

const tip = document.getElementById("tip");

const totalSpan = document.getElementById("total");

const reset = document.getElementById("reset");

 

function calculateTotal() {

  const billValue = bill.value;

  const tipValue = tip.value;

  const totalValue = billValue * (1 + tipValue / 100);

  totalSpan.innerText = totalValue.toFixed(2);

}

 

function resetTotal() {

  totalSpan.innerText = "0.00";

  bill.value = "";

  tip.value = "";

}

 

btn.addEventListener("click", calculateTotal);

reset.addEventListener("click", resetTotal);