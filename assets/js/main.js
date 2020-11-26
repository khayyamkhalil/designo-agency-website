const navToggle = document.querySelector(".nav-toggle"); //menu-btn
const navBurger = document.querySelector(".nav-toggle__burger"); //menu-btn__burger
const navMenu = document.querySelector(".nav__menu"); //nav
const navList = document.querySelector(".nav__list"); //menu-nav
const navItem = document.querySelectorAll(".nav__item"); //menu-nav__item

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
