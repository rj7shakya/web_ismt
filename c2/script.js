let btn = document.querySelector("button");
let input = document.querySelector("#price");

let fromCurreny = document.querySelector("#fromCurrency");
let toCurrency = document.querySelector("#toCurrency");

let op = document.querySelector(".output");

// const rates = {
//   USD: 1,
//   EUR: 0.95,
// };

function onClick(e) {
  if (input.value.length === 0) {
    alert("value is empty");
  } else {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((res) => {
        let rates = res.rates;
        output =
          (input.value * rates[toCurrency.value]) / rates[fromCurreny.value];
        op.textContent = output;
      })
      .catch((err) => console.log(err));

    e.preventDefault();
    // alert(output);
  }
}

btn.addEventListener("click", onClick);
