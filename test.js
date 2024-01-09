// let a = 100;

// write a program to declare a variable
// called percent
// print distinction if percent between 80 to 100
// print first division if percent between 50 to 80
// print pass if percent between 32 to 50
// else print fail

// let p = 88;
// if (p >= 80 && p <= 100) {
//   console.log("dis");
// } else if (p >= 50 && p <= 80) {
//   console.log("first");
// } else if (p >= 32 && p <= 50) {
//   console.log("pass");
// } else {
//   console.log("fail");
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// 2,4,6,8,10,12
// for (let i = 2; i <= 12; i += 2) {
//   console.log(i);
// }

// functions, arrow function, map , filter
// def fxn():
//   return

// function add(a, b) {
//   console.log("sum =", a + b);
// }

// add(3, 4);

// write a function that accepts two parameters and print their product.
// function product(a, b) {
//   console.log(a * b);
// }
// let product = (a, b) => {
//   console.log(a * b);
// };

// let product = (a, b) => {
//   return a * b;
// };

// let product = (a, b) => a * b;
// let sum = (a, b) => a + b;

//create sum function using arrow function

// let res = product(4, 5);

// console.log(sum(3, 4));

// create a arrow function (isEven) that returns
// true if number is even
// false if number is odd
// let isEven = (n) => {
//   if (n % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// let isEven = (n) => {
//   return  n % 2 == 0
// };

// let isEven = (n) => n %2 ==0;

// console.log(isEven(4));
// console.log(isEven(3));

// write a arrow function to takes a number as parameter
// and return double of that number
// let doubleFxn = (n) => n*2;

// function func() {
//   if (1 < 3) {
//     let color = "red";
//   }
//   console.log("color =>", color);
// }
// func();

// arrays and objects

// arrays
let arr = [1, 2, 3, "asd", true];

// console.log(arr[3]);

// object
// let obj = {
//   name: "rj",
//   address: "ktm",
// };
// console.log(obj.name);
// console.log(obj["address"]);

// let obj2 = {
//   college_id: 1,
//   college_name: "ISMT",
// };

// console.log(obj2.college_name);
// console.log(obj2["college_name"]);

// array of objects
let movies = [
  { id: 1, name: "KGF", rating: 3 },
  { id: 3, name: "IronMan", rating: 9 },
];

// console.log(movies[0].name, "-", movies[0].rating, );

let places = [
  { id: 1, name: "Pokhara", features: ["lake", "food"] },
  { id: 1, name: "Patan", features: ["food", "city"] },
];

for (let i = 0; i < places.length; i++) {
  console.log(places[i].name, places[i].features[0], places[i].features[1]);
}

// let a = 12 >2 ? 'yess':'noo'

let a = 12 > 2 ?? "test";
