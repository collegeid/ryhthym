// Fungsi async untuk mengambil dan menampilkan data film
async function fetchAndDisplayMovies() {
  try {
    // menggunakan link dari API untuk memasukan data
    const response = await fetch('https://stellar.febrian.id/lite/cinema/movies');
    // menggunakan json agar bisa keluar dataanya
    const data = await response.json();
    console.log('Data film:', data);

    // menyimpan data film yang di ambil dari API
    const results = data.movies;
    let html = '';
    const modalHtmlArray = [];

    // di gunakan untuk memutar film
    for (const movie of results) {
      console.log('Processing film:', movie);
      // ditambahkan html agar slide film 
      html += `
      <div class="swiper-slide" onclick="openModal('myModal${movie.id}', '${movie.title}', '${movie.overview}', '${movie.popularity}', '${movie.vote_count}')"><img src="${movie.poster_path}" alt="${movie.title}"></div>
      `;

      try {
        // menggunakan link agar bisa menambahkan data fil dengan ID
        const detailResponse = await fetch(`https://stellar.febrian.id/movies/${movie.id}`);
        // memuat data JSON dari respons detail film
        const detail = await detailResponse.json();
        console.log(`Detail untuk film ID ${movie.id}:`, detail);
        // agar dapat menonton film dari youtube
        const video = detail.videos.results.find(video => video.site === "YouTube");
        const videoUrl = video ? `https://www.youtube.com/embed/${video.key}` : '';

        // Menambahkan HTML untuk modal detail dari film
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
        // memperbaiki jika ada eror dari film
        console.error(`Error fetching movie details for movie ID ${movie.id}:`, error);
      }
    }

    // Menambahkan HTML slide film ke dalam elemen dengan id film-data nya
    console.log('HTML untuk daftar film:', html);
    document.getElementById('film-data').insertAdjacentHTML('afterend', html);
    document.getElementById('film-data').remove();

    // Menggabungkan semua HTML modal dan menambahkannya ke dalam elemen dengan id 'modal-film'
    const modal_html = modalHtmlArray.join('');
    document.getElementById('modal-film').insertAdjacentHTML('afterend', modal_html);
    document.getElementById('modal-film').remove();
    console.log('Modal HTML untuk semua film:', modal_html);
  } catch (error) {
    // memperbaiki jika ada eror di bagian data film
    console.error('Error fetching data:', error);
  }
}

// Panggil fungsi untuk menjalankan
fetchAndDisplayMovies();
