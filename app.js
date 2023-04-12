const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-item-link");
const dropBtn = document.querySelector(".dropdown");
const dropMenu = document.querySelector(".dropdown-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})
dropBtn.addEventListener("click", () => {
    dropMenu.classList.toggle("hide");
})
menuLinks.forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}))