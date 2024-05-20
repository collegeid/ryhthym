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