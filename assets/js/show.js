// Mengambil data dari API
fetch('https://stellar.gigalixirapp.com/lite/cinema/tv')
  .then(response => response.json())
  .then(data => {
    // Logging data yang diterima dari API pertama
    console.log('Data tv:', data);

    // Mengambil array hasil dari data
    const results = data.tv;
    
    // Membuat variabel untuk menampung markup HTML untuk daftar film
    let html = '';
    const modalPromises = [];

    // Perulangan melalui setiap objek hasil
    results.forEach(tv_show => {
      // Membuat markup untuk setiap film
      html += `
        <div class="swiper-slide">
          <img src="${tv_show.poster_path}" class="thumbnail">
          <div class="btn-tv">
            <button type="button" class="btntv btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop${tv_show.id}" data-image-src="${tv_show.poster_path}" data-title="${tv_show.title}" id="btn2">WATCH</button>
          </div>
        </div>
      `;

      // Logging setiap film yang sedang diproses
      console.log('Processing tv:', tv_show);

      // Mengambil detail film dari API kedua menggunakan ID film
      const modalPromise = fetch(`https://stellar.gigalixirapp.com/tv/${tv_show.id}`)
        .then(response => response.json())
        .then(detail_tv => {
          // Membuat markup untuk episode
          let episode_html = '';
          detail_tv.seasons.episodes.forEach((episode, index) => {
            episode_html += `<li><button type="button" class="btn btn-secondary">EPISODE ${index + 1}: ${episode.name}</button></li>`;
          });
          // Mengembalikan modal HTML dengan episode yang diperbarui
          return `
            <div class="modal fade" id="staticBackdrop${tv_show.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <div class="embed-responsive-tv">
                      <iframe class="embed-responsive-item" src="https://image.tmdb.org/t/p/w500${detail_tv.poster_path}" allowfullscreen width="470px" height="300"></iframe>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <h2 class="text-episode">Episode Series</h2>
                    <ul class="episode-list">
                      ${episode_html}
                    </ul>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          `;
        })
        .catch(error => {
          console.error(`Error fetching movie details for movie ID ${tv_show.id}:`, error);
        });

      modalPromises.push(modalPromise);
    });

    // Logging HTML yang dihasilkan untuk daftar film
    console.log('HTML untuk daftar tv:', html);

    // Memasukkan markup HTML setelah elemen dengan id 'tv-data'
    document.getElementById('tv-data').insertAdjacentHTML('afterend', html);

    // Menghapus elemen dengan id 'tv-data' setelah kontennya dimasukkan
    const tvDataElement = document.getElementById('tv-data');
      tvDataElement.parentNode.removeChild(tvDataElement);


    // Tunggu sampai semua detail permintaan selesai
    Promise.all(modalPromises).then(modalHtmlArray => {
      // Menggabungkan semua markup modal HTML
      const modal_html = modalHtmlArray.join('');

      // Logging modal HTML yang dihasilkan

      // Memasukkan markup modal HTML setelah elemen dengan id 'modal-tv'
      document.getElementById('modal-tv').insertAdjacentHTML('afterend', modal_html);

      // Menghapus elemen dengan id 'modal-tv' setelah kontennya dimasukkan
      const modalTvElement = document.getElementById('modal-tv');
      modalTvElement.parentNode.removeChild(modalTvElement);

      console.log('Modal HTML untuk semua tv:', modal_html);

    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
