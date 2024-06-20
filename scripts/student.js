// Function to retrieve query parameters from URL
function getQueryParameter(parameterName) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(parameterName);
}

// Function to display room type in the form
function displayRoomType() {
  const roomType = getQueryParameter("room");
  if (roomType) {
      document.getElementById("roomType").textContent = roomType;
  }
}

// Event listener to display room type when the page loads
window.addEventListener("load", function() {
  displayRoomType();
});

// Event listener for student details form submission
document.getElementById("studentDetails").addEventListener("submit", function(event){
  event.preventDefault(); // Prevent form submission

  // Retrieve student details
  const name = document.getElementById("name").value;
  const fatherName = document.getElementById("fatherName").value;
  const motherName = document.getElementById("motherName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const roomType = getQueryParameter("room");

  // Redirect to confirmation page with student details and room type in URL query parameter
  window.location.href = `confirmation.html?name=${name}&fatherName=${fatherName}&motherName=${motherName}&phoneNumber=${phoneNumber}&email=${email}&address=${address}&room=${roomType}`;
});
