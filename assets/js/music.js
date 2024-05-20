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