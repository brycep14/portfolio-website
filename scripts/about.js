// Fade out the hero section as you scroll
window.addEventListener("scroll", function () {
    const hero = document.querySelector(".hero-section");
    const scrollY = window.scrollY;
  
    if (scrollY < 300) {
      hero.style.opacity = 1 - scrollY / 300;
    } else {
      hero.style.opacity = 0;
    }
  });
  