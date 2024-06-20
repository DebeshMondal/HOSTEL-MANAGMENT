// Dummy authentication function
function authenticate(username, password) {
  // Replace this with your actual authentication logic
  return username === "admin" && password === "p";
}

// Event listener for login form submission
document.getElementById("loginForm").addEventListener("submit", function(event){
  event.preventDefault(); // Prevent form submission

  // Retrieve username and password
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Dummy authentication (replace with actual authentication logic)
  if(authenticate(username, password)) {
      // Redirect to rooms page on successful login
      window.location.href = "./pages/rooms/rooms.html";
  } else {
      alert("Invalid username or password. Please try again.");
  }
});
