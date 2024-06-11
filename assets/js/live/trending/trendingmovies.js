// Fungsi async untuk mengambil dan menampilkan data film
async function fetchAndDisplayMoviesTrending() {
  try {
    const response = await fetch('https://stellar.febrian.id/lite/cinema/movies');
    const data = await response.json();
    console.log('Data film:', data);

    const movie = data.movies[0]; // Ambil id data film 

    const detailResponse = await fetch(`https://stellar.febrian.id/movies/${movie.id}`);
    const detail = await detailResponse.json();
    console.log(`Detail untuk film ID ${movie.id}:`, detail);
    const video = detail.videos.results.find(video => video.site === "YouTube");
    const videoUrl = video ? `https://youtu.be/${video.key}` : '';

    const modalHtml = `
      <div class="slider-card" id="trending-card-movie">
        ${videoUrl ? `
          <a href="${videoUrl}" class="slider-card-overlay">
            <i class="fas fa-play "></i>
          </a>
          ` : ''}
          <div class="image">
            <img src="${movie.backdrop_path}" width="15%" alt="" />
          </div>
          <div class="trending-banner-text">
            <!--Jenis-->
            <span class="jenis">Movies</span>
            <!--Nama-->
            <div class="movie-name">
              <span>${new Date(detail.release_date).getFullYear()}</span>
              <strong>${detail.title}</strong>
            </div>
            <!--Kategori dan Rating-->
            <div class="kategori-rating flex-column flex-md-row">
              <div class="kategori d-flex align-items-center text-decoration-none mx-1">
                <a class="me-1 py-2 text-decoration-none text-white">Sub: ${movie.original_language}</a>
              </div>
              <div class="rating d-inline-flex" style="margin-left: 340px;">
                <a class="me-2 py-2 text-decoration-none text-white">${movie.vote_average}</a>
                <img src="assets/img/imdb.png" alt="" />
              </div>
              <div class="sinopsis-film-trending">
                <p>${detail.overview}</p>      
              </div>
            </div>
          </div>
        </div>
    `;

    document.getElementById('trending-film-data').insertAdjacentHTML('afterend', modalHtml);
    document.getElementById('trending-film-data').remove();
    console.log('Modal HTML untuk film trending:', modalHtml);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

// Panggil fungsi untuk menjalankan
fetchAndDisplayMoviesTrending();