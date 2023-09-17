
//scroll effect
function userScroll() {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-secondary');
      } else {
        navbar.classList.remove('bg-secondary');
      }
    });
  }

//video slider
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
}

btns.forEach((btn,i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

document.addEventListener('DOMContentLoaded', userScroll);
 