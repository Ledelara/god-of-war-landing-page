document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    freeMode: true, 
    grabCursor: true,
    loop: false,
    arrows: false,
    breakpoints: {
      1200: { slidesPerView: 4 },
      900:  { slidesPerView: 3 },
      600:  { slidesPerView: 2 },
      0:    { slidesPerView: 1 }
    }
  });

  AOS.init({
    duration: 1000,
    once: false,
  });
});
