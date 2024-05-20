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
  const videoIframe = document.querySelector('.modal iframe');
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
    const videoUrl = sliderCardOverlay.getAttribute('href');
    const videoId = getYouTubeVideoId(videoUrl);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    videoPopup.style.display = 'flex';
    videoIframe.src = embedUrl;

    // Mengambil data banner
    const sliderCard = sliderCardOverlay.closest('.slider-card');
    const movieName = sliderCard.querySelector('.movie-name strong').textContent;
    const movieYear = sliderCard.querySelector('.movie-name span').textContent;
    const ratingPopup = sliderCard.querySelector('.rating a').textContent;
    const sinopsis = sliderCard.querySelector('.sinopsis-film-trending p');

    // Merubah data banner di Popup
    judulTrending.textContent = movieName;
    infoTahun.textContent = movieYear;
    ratingBanner.textContent = ratingPopup;

    // Kondisi setiap banner
    if (sliderCard.id === 'trending-card-movie') {
      sinopsisTitle.textContent = 'Sinopsis:';
      sinopsisContainer.textContent = sinopsis.textContent;
      sinopsisContainer.style.display = 'block';
      sinopsisContainer.style.overflowY = 'visible';
      sinopsisContainer.style.maxHeight = 'none';
      bintangPop.style.display = 'block';
      ratingBanner.style.display = 'block';
      ratingumur.style.display = 'block';
    } else if (sliderCard.id === 'trending-card-tv') {
      bintangPop.style.display = 'none';
      ratingBanner.style.display = 'none';
      ratingumur.style.display = 'none';
      sinopsisTitle.textContent = 'Episode Series:';
      sinopsisContainer.innerHTML = '';
      for (let i = 1; i <= 5; i++) {
          let episodeElement = document.createElement('div');
          episodeElement.textContent = 'Episode ' + i;
          episodeElement.classList.add('episode-box');
          sinopsisContainer.appendChild(episodeElement);
      }
      sinopsisContainer.style.overflowY = 'scroll';
      sinopsisContainer.style.maxHeight = '170px';
      sinopsisContainer.style.paddingRight = '30px';
      sinopsisContainer.style.paddingTop = '20px';
    } else if (sliderCard.id === 'trending-card-music') {
      bintangPop.style.display = 'none';
      ratingBanner.style.display = 'none';
      ratingumur.style.display = 'none';
      sinopsisTitle.textContent = 'Song List:';
      sinopsisContainer.innerHTML = listMusicContent.innerHTML;
      sinopsisContainer.style.overflowY = 'scroll';
      sinopsisContainer.style.maxHeight = '150px';
      sinopsisContainer.style.paddingRight = '30px';
      sinopsisContainer.style.paddingTop = '20px';
    }
  } 
  // Menutup Popup
  else if (closeBtn || !modalDialog) {
    videoPopup.style.display = 'none';
    videoIframe.src = '';
    sinopsisTitle.textContent = 'Sinopsis:'; // Reset title
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
  