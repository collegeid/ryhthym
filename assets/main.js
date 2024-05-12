// JavaScript file untuk proyek Rhythm Movie TV


// Ahmad Faiz bertanggung jawab untuk bagian Film
// Branch: FILM

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  speed: 1200,
  autoplay: 
  {
    delay: 2000,
  },
  loop: true,
  zoom: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


// Siswo Adi Nugroho bertanggung jawab untuk bagian Music
// Branch: MUSIC
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: '-28',
  speed:1200,
  autoplay: 
    {
      delay: 1000,
    },
  loop: true,
  zoom: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 80,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Haikal Ihza bertanggung jawab untuk bagian TV Show
// Branch: TV
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



// Jarwo bertanggung jawab untuk bagian Trending Banner
// Branch: TRENDING
// Owlcarousel
// Video Popup
const originalSrc = document.querySelector('.modal iframe').getAttribute('src');
document.addEventListener('click', function(event) {
  const sliderCardOverlay = event.target.closest('.slider-card-overlay');
  const closeBtn = event.target.closest('.close-btn');
  const modalDialog = event.target.closest('.modal-dialog');
  const videoPopup = document.querySelector('.modal');
  const videoIframe = videoPopup.querySelector('iframe');
  // Membuka Popup
  if (sliderCardOverlay) {
    event.preventDefault();
    videoPopup.style.display = 'flex';
    videoIframe.src = originalSrc;
  }
  // Menutup Popup
  else if (closeBtn || !modalDialog) {
    videoPopup.style.display = 'none';
    videoIframe.removeAttribute('src');
  }
});
// Like
let likeCount = 60;
function toggleLike() {
  const likeButton = document.querySelector('.like');
  const likeCountElement = document.getElementById('likeCount');
    if (!likeButton.classList.contains('liked')) {
      likeButton.classList.add('liked');
      likeButton.style.color = 'red';
      likeCount++;
    } else {
      likeButton.classList.remove('liked');
      likeButton.style.color = '';
      likeCount--;
    }
    likeCountElement.textContent = likeCount;
}



// Febri bertanggung jawab untuk bagian Base Layout dan Sidebar
// Branch: BASE, SIDEBAR, FOOTER


//SIDEBAR
  const sidebarToggleBtn = document.getElementById('sidebarToggle');
  const sidebarToggleDesktopBtn = document.getElementById('sidebarToggleDesktop');
  const sidebar = document.querySelector('.sidebar');

  sidebarToggleBtn.addEventListener('click', () => {
    if (sidebar.style.display === 'none') {
      sidebar.style.display = 'block';
    } else {
      sidebar.style.display = 'none';
    }
  });

  sidebarToggleDesktopBtn.addEventListener('click', () => {
    if (sidebar.style.display === 'none') {
      sidebar.style.display = 'block';
    } else {
      sidebar.style.display = 'none';
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.querySelector('.sidebar');
  
    // Tambahkan event listener untuk sentuhan
    sidebar.addEventListener('touchstart', function() {
      sidebar.classList.add('touch');
    });
  
    sidebar.addEventListener('touchend', function() {
      sidebar.classList.remove('touch');
    });
  });
  