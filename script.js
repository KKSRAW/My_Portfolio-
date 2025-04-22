// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
  
  // Toast Notification
  function showToast(message, duration = 3000) {
    const toast = document.createElement("div");
    toast.textContent = message;
    Object.assign(toast.style, {
      position: "fixed", bottom: "30px", right: "30px",
      background: "#2563eb", color: "white", padding: "12px 20px",
      borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      zIndex: 10000, opacity: 0, transition: "opacity 0.5s ease"
    });
    document.body.appendChild(toast);
    requestAnimationFrame(() => (toast.style.opacity = 1));
    setTimeout(() => {
      toast.style.opacity = 0;
      setTimeout(() => toast.remove(), 500);
    }, duration);
  }
  
  // Contact form
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name && email && message) {
      showToast(`Thanks, ${name}! We'll reach out soon.`);
      this.reset();
    } else {
      showToast("Please fill in all fields.", 4000);
    }
  });
  
  // Sign In Modal
  const signInModal = document.getElementById("signInModal");
  const signInBtn = document.getElementById("signInBtn");
  const closeBtn = document.querySelector(".closeBtn");
  const signInForm = document.getElementById("signInForm");
  
  signInBtn.addEventListener("click", () => {
    signInModal.style.display = "flex";
  });
  
  closeBtn.addEventListener("click", () => {
    signInModal.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === signInModal) {
      signInModal.style.display = "none";
    }
  });
  
  signInForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username === "kalpesh" && password === "1234") {
      showToast("Welcome back, Kalpesh!");
      setTimeout(() => {
        signInModal.style.display = "none";
        signInForm.reset();
      }, 1000);
    } else {
      showToast("Invalid credentials. Hint: 'kalpesh' & '1234'", 4000);
    }
  });
  
  // Scroll Progress
  window.addEventListener("scroll", () => {
    const scrollProgress = document.getElementById("scrollProgress");
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
  });
  
  // Dark Mode Toggle
  const toggleBtn = document.getElementById("darkModeToggle");
  
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
    showToast(isDark ? "Dark Mode Activated" : "Light Mode Activated");
  });
  