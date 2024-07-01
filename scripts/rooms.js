// Dummy data for available rooms
const roomsData = [
  { type: "Single", price: "Rs.1000/month" },
  { type: "Double", price: "Rs.500/month" },
  { type: "Triple", price: "Rs.250/month" }
];

// Function to display available rooms
function displayRooms() {
  const roomsContainer = document.getElementById("rooms");
  roomsContainer.innerHTML = ""; // Clear previous content
  roomsData.forEach(room => {
      const roomDiv = document.createElement("div");
      roomDiv.innerHTML = `<div class="room-card"><p>Type: ${room.type}</p><p>Price: ${room.price}</p><button onclick="bookRoom('${room.type}')">Book</button></div>`;
      roomsContainer.appendChild(roomDiv);
  });
}

// Event listener to display rooms when the page loads
window.addEventListener("load", function() {
  displayRooms();
});

// Function to handle room booking
function bookRoom(roomType) {
  // Redirect to student details page with room type in URL query parameter
  window.location.href = `../../pages/students/student.html?room=${roomType}`;
}


