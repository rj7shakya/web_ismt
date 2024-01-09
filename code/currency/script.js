const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");

const rates = {
  USD: 1,
  EUR: 0.95, // Example exchange rates
  // Add more currency rates here
};

function convert() {
  const amount = parseFloat(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  const convertedAmount = (amount * rates[to]) / rates[from];
  result.textContent = `${amount} ${from} = ${convertedAmount.toFixed(
    2
  )} ${to}`;
}
