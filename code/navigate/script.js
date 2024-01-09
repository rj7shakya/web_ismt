const loginForm = document.getElementById("login-form");
const loginPage = document.getElementById("login-page");
const dashboard = document.getElementById("dashboard");
const logoutButton = document.getElementById("logout-button");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  // Simulate login logic (replace with actual authentication here)
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "user" && password === "password") {
    loginPage.style.display = "none";
    dashboard.style.display = "block";
  } else {
    alert("Invalid username or password");
  }
});

logoutButton.addEventListener("click", () => {
  dashboard.style.display = "none";
  loginPage.style.display = "block";
});
