/* JS Jarwo */

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
    autoplayTimeout: 5000,
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

  // Event click pada slider-card
  $(".slider-card").click(function () {
    // Mendapatkan index slider-card yang diklik
    var clickedIndex = $(this).parent().index();
    // Mendapatkan index slide yang berada di tengah
    var centerIndex = owl.find(".owl-item.center").index();

    // Menggeser slider jika slider-card yang diklik bukan berada di tengah
    if (clickedIndex < centerIndex) {
      // Jika slider-card diklik berada sebelum center, majukan posisi center
      owl.trigger("prev.owl.carousel");
    } else if (clickedIndex > centerIndex) {
      // Jika slider-card diklik berada setelah center, mundurkan posisi center
      owl.trigger("next.owl.carousel");
    }
  });
});

