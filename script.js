
// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  // ✅ Initialize EmailJS (important)
  emailjs.init("46F5cX1_IaLKHjkOQ"); // your public key

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    console.log("Form submission started");

    // ✅ Send email using EmailJS
    emailjs
      .send("service_8pzdscg", "template_3uso3pm", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          form.reset();
        },
        function (error) {
          console.error("FAILED...", error);
          alert("Failed to send message. Check console for details.");
        }
      );
  });
});
