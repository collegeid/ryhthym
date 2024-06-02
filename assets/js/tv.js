
     // js popup haikal */

     var myModal = document.getElementById('myModal1')
     var myInput = document.getElementById('myInput')
     
     myModal.addEventListener('shown.bs.modal', function () {
       myInput.focus()
     })
     
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