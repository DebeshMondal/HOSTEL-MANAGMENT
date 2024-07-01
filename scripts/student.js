// Function to retrieve query parameters from URL
function getQueryParameter(parameterName) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(parameterName);
}

// Function to handle form submission
document.getElementById("studentForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const fatherName = document.getElementById("fatherName").value;
  const motherName = document.getElementById("motherName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const roomType = getQueryParameter("room");

  // Redirect to confirmation page with form data as query parameters
  window.location.href = `../../pages/conformation/confirmation.html?name=${name}&fatherName=${fatherName}&motherName=${motherName}&phoneNumber=${phoneNumber}&email=${email}&address=${address}&room=${roomType}`;
});

// Set the room type in the form when the page loads
window.addEventListener("load", function() {
  const roomType = getQueryParameter("room");
  document.getElementById("roomType").value = roomType;
});
