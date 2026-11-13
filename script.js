
// ==============================
// THEME SWITCHER
// ==============================

const themeButton = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

function updateThemeButton() {
    if (!themeButton) return;

    themeButton.textContent =
        document.body.classList.contains("light-mode")
        ? "🌙 Dark Mode"
        : "☀️ Light Mode";
}

updateThemeButton();

if (themeButton) {
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        const currentTheme =
            document.body.classList.contains("light-mode")
            ? "light"
            : "dark";

        localStorage.setItem("portfolio-theme", currentTheme);

        updateThemeButton();
    });
}


// ==============================
// SCROLL ANIMATIONS
// ==============================

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
