const rates = {
  USD: 1,
  EUR: 0.95,
  JPY: 135,
};

function convert(amount, from, to) {
  const convertedAmount = (amount * rates[to]) / rates[from];
  return convertedAmount.toFixed(2);
}

// Example usage:
const result1 = convert(100, "USD", "EUR"); // Converts 100 USD to EUR
const result2 = convert(50, "EUR", "JPY"); // Converts 50 EUR to JPY
const result3 = convert(2000, "JPY", "USD"); // Converts 2000 JPY to USD

console.log(result1); // Output: 95.00
console.log(result2); // Output: 6750.00
console.log(result3); //
