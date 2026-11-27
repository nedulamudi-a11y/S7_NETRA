// Get the appointment form
const form = document.getElementById("appointmentForm");

// Run when the form is submitted
form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get the patient's name
    const name = document.getElementById("patientName").value;

    // Display success message
    document.getElementById("message").textContent =
        "Appointment request submitted successfully for " + name + "!";

    // Clear the form
    form.reset();
});