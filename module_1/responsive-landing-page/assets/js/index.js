'use strict';
const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".mobile-nav");
const closeNav = document.querySelector(".close");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.remove("hidden");
    hamburgerMenu.classList.add("hidden");
    closeNav.classList.remove("hidden");
});

closeNav.addEventListener("click", () => {
    nav.classList.add("hidden");
    hamburgerMenu.classList.remove("hidden");
    closeNav.classList.add("hidden");
})
