// JavaScript for Portfolio Website
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = { name, email, message };

    try {
        const response = await fetch('http://localhost:3000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Your message has been submitted!');
            document.getElementById('contact-form').reset();
        } else {
            alert('There was an error submitting your message.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to connect to the server.');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simple validation
        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Simulate sending the form data (replace this with actual backend integration)
        alert(`Thank you, ${name}! Your message has been sent successfully.`);

        // Reset the form
        contactForm.reset();
    });
});
