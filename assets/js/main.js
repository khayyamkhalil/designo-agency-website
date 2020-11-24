// const menuBtn = document.querySelector(".menu-btn");
// const hamburger = document.querySelector(".menu-btn__burger");
// const nav = document.querySelector(".nav");
// const menuNav = document.querySelector(".menu-nav");
// const navItems = document.querySelectorAll(".menu-nav__item");

// let showMenu = false;

// menuBtn.addEventListener("click", toggleMenu);

// function toggleMenu() {
//   if (!showMenu) {
//     hamburger.classList.add("open");
//     nav.classList.add("open");
//     menuNav.classList.add("open");
//     navItems.forEach((item) => item.classList.add("open"));
//     showMenu = true;
//   } else {
//     hamburger.classList.remove("open");
//     nav.classList.remove("open");
//     menuNav.classList.remove("open");
//     navItems.forEach((item) => item.classList.remove("open"));
//     showMenu = false;
//   }
// }

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
