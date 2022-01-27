let navbar = document.querySelector(".hero__navbar");
let navlinks = document.querySelectorAll(".nav-link");
let sticky = navbar.offsetTop;

let copyright = document.querySelector(".copyright");
let year = new Date().getFullYear();

copyright.innerText = year;

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navlinks.classList.add("shadow");
  } else {
    navbar.classList.remove("sticky");
  }
});
