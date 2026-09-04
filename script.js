// =============================
// MOBILE NAVIGATION
// =============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// =============================
// CLOSE MOBILE MENU
// =============================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


// =============================
// CERTIFICATE COUNT
// =============================

const certificateCount =
    document.querySelectorAll(".certificate").length;

document.getElementById("certificate-count").textContent =
    certificateCount;


// =============================
// ACTIVE NAVIGATION ON SCROLL
// =============================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});