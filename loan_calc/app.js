const loanAmount = document.getElementById("loan__amount");

const interestRate = document.getElementById("interest__rate");

const terms = document.getElementById("terms");

const results = document.getElementById("results");

const button = document.getElementById("calculate");

 

button.addEventListener("click", () => {

  let principal = loanAmount.value;

  let interestRateValue = interestRate.value / 100 / Number(12);

  let loanTerms = terms.value;

  let boxOne =

    interestRateValue * Math.pow(Number(1) + interestRateValue, loanTerms);

  let boxTwo = Math.pow(Number(1) + interestRateValue, loanTerms) - 1;

  const monthlyPayment = ((principal * boxOne) / boxTwo).toFixed(2);

 

  results.innerText = monthlyPayment;

  loanAmount.value = "";

  interestRate.value = "";

  terms.value = "";

});