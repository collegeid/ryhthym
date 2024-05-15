 // integrasi movies by febri
 // Mengambil data dari API
 fetch('https://rhytym.gigalixirapp.com/movies')
 .then(response => response.json())
 .then(data => {
   // Mengambil array hasil dari data
   const results = data.results;
   // Membuat variabel untuk menampung markup HTML
   let html = '';

   // Perulangan melalui setiap objek hasil
   results.forEach(show => {
     // Membuat markup untuk setiap acara TV
     html += `
       <div class="swiper-slide"><img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="${show.name}" width="10%"></div>
     `;
   });

   // Memasukkan markup HTML ke dalam elemen dengan id 'tvShows'
   document.getElementById('film-data').innerHTML = html;
 })
 .catch(error => {
   console.error('Error fetching data:', error);
 });