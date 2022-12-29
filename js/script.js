let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("navbar");
let navLinks = navBar.querySelectorAll("li");
let body = document.querySelector("body");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    body.classList.remove("overflow-hidden");
    hamMenuIcon.classList.toggle("fa-times");
  });
});
