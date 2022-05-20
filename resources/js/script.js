// HEADER SEARCH FORM
const searchForm = document.querySelector(".header__search");
const searchBtn = document.querySelector("#search-btn");
const menuBtn = document.querySelector("#menu-btn");
const sideBar = document.querySelector(".side-bar");
const sideBarClose = document.querySelector("#side-bar-close");

searchBtn.onclick = () => {
  searchForm.classList.toggle("active");
};

menuBtn.onclick = () => {
  sideBar.classList.add("active");
};

sideBarClose.onclick = () => {
  sideBar.classList.remove("active");
};

window.onscroll = () => {
  sideBar.classList.remove("active");
  searchForm.classList.remove("active");
  if (window.screenY > 80) {
  }
};

var swiper = new Swiper(".home__slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// var swiper = new Swiper(".review-slider", {
//   loop: true,
//   grabCursor: true,
//   spaceBetween: 20,
//   breakpoints: {
//     450: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });
