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
  const modalDialog = event.target.closest('.modal-dialog');
  const videoPopup = document.querySelector('.modal');
  const videoContainer = document.querySelector('.video-content');
  const judulTrending = document.querySelector('.judul-trending h2');
  const infoTahun = document.querySelector('.info-kiri span');
  const bintangPop = document.querySelector('.bintang');
  const ratingBanner = document.querySelector('.skor');
  const ratingumur = document.querySelector('.umur');
  const sinopsisTitle = document.querySelector('.sinopsis h3');
  const sinopsisContainer = document.querySelector('.sinopsis p');
  const listMusicContent = document.querySelector('.list-music-content');

  // Membuka Popup
  if (sliderCardOverlay) {
      event.preventDefault();
      const sliderCard = sliderCardOverlay.closest('.slider-card');
      const movieName = sliderCard.querySelector('.movie-name strong').textContent;
      const movieYear = sliderCard.querySelector('.movie-name span').textContent;
      const ratingPopup = sliderCard.querySelector('.rating a').textContent;
      const sinopsis = sliderCard.querySelector('.sinopsis-film-trending p');

      // Mengambil data banner di Popup
      judulTrending.textContent = movieName;
      infoTahun.textContent = movieYear;
      ratingBanner.textContent = ratingPopup;

      // Hapus konten video atau gambar sebelumnya jika ada
      videoContainer.innerHTML = '';

      // Kondisi setiap banner
      if (sliderCard.id === 'trending-card-movie') {
          const videoUrl = sliderCardOverlay.getAttribute('href');
          const videoId = getYouTubeVideoId(videoUrl);
          const embedUrl = `https://www.youtube.com/embed/${videoId}`;
          const videoIframe = document.createElement('iframe');
          videoIframe.width = '100%';
          videoIframe.src = embedUrl;
          videoIframe.allowFullscreen = true;
          videoContainer.appendChild(videoIframe);

          bintangPop.style.display = 'block';
          ratingBanner.style.display = 'block';
          ratingumur.style.display = 'block';
          sinopsisTitle.textContent = 'Sinopsis:';
          sinopsisContainer.textContent = sinopsis.textContent;
          sinopsisContainer.style.display = 'block';
          sinopsisContainer.style.overflowY = 'visible';
          sinopsisContainer.style.maxHeight = 'none';
      } else if (sliderCard.id === 'trending-card-tv') {
          const tvImageSrc = sliderCard.querySelector('.image img').src;
          const tvImage = document.createElement('img');
          tvImage.src = tvImageSrc;
          tvImage.style.width = '100%'; 
          videoContainer.appendChild(tvImage);

          bintangPop.style.display = 'none';
          ratingBanner.style.display = 'none';
          ratingumur.style.display = 'none';
          sinopsisTitle.textContent = 'Episode Series:';
          sinopsisContainer.innerHTML = '';
          const episodeContainer = document.getElementById('episode-container');
          const episodeElements = episodeContainer.children;
          for (let episodeElement of episodeElements) {
              sinopsisContainer.appendChild(episodeElement.cloneNode(true));
          }
          sinopsisContainer.style.overflowY = 'scroll';
          sinopsisContainer.style.maxHeight = '220px';
          sinopsisContainer.style.paddingRight = '30px';
          sinopsisContainer.style.paddingTop = '20px';
      } else if (sliderCard.id === 'trending-card-music') {
          const videoUrl = sliderCardOverlay.getAttribute('href');
          const videoId = getYouTubeVideoId(videoUrl);
          const embedUrl = `https://www.youtube.com/embed/${videoId}`;
          const videoIframe = document.createElement('iframe');
          videoIframe.width = '100%';
          videoIframe.src = embedUrl;
          videoIframe.allowFullscreen = true;
          videoContainer.appendChild(videoIframe);

          bintangPop.style.display = 'none';
          ratingBanner.style.display = 'none';
          ratingumur.style.display = 'none';
          sinopsisTitle.textContent = 'Song List:';
          sinopsisContainer.innerHTML = listMusicContent.innerHTML;
          sinopsisContainer.style.overflowY = 'scroll';
          sinopsisContainer.style.maxHeight = '220px';
          sinopsisContainer.style.paddingRight = '30px';
          sinopsisContainer.style.paddingTop = '20px';
      }

      videoPopup.style.display = 'flex';
  }
  // Menutup Popup
  else if (closeBtn || !modalDialog) {
      videoPopup.style.display = 'none';
      // Hapus konten video atau gambar saat menutup
      videoContainer.innerHTML = '';
      sinopsisTitle.textContent= 'Sinopsis:'; // Reset title
    }
});


// Fungsi untuk mendapatkan ID video YouTube dari URL
function getYouTubeVideoId(url) {
  const pattern = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\/v=)([^#\&\?]*).*/;
  const match = url.match(pattern);

  // Jika ada kecocokan, kembalikan ID video
  return (match && match[2].length == 11) ? match[2] : null;
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
  