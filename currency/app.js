const currencyFirstEl = document.getElementById("currency-first");

const inputFirstEl = document.getElementById("input-first");

const currencySecondEl = document.getElementById("currency-second");

const inputSecondEl = document.getElementById("input-second");

const exchange = document.getElementById("exchange");

const key = "a7e3ddc04d24d679870b2ddd";

 

updateRate();

 

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

inputFirstEl.addEventListener("input", updateRate);

 

async function updateRate() {

  fetch(

    `https://v6.exchangerate-api.com/v6/${key}/latest/${currencyFirstEl.value}`

  )

    .then(res => res.json())

    .then(data => {

      const rate = data.conversion_rates[currencySecondEl.value];

      exchange.innerText = `1 ${currencyFirstEl.value} =

       ${rate + " " + currencySecondEl.value}`;

      inputSecondEl.value = (inputFirstEl.value * rate).toFixed(3);

    });

}