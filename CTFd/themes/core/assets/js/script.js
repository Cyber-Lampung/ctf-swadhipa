```javascript
// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ===============================
// Terminal Typing Effect
// ===============================

const cursor = document.querySelector(".cursor");

setInterval(() => {
    if (!cursor) return;

    cursor.style.opacity =
        cursor.style.opacity === "0"
            ? "1"
            : "0";

}, 500);
```
