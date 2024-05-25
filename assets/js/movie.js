// Mengambil data dari API
fetch('https://rhytym.gigalixirapp.com/lite/cinema/movies')
  .then(response => response.json())
  .then(data => {
    // Logging data yang diterima dari API pertama
    console.log('Data film:', data);

    // Mengambil array hasil dari data
    const results = data.movies;

    // Membuat variabel untuk menampung markup HTML untuk daftar film
    let html = '';
    const modalPromises = [];

    // Perulangan melalui setiap objek hasil
    results.forEach(movie => {
      // Membuat markup untuk setiap film
      html += `
      <div class="swiper-slide" onclick="openModal('myModal${movie.id}', '${movie.title}', '${movie.overview}', '${movie.popularity}', '${movie.vote_count}')"><img src="${movie.poster_path}" alt="${movie.title}"></div>
      `;

      // Logging setiap film yang sedang diproses
      console.log('Processing film:', movie);

      // Mengambil detail film dari API kedua menggunakan ID film
      const modalPromise = fetch(`https://rhytym.gigalixirapp.com/movies/${movie.id}`)
        .then(response => response.json())
        .then(detail => {
          // Logging data detail film yang diterima dari API kedua
          console.log(`Detail untuk film ID ${movie.id}:`, detail);
          const video = detail.videos.results.find(video => video.site === "YouTube");
          const videoUrl = video ? `https://www.youtube.com/embed/${video.key}` : '';

          // Mengembalikan modal HTML untuk setiap film
          return `
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
                  <i class="rating-film"><span class="star"></span> ${detail.vote_average} </i>
                </div>
              </div>  
            </div>
          </div>`;
        })
        .catch(error => {
          console.error(`Error fetching movie details for movie ID ${movie.id}:`, error);
        });

      modalPromises.push(modalPromise);
    });

    // Logging HTML yang dihasilkan untuk daftar film
    console.log('HTML untuk daftar film:', html);

    // Memasukkan markup HTML setelah elemen dengan id 'film-data'
    document.getElementById('film-data').insertAdjacentHTML('afterend', html);

    // Menghapus elemen dengan id 'film-data' setelah kontennya dimasukkan
    const filmDataElement = document.getElementById('film-data');
    filmDataElement.parentNode.removeChild(filmDataElement);

    // Tunggu sampai semua detail permintaan selesai
    Promise.all(modalPromises).then(modalHtmlArray => {
      // Menggabungkan semua markup modal HTML
      const modal_html = modalHtmlArray.join('');

      // Memasukkan markup modal HTML setelah elemen dengan id 'modal-film'
      document.getElementById('modal-film').insertAdjacentHTML('afterend', modal_html);

      // Menghapus elemen dengan id 'modal-film' setelah kontennya dimasukkan
      const modalFilmElement = document.getElementById('modal-film');
      modalFilmElement.parentNode.removeChild(modalFilmElement);

      // Logging modal HTML yang dihasilkan
      console.log('Modal HTML untuk semua film:', modal_html);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
