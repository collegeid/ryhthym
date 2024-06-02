// Fungsi async untuk mengambil dan menampilkan data album
async function fetchAndDisplayMusicTrending() {
    try {
      const response = await fetch('https://stellar.febrian.id/lite/albums/musics');
      const data = await response.json();
      console.log('Data music:', data);
  
      const album = data.albums[0]; // Ambil data album
      let html = '';
      const modalHtmlArray = [];
  
      console.log('Processing album:', album);
  
      modalHtmlArray.push(`
        <div class="slider-card" id="trending-card-music">
            <a href="https://youtu.be/Cur0pX1fsyE?si=Yt_y1SGPBCM8vZ0h" class="slider-card-overlay">
                <i class="fas fa-play"></i>
            </a>
            <div class="image1">
                <img src="${album.album_images[0].url}" width="15%" alt="" />
            </div>
            <div class="trending-banner-text">
                <!--Jenis-->
                <span class="jenis" style="font-size: 18px;">MUSIC</span>
                <!--Nama-->
                <div class="movie-name">
                    <span>${new Date(album.release_date).getFullYear()}</span>
                    <strong>${album.name}</strong>
                </div>
                <!--Kategori dan Rating-->
                <div class="kategori-rating flex-column flex-md-row">
                    <div class="kategori d-flex align-items-center text-decoration-none mx-1">
                        <a class="me-1 py-2 text-decoration-none text-white">Official</a>
                        <a class="me-1 py-2 text-decoration-none text-white">Music</a>
                    </div>
                    <div class="rating d-inline-flex" style="margin-left: 330px;">
                        <a class="me-2 py-2 text-decoration-none text-white d-none">5</a>
                        <img src="assets/img/Billboard.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        `);
  
      const modal_html = modalHtmlArray.join('');
      document.getElementById('trending-music-data').insertAdjacentHTML('afterend', modal_html);
      document.getElementById('trending-music-data').remove();
      console.log('Modal HTML for trending music:', modal_html);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Call the function to execute
  fetchAndDisplayMusicTrending();
  