document.addEventListener("DOMContentLoaded", function() {
    // FAQ Accordion
    document.querySelectorAll(".accordion-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const content = this.nextElementSibling;
            const isOpen = content.style.display === "block";
            content.style.display = isOpen ? "none" : "block";
            this.textContent = isOpen ? this.textContent.replace("-", "+") : this.textContent.replace("+", "-");
        });
    });

    // Welcome Modal (Pops up after 4 seconds)
    const modal = document.getElementById("welcomeModal");
    if(modal) {
        setTimeout(() => { modal.style.display = "block"; }, 4000);
        document.querySelector(".close-modal").addEventListener("click", () => { modal.style.display = "none"; });
    }

    // Lightbox for Gallery Images
    const lightbox = document.getElementById("lightbox");
    if(lightbox) {
        const lightboxImg = document.getElementById("lightbox-img");
        document.querySelectorAll(".lightbox-trigger").forEach(img => {
            img.addEventListener("click", function() {
                lightbox.style.display = "block";
                lightboxImg.src = this.src;
            });
        });
        document.querySelector(".close-lightbox").addEventListener("click", () => { lightbox.style.display = "none"; });
    }
});