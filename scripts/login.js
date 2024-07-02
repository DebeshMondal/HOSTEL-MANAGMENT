const client = new Appwrite.Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('667e2e33002009642cfd'); // Your project ID

const account = new Appwrite.Account(client);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    account.createEmailSession(email, password)
        .then(response => {
            console.log(response); // Successful login
            // Redirect to the dashboard or perform other actions
            window.location.href = '../index.html'; // Replace with your dashboard URL
        })
        .catch(error => {
            console.error(error); // Handle errors
            alert('Login failed: ' + error.message);
        });
});
