document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const confirmation = document.getElementById("confirmation");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        alert("Будь ласка, заповніть усі поля.");
        return;
      }
  
      // Збереження у localStorage
      const messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
      messages.push({ name, email, message, time: new Date().toISOString() });
      localStorage.setItem("contactMessages", JSON.stringify(messages));
  
      // Очистка форми та повідомлення
      form.reset();
      confirmation.style.display = "block";
  
      setTimeout(() => {
        confirmation.style.display = "none";
      }, 4000);
    });
  });
  