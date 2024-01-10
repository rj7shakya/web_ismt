// var figlet = require("figlet");

// figlet("RAJAD", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

const { add, mul } = require("./math");

console.log(add(2, 3));
console.log(mul(2, 3));
