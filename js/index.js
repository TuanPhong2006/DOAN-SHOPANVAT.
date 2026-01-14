document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".ads-track");
    const slides = Array.from(document.querySelectorAll(".ads-slide"));
    const dots = document.querySelectorAll(".dot1");

    let index = 1;
    let startX = 0;
    let isDragging = false;
    let autoTimer;

    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    const allSlides = document.querySelectorAll(".ads-slide");
    const total = allSlides.length;

    track.style.transform = `translateX(-100%)`;

    function updateDots(realIndex) {
        dots.forEach(d => d.classList.remove("active"));
        dots[realIndex].classList.add("active");
    }

    function moveSlide() {
        track.style.transition = "transform 0.5s ease";
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    track.addEventListener("transitionend", () => {
        if (index === total - 1) {
            track.style.transition = "none";
            index = 1;
            track.style.transform = `translateX(-100%)`;
        }

        if (index === 0) {
            track.style.transition = "none";
            index = total - 2;
            track.style.transform = `translateX(-${index * 100}%)`;
        }
    });

    function startAuto() {
        autoTimer = setInterval(() => {
            index++;
            moveSlide();
            updateDots((index - 1 + dots.length) % dots.length);
        }, 4000);
    }

    function resetAuto() {
        clearInterval(autoTimer);
        startAuto();
    }

    startAuto();

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            index = i + 1;
            moveSlide();
            updateDots(i);
            resetAuto();
        });
    });

    track.addEventListener("mousedown", e => {
        startX = e.clientX;
        isDragging = true;
        clearInterval(autoTimer);
    });

    window.addEventListener("mouseup", e => {
        if (!isDragging) return;

        const diff = e.clientX - startX;

        if (diff < -80) index++;
        if (diff > 80) index--;

        moveSlide();
        updateDots((index - 1 + dots.length) % dots.length);
        isDragging = false;
        startAuto();
    });

    document.querySelectorAll(".introduce-box").forEach(box => {
        const icon = box.querySelector("i");
        const text = box.querySelector("h3");

        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "#2CB9D9";
            box.style.borderColor = "#2CB9D9";
            icon.style.color = "#ffffff";
            text.style.color = "#ffffff";
        });

        box.addEventListener("mouseleave", () => {
            box.style.backgroundColor = "";
            box.style.borderColor = "";
            icon.style.color = "";
            text.style.color = "";
        });

        box.addEventListener("touchstart", () => {
            box.style.backgroundColor = "#2CB9D9";
            box.style.borderColor = "#2CB9D9";
            icon.style.color = "#ffffff";
            text.style.color = "#ffffff";
        });

        box.addEventListener("touchend", () => {
            box.style.backgroundColor = "";
            box.style.borderColor = "";
            icon.style.color = "";
            text.style.color = "";
        });
    });

    document.querySelectorAll(".introduce-box").forEach(box => {

        // Desktop
        box.addEventListener("mouseenter", () => {
            box.classList.add("active");
        });

        box.addEventListener("mouseleave", () => {
            box.classList.remove("active");
        });

        // Mobile
        box.addEventListener("touchstart", () => {
            box.classList.add("active");
        });

        box.addEventListener("touchend", () => {
            box.classList.remove("active");
        });
    });

document.querySelectorAll(".footer-begin .box").forEach(box => {
    const icon = box.querySelector("i");
    const h3 = box.querySelector("h3");
    const h5 = box.querySelector("h5");

    box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = "#2CB9D9";
        box.style.borderColor = "#2CB9D9";
        box.style.boxShadow = "0 12px 25px rgba(0,0,0,0.2)";

        icon.style.color = "#fff";
        h3.style.color = "#fff";
        h5.style.color = "#fff";
    });

    box.addEventListener("mouseleave", () => {
        box.style.backgroundColor = "";
        box.style.borderColor = "";
        box.style.transform = "";
        box.style.boxShadow = "";

        icon.style.color = "";
        h3.style.color = "";
        h5.style.color = "grey";
    });
});

});

