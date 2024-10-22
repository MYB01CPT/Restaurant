// Add an event listener to the form to handle the submite event
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values of the form fields
    // Creating the variables and ggetting access via ID names from HTML page/file
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled 
    if (name && email && message) {
        // if all fields are filled show a success message
        alert('Form submitted successfully!');
    } else {
        // if any field is empty, show an error message
        alert('Please fill in all fields');
    }
});

//https://www.w3schools.com/js/js_intro.asp
//The form validation script in the contact page ensures that all required fields are