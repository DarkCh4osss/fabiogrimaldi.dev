let navbar = document.querySelector(".hero__navbar");
let navlinks = document.querySelectorAll(".nav-link");
let sticky = navbar.offsetTop;

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navlinks.classList.add("shadow");
  } else {
    navbar.classList.remove("sticky");
  }
});
