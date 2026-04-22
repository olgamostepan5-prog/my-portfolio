// PROJECT TOGGLE
const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const details = button.nextElementSibling;

        if (!details) return;

        details.classList.toggle("hidden");

        button.textContent =
            details.classList.contains("hidden")
                ? "Show Details"
                : "Hide Details";
    });
});


// FORM VALIDATION
const form = document.getElementById("contact-form");
const errorMsg = document.getElementById("error-msg");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            errorMsg.textContent = "All fields are required.";
            return;
        }

        if (!validateEmail(email)) {
            errorMsg.textContent = "Invalid email.";
            return;
        }

        errorMsg.textContent = "Form submitted!";
        form.reset();
    });
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}