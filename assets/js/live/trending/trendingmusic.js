// Fungsi async untuk mengambil dan menampilkan data album
async function fetchAndDisplayMusicTrending() {
    try {
        const response = await fetch('https://stellar.febrian.id/lite/albums/musics');
        const data = await response.json();
        console.log('Data music:', data);

        const album = data.albums[1]; // Ambil id data album

        const modalHtml = `
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
        `;

        document.getElementById('trending-music-data').insertAdjacentHTML('afterend', modalHtml);
        document.getElementById('trending-music-data').remove();
        console.log('Modal HTML for trending music:', modalHtml);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Panggil fungsi untuk menjalankan
fetchAndDisplayMusicTrending();