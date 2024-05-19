// JavaScript file untuk proyek Rhythm Movie TV


// Ahmad Faiz bertanggung jawab untuk bagian Film
// Branch: FILM

// var TrandingSlider = new Swiper('.tranding-slider', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: 'auto',
//   speed: 1200,
//   // autoplay: 
//   // {
//   //   delay: 2000,
//   // },
//   loop: true,
//   zoom: true,
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 2.5,
//   },

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });


// Siswo Adi Nugroho bertanggung jawab untuk bagian Music
// Branch: MUSIC
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: '-28',
  speed:1200,
  // autoplay: 
  //   {
  //     delay: 1000,
  //   },
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

document.addEventListener("click",function (event){
  const musicCardOverlay = event.target.closest('#cards-music');
  const closeBtn = event.target.closest('.close-btn');
  const modalDialog = event.target.closest('#music-modal-dialog');
  const musicPopup = document.querySelector('#music-modal');
  const musicImg = document.querySelector('#music-modal img');
  
  //GET DATA
  let getImg
  if(musicCardOverlay) getImg = musicCardOverlay.querySelector('img').getAttribute('src');

  
    // Membuka Popup
    if (musicCardOverlay) {
      event.preventDefault();
      musicPopup.style.display = 'flex';
      musicImg.src = getImg 
    } else if (closeBtn || !modalDialog) {
      musicPopup.style.display = 'none';
    }
  })

// Haikal Ihza bertanggung jawab untuk bagian TV Show
// Branch: TV

// var TrandingSlider = new Swiper('.tranding-slider', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: 'auto',
//   speed: 1200,
//   // autoplay: 
//   // {
//   //   delay: 2000,
//   // },
//   loop: true,
//   zoom: true,
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 2.5,
//   },

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });




// Jarwo bertanggung jawab untuk bagian Trending Banner
// Branch: TRENDING
// Owlcarousel
// Video Popup
document.addEventListener('click', function(event) {
  const sliderCardOverlay = event.target.closest('.slider-card-overlay');
  const closeBtn = event.target.closest('.close-btn');
  const modalDialog = event.target.closest('#trending-modal-dialog');
  const videoPopup = document.querySelector('#trending-modal');
  const videoIframe = document.querySelector('#trending-modal iframe');

  // Membuka Popup
  if (sliderCardOverlay) {
    event.preventDefault();
    const videoUrl = sliderCardOverlay.getAttribute('href');
    const videoId = getYouTubeVideoId(videoUrl);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    videoPopup.style.display = 'flex';
    videoIframe.src = embedUrl;
  } 
  // Menutup Popup
  else if (closeBtn || !modalDialog) {
    videoPopup.style.display = 'none';
    videoIframe.src = '';
  }
});

// Fungsi untuk mendapatkan ID video YouTube dari URL
function getYouTubeVideoId(url) {
  const pattern = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(pattern);

  // Jika ada kecocokan, kembalikan ID video
  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}
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
  