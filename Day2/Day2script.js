const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");

  errorMsg.textContent = "";
  successMsg.textContent = "";

  if (username === "" || password === "") {
    errorMsg.textContent = "All fields are required!";
    return;
  }

  // Demo login
  if (username === "admin" && password === "1234") {
    successMsg.textContent = "Login successful!";
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
});