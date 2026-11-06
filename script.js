
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

// Mobile sidebar navigation
menuToggle.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

// Close sidebar after clicking a menu item
document.querySelectorAll(".side-link").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Close sidebar when clicking outside
document.addEventListener("click", event => {
  if (
    window.innerWidth <= 760 &&
    sidebar.classList.contains("open") &&
    !sidebar.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    sidebar.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

// Active sidebar menu item
document.querySelectorAll(".side-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".side-link").forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});

// Dark and light theme toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☾" : "☼";
});

// Automatically display current year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Contact form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const formNote = document.getElementById("formNote");

  if (!name || !email || !message) {
    formNote.textContent = "Please fill in all fields.";
    return;
  }

  // Replace with your actual email address
  const recipient = "your.email@example.com";

  const subject = encodeURIComponent(
    "Portfolio message from " + name
  );

  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href =
    `mailto:${recipient}?subject=${subject}&body=${body}`;

  formNote.textContent =
    "Your email application should open. Press Send to send your message.";
});
