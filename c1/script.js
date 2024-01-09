// let ptag = document.querySelector(".test2");

// ptag.textContent = "Magic";
// ptag.style.color = "red";

// ptag.addEventListener("click", () => {
//   alert("You Clicked Magic!!");
// });

// console.log(ptag);

// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   alert("Clicked!!");
// });

let boxObj = document.querySelector("#box");

console.log();
boxObj.addEventListener("click", () => {
  boxObj.style.backgroundColor =
    boxObj.style.backgroundColor == "blue" ? "red" : "blue";
});
