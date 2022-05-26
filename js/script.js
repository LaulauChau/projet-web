const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelector("nav ul a");

hamburger.addEventListener("click", function () {
    ul.classList.toggle("show");
});

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    });
});
