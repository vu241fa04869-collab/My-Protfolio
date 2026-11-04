const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});

const roles = [
    "Web Developer",
    "Student Developer",
    "Creative Learner"
];

const typedRole = document.getElementById("typedRole");

let roleIndex = 0;

setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    typedRole.textContent = roles[roleIndex];
}, 2500);


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const formNote = document.getElementById("formNote");

    if (!name || !email || !message) {
        formNote.textContent = "Please fill in all fields.";
        return;
    }

    const recipient = "your.email@example.com";

    const subject = encodeURIComponent(
        "Portfolio Message from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href =
        `mailto:${recipient}?subject=${subject}&body=${body}`;

    formNote.textContent =
        "Your email application should open. Press Send to send your message.";
});

document.getElementById("year").textContent =
    new Date().getFullYear();
