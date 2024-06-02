// Fungsi async untuk mengambil dan menampilkan data TV Shows
async function fetchAndDisplayTVTrending() {
  try {
      const response = await fetch('https://stellar.febrian.id/lite/cinema/tv');
      const data = await response.json();
      console.log('Data TV shows:', data);

      const tvShow = data.tv[8]; // Ambil data TV show
      let html = '';
      const modalHtmlArray = [];

      console.log('Processing TV show:', tvShow);
      const videoUrl = ''; // Tautan video
      modalHtmlArray.push(`
          <div class="slider-card" id="trending-card-tv">
            <a href="https://youtu.be/94zqht_t7tM?si=3nV3WeokNEXsa7wf" class="slider-card-overlay">
              <i class="fas fa-play"></i>
            </a>
              <div class="image">
                  <img src="${tvShow.backdrop_path}" width="15%" alt="" />
              </div>
              <div class="trending-banner-text">
                  <!-- Jenis -->
                  <span class="jenis" style="font-size: 18px;">TV</span>
                  <!-- Nama -->
                  <div class="movie-name">
                      <span>${new Date(tvShow.first_air_date).getFullYear()}</span>
                      <strong>${tvShow.name}</strong>
                  </div>
                  <!-- Kategori dan Rating -->
                  <div class="kategori-rating flex-column flex-md-row">
                      <div class="kategori d-flex align-items-center text-decoration-none mx-1">
                          <a class="me-1 py-2 text-decoration-none text-white">Lang: ${tvShow.original_language}</a>
                      </div>
                      <div class="rating d-inline-flex" style="margin-left: 320px;">
                          <a class="me-2 py-2 text-decoration-none text-white">${tvShow.vote_average}</a>
                          <img src="assets/img/imdb.png" alt="" />
                      </div>
                  </div>
                  <!-- Sinopsis -->
                  <div class="sinopsis-film-trending">
                      <p>${tvShow.overview}</p>      
                  </div>
              </div>
              
          </div>
      `);

      const modal_html = modalHtmlArray.join('');
      document.getElementById('trending-tv-data').insertAdjacentHTML('afterend', modal_html);
      document.getElementById('trending-tv-data').remove();
      console.log('Modal HTML untuk TV Shows trending:', modal_html);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

// Panggil fungsi untuk menjalankan
fetchAndDisplayTVTrending();
