document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".theme-toggle");
    const body = document.body;
  
    // Перевірка, чи є збережена тема
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
    }
  
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isDark = body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  });