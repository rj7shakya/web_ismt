var figlet = require("figlet");

figlet("RAJAD", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

const { add, mul } = require("./math");

console.log(add(2, 3));
console.log(mul(2, 3));

// import check module
// posneg(2) => positive
// posneg(0) => zero
// posneg(-2) => negative

// cube (3) => 27
// cube (2) => 8
