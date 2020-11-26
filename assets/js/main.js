const navToggle = document.querySelector(".nav-toggle");
const navBurger = document.querySelector(".nav-toggle__burger");
const navMenu = document.querySelector(".nav__menu");
const navList = document.querySelector(".nav__list");
const navItem = document.querySelectorAll(".nav__item");

let showMenu = false;

navToggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    navBurger.classList.add("open");
    navMenu.classList.add("open");
    navList.classList.add("open");
    navItem.forEach((item) => item.classList.add("open"));
    showMenu = true;
  } else {
    navBurger.classList.remove("open");
    navMenu.classList.remove("open");
    navList.classList.remove("open");
    navItem.forEach((item) => item.classList.remove("open"));
    showMenu = false;
  }
}
