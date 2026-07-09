// ==============================
// Typing Animation
// ==============================

const textList = [
    "Second-Year B.Sc. IT Student",
    "Aspiring Software Developer",
    "Learning Web Development",
    "Building Real Projects"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentText = textList[textIndex];

    if (!isDeleting) {

        typing.textContent = currentText.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typing.textContent = currentText.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
            isDeleting = false;
            textIndex++;

            if (textIndex >= textList.length) {
                textIndex = 0;
            }
        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// ==============================
// Scroll Reveal Animation
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});


// ==============================
// Active Navigation
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==============================
// Navbar Shadow
// ==============================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        nav.style.boxShadow = "none";

    }

});


// ==============================
// Floating Background
// ==============================

const blur1 = document.querySelector(".blur1");
const blur2 = document.querySelector(".blur2");

window.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    blur1.style.transform =
        `translate(${x * 40}px, ${y * 40}px)`;

    blur2.style.transform =
        `translate(${-x * 40}px, ${-y * 40}px)`;

});