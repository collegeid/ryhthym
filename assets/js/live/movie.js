// Ahmad Faiz dataset untuk bagian Film
// Fungsi async untuk mengambil dan menampilkan data film
async function fetchAndDisplayMovies() {
  try {
    const response = await fetch('https://stellar.febrian.id/lite/cinema/movies');
    const data = await response.json();
    console.log('Data film:', data);

    const results = data.movies;
    let html = '';
    const modalHtmlArray = [];

    for (const movie of results) {
      console.log('Processing film:', movie);
      html += `
      <div class="swiper-slide" onclick="openModal('myModal${movie.id}', '${movie.title}', '${movie.overview}', '${movie.popularity}', '${movie.vote_count}')"><img src="${movie.poster_path}" alt="${movie.title}"></div>
      `;

      try {
        const detailResponse = await fetch(`https://stellar.febrian.id/movies/${movie.id}`);
        const detail = await detailResponse.json();
        console.log(`Detail untuk film ID ${movie.id}:`, detail);
        const video = detail.videos.results.find(video => video.site === "YouTube");
        const videoUrl = video ? `https://www.youtube.com/embed/${video.key}` : '';

        modalHtmlArray.push(`
        <div id="myModal${movie.id}" class="modal-film" onclick="closeModal(event)">
        <span class="close">&times;</span>
        <div class="modal-content-film">
          <div class="posisi-kiri">
            <img id="myposter-film" src="${movie.poster_path}" alt="${detail.title}">
            ${videoUrl ? `
            <div class="play-btn" onclick="openVideoPopup('${videoUrl}')">
              <i class="fa fa-play-circle"></i>
            </div>` : ''}
          </div>
          <div class="posisi-kanan">
            <h1>${detail.title}</h1>
            <p class="sinopsis-film">${detail.overview}</p>
            <div class="kotak-rating-film">
             <!-- <i class="views-film"><i class="fas fa-eye"></i> ${detail.popularity}</i> -->
              <div class="like-btn" onclick="toggleLikeFilm()">
                <i id="like-icon-film" class="far fa-heart"></i>
                <span id="like-count-film">${detail.vote_count}</span>
              </div>
              <i class="rating-film"><span class="star"></span> ${movie.vote_average} </i>
            </div>
          </div>  
        </div>
      </div>
        `);
      } catch (error) {
        console.error(`Error fetching movie details for movie ID ${movie.id}:`, error);
      }
    }

    console.log('HTML untuk daftar film:', html);
    document.getElementById('film-data').insertAdjacentHTML('afterend', html);
    document.getElementById('film-data').remove();

    const modal_html = modalHtmlArray.join('');
    document.getElementById('modal-film').insertAdjacentHTML('afterend', modal_html);
    document.getElementById('modal-film').remove();
    console.log('Modal HTML untuk semua film:', modal_html);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Panggil fungsi untuk menjalankan
fetchAndDisplayMovies();
