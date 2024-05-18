document.addEventListener('DOMContentLoaded', function () {
    check_trending('Movies'); // Mulai dengan mencari tren film
    function check_trending(query) {
        checkEndpoint('/trendings/multi', query);
    }

    function checkEndpoint(endpoint, category) {
        console.log('Fetching data from endpoint:', endpoint, 'for category:', category);

        fetch('https://rhytym.gigalixirapp.com' + endpoint)
            .then(response => {
                console.log('Response status:', response.status);
                return response.json();
            })
            .then(data => {
                 // Menambahkan pengecekan untuk kategori lain berdasarkan struktur data
                 if (data && ((data.movies && data.movies.results && data.movies.results.length > 0) || (data.tv && data.tv.results && data.tv.results.length > 0) || (category === 'Music' && data.tracks && data.tracks.albums && data.tracks.albums.items && data.tracks.albums.items.length > 0))) {
                    console.log('Data received for category:', category, data);
                    switch(category) {
                        case 'Music':
                            displayResultsMusic(data.tracks.albums.items, category);
                            break;
                        case 'Movies':
                            displayResultsMovies(data.movies.results, category);
                            break;
                        case 'TV':
                            displayResultsTV(data.tv.results, category);
                            break; // Tambahkan break di sini
                        // Tambahkan case lain jika diperlukan
                        default:
                            displayNotFound(category);
                    }
                } else {
                    displayNotFound(category);
                }
                
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                displayNotFound(category);
            });
    }

    // Fungsi untuk menampilkan hasil musik
    function displayResultsMusic(items, category) {
        console.log(`Displaying ${category} results:`, items);
        // Implementasi untuk menampilkan hasil musik
    }

    
// Fungsi untuk menampilkan hasil film
async function displayResultsMovies(items, category) {
    console.log(`Displaying ${category} results:`);
    const trendingMulti = document.getElementById('trending-multi');
    trendingMulti.innerHTML = ''; // Bersihkan konten sebelumnya

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        // Buat elemen baru untuk setiap item
        const sliderItem = document.createElement('div');
        sliderItem.className = 'slider-card';
     
        // Tambahkan konten ke sliderItem
        sliderItem.innerHTML = `
            <a href="#" class="slider-card-overlay">
                <i class="fas fa-play"></i>
            </a>
            <div class="image">
                <img src="https://image.tmdb.org/t/p/w500${item.backdrop_path}" alt="${item.title}" />
            </div>
            <div class="trending-banner-text">
                <span class="jenis">Movies</span>
                <div class="movie-name">
                    <span>${item.release_date}</span>
                    <strong>${item.title}</strong>
                </div>
                <div class="kategori-rating flex-column flex-md-row">
                    <div class="kategori d-flex align-items-center text-decoration-none mx-1">
                        <!-- Kategori film akan ditambahkan di sini -->
                    </div>
                    <div class="rating d-inline-flex">
                        <a class="me-2 py-2 text-decoration-none text-white">${item.vote_average}</a>
                        <!-- Gambar rating akan ditambahkan di sini -->
                    </div>
                </div>
            </div>
        `;
        
        // Tambahkan sliderItem ke trendingMulti setelah jeda
        await new Promise(resolve => setTimeout(resolve, 10)); // 10 ms jeda
        trendingMulti.appendChild(sliderItem);
    }
}





    // Fungsi untuk menampilkan hasil artis
    function displayResultsTV(items, category) {
        console.log(`Displaying ${category} results:`, items);
        // Implementasi untuk menampilkan hasil artis
    }

    // Fungsi untuk menampilkan pesan tidak ditemukan
    function displayNotFound(category) {
        console.log(`No results found for ${category}.`);
        // Implementasi untuk menampilkan pesan tidak ditemukan
    }

  

});



