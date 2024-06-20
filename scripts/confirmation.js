// Function to retrieve query parameters from URL
function getQueryParameter(parameterName) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(parameterName);
}

// Function to display confirmation details
function displayConfirmationDetails() {
    const name = getQueryParameter("name");
    const fatherName = getQueryParameter("fatherName");
    const motherName = getQueryParameter("motherName");
    const phoneNumber = getQueryParameter("phoneNumber");
    const email = getQueryParameter("email");
    const address = getQueryParameter("address");
    const roomType = getQueryParameter("room");

    const confirmationDetailsDiv = document.getElementById("confirmationDetails");
    confirmationDetailsDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Father's Name:</strong> ${fatherName}</p>
        <p><strong>Mother's Name:</strong> ${motherName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Room Type:</strong> ${roomType}</p>
    `;
}

// Event listener to display confirmation details when the page loads
window.addEventListener("load", function() {
    displayConfirmationDetails();
});
