// integrasi tv by febri  
  // Mengambil data dari API
   fetch('https://rhytym.gigalixirapp.com/tv')
   .then(response => response.json())
   .then(data => {
     // Mengambil array hasil dari data
     const results = data.results;
     // Membuat variabel untuk menampung markup HTML
     let html = '';
 
     // Perulangan melalui setiap objek hasil
     results.forEach(movie => {
       // Membuat markup untuk setiap film
       html += `
         <div class="swiper-slide"><img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" width="10%"></div>
       `;
     });
 
     // Memasukkan markup HTML ke dalam elemen dengan id 'movies'
     document.getElementById('tv-data').innerHTML = html;
   })
   .catch(error => {
     console.error('Error fetching data:', error);
   });



     // js popup haikal */

     var myModal = document.getElementById('myModal')
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