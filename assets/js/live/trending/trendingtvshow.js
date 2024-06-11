// Fungsi async untuk mengambil dan menampilkan data TV Shows
async function fetchAndDisplayTVTrending() {
  let episodesData = []; // Untuk menyimpan data episode

  // Menghasilkan elemen episode
  function generateEpisodeElements(episodes) {
    const episodeContainer = document.createElement('div');
    episodeContainer.id = 'episode-container';
    episodeContainer.style.display = 'none';

    episodes.forEach((episode, index) => {
      let episodeElement = document.createElement('div');
      episodeElement.textContent = `${index + 1}: ${episode.name}`;
      episodeElement.classList.add('episode-box');
      episodeContainer.appendChild(episodeElement);
    });
    document.body.appendChild(episodeContainer);
  }

  try {
    const response = await fetch('https://stellar.febrian.id/lite/cinema/tv');
    const data = await response.json();
    console.log('Data TV:', data);

    const tvShow = data.tv[2]; // Ambil id data TV

    const detailResponse = await fetch(`https://stellar.febrian.id/tv/${tvShow.id}`);
    const detail_tv = await detailResponse.json();
    console.log('Detail TV:', detail_tv);
    // Menyimpan data episode secara lokal
    episodesData = detail_tv.seasons.episodes; 

    // Penambahan data episode
    generateEpisodeElements(episodesData);

    const modalHtml = `
      <div class="slider-card" id="trending-card-tv">
        <!-- Ganti link dengan fungsi untuk membuka video jika diinginkan -->
        <a href="#" class="slider-card-overlay">
          <i class="fas fa-play"></i>
        </a>
        <!-- Ganti elemen iframe dengan img -->
        <div class="image">
          <img src="${tvShow.backdrop_path}" width="100%" alt="TV Image" />
        </div>
        <div class="trending-banner-text">
          <span class="jenis" style="font-size: 18px;">TV</span>
          <div class="movie-name">
            <span>${new Date(tvShow.first_air_date).getFullYear()}</span>
            <strong>${tvShow.name}</strong>
          </div>
          <div class="kategori-rating flex-column flex-md-row">
            <div class="kategori d-flex align-items-center text-decoration-none mx-1">
              <a class="me-1 py-2 text-decoration-none text-white">Sub: ${tvShow.original_language}</a>
            </div>
            <div class="rating d-inline-flex" style="margin-left: 320px;">
              <a class="me-2 py-2 text-decoration-none text-white">${tvShow.vote_average}</a>
              <img src="assets/img/imdb.png" alt="" />
            </div>
          </div>
          <!-- Tetap menampilkan daftar episode -->
          <div class="sinopsis-film-trending">
            ${episodesData.map((episode, index) => `<div class="episode-box">${index + 1}: ${episode.name}</div>`).join('')}
          </div>
        </div>
      </div>
    `;

    document.getElementById('trending-tv-data').insertAdjacentHTML('afterend', modalHtml);
    document.getElementById('trending-tv-data').remove();
    console.log('Modal HTML untuk TV Shows trending:', modalHtml);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Panggil fungsi untuk menjalankan
fetchAndDisplayTVTrending();