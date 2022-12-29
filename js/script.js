let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("navbar");
let navLinks = navBar.querySelectorAll("li");
let container = document.querySelector("body");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  container.classList.toggle("overflow-hidden");
  hamMenuIcon.classList.toggle("fa-times");
  container.classList.toggle('menu-open');
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    container.classList.remove("overflow-hidden");
    hamMenuIcon.classList.toggle("fa-times");
  });
});
