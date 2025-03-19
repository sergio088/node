document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".button-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const info = btn.parentElement.nextElementSibling;
            info.style.display = info.style.display === "block" ? "none" : "block";
        });
    });
});