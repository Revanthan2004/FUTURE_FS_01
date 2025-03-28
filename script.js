document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name && email && message) {
            formMessage.textContent = `Thank you, ${name}! I will get back to you soon.`;
            formMessage.style.color = "#00ff00";
            form.reset();
        } else {
            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.color = "#ff0000";
        }
    });
});
