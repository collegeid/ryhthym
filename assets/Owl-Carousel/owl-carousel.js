// Jarwo bertanggung jawab untuk bagian Trending Banner
// Branch: TRENDING

$(document).ready(function () {
  // Inisialisasi Owl Carousel
  var owl = $(".owl-carousel").owlCarousel({
    nav: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    center: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 3,
      },
      1080: {
        items: 3,
      },
    },
  });
});