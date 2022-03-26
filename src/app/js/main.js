let navbar = document.querySelector(".hero__navbar");
let navlinks = document.querySelectorAll(".col-3");
let sticky = navbar.offsetTop;
const burger = document.querySelector(".burger");
let controller;
let sliderScene;
let pageScene;
let detailScene;
const scrollTopBtn = document.querySelector(".scroll-to-top__btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    burger.classList.add("sticky");
    // navlinks.forEach((navlink) => {
    //   navlink.classList.add("shadow");
    // });
  } else {
    navbar.classList.remove("sticky");
    burger.classList.remove("sticky");
  }
});

async function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    await e.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotate: "45", y: 6, background: "white" });
    gsap.to(".line2", 0.5, { rotate: "-45", y: -6, background: "white" });
    gsap.to(".burger-hero__navbar", 1, {
      clipPath: "circle(2500px at 0% -10%)",
    });
    document.body.classList.add("hide");
  } else {
    await e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "black" });
    gsap.to(".burger-hero__navbar", 1, { clipPath: "circle(50px at 0% -10%)" });
    document.body.classList.remove("hide");
  }
}

burger.addEventListener("click", navToggle);

scrollTopBtn.addEventListener("click", () => {
  scrollTo({ top: 0, behavior: "smooth" });
});
