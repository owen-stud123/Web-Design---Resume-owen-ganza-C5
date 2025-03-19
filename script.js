document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            let formMessage = document.getElementById("form-message");
            if (!formMessage) {
                formMessage = document.createElement("div");
                formMessage.id = "form-message";
                contactForm.appendChild(formMessage);
            }

            if (name === "" || email === "" || message === "") {
                formMessage.innerText = "Please fill out all fields.";
                formMessage.style.color = "red";
            } else {
                formMessage.innerText = "Message sent successfully!";
                formMessage.style.color = "green";
                contactForm.reset();
            }
        });
    }
});
