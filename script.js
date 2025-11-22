// Smooth scroll for navbar
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ----------------------------------------------------
// BOOKING FORM SUBMISSION (WITH CUSTOM SUCCESS MESSAGE)
// ----------------------------------------------------

// Get the form and the success message elements
const form = document.getElementById('bookingForm');
const successMessage = document.getElementById('successMessage');

// Check if both elements exist before adding the listener
if (form && successMessage) {
    form.addEventListener('submit', function(event) {
        // 1. STOP the default browser submission (most critical step)
        event.preventDefault(); 

        // 2. Hide the form and reset fields
        form.style.display = 'none';
        
        // Optional: Reset form after a brief delay if you want to capture inputs first
        form.reset(); 

        // 3. Show the success message
        // The 'visible' class in CSS handles the styling and opacity transition
        successMessage.classList.add('visible');
        
        // 4. Set a timer to hide the message and show the form again after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('visible');
            // Restore the form display property (assuming it was 'flex' for centering)
            form.style.display = 'flex'; 
        }, 5000); 

    });
} else {
    // This will print an error in the browser console if the IDs are wrong
    console.error("Booking elements not found! Check IDs: bookingForm and successMessage in HTML.");
}