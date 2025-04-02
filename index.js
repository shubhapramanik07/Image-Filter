
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs li");
    const images = document.querySelectorAll(".menu_images .images");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const category = tab.getAttribute("data-category");

            images.forEach(image => {
                image.style.display = (category === "all" || image.getAttribute("data-category") === category) ? "block" : "none";
            });
        });
    });
});
