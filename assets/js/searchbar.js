// integrasi searchbar, automatic search by febri
// integrasi dynamic suggestion container improvement by jarwo

document.addEventListener('DOMContentLoaded', function() {
    $("#suggestions").hide()
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const suggestionsContainer = document.getElementById('suggestionsContainer');
    const suggestions = document.getElementById('suggestions');
    let typing = false; // Menandai apakah pengguna sedang mengetik

    // Pencarian saat input berubah
    searchInput.addEventListener('input', function() {
        typing = true; // Pengguna sedang mengetik
        const query = searchInput.value.trim();
        if (query !== '') {
            search(query);
            suggestionsContainer.style.zIndex = '1500'; // Mengatur letak index container suggestions
            $("#suggestions").show();
        } else {
            $("#suggestions").hide();
        }
    });

    // Pencarian saat tombol pencarian diklik
    searchButton.addEventListener('click', function() {
        if (!typing) { // Jika pengguna tidak sedang mengetik
            const query = searchInput.value.trim();
            if (query !== '') {
                search(query);
                suggestionsContainer.style.zIndex = '1500'; // Mengatur letak index container suggestions
                $("#suggestions").show();
            }
        }
        typing = false; // Reset status typing
    });

    function search(query) {
        suggestions.innerHTML = ''; // Bersihkan suggestions

        console.log('Searching for:', query);

        searchInEndpoint('/tv/find/' + query, 'TV Shows');
        searchInEndpoint('/movies/find/' + query, 'Movies');
        searchInEndpoint('/tracks/find/' + query, 'Music');
    }

    function searchInEndpoint(endpoint, category) {
        console.log('Fetching data from endpoint:', endpoint, 'for category:', category);

        fetch('https://rhytym.gigalixirapp.com' + endpoint)
            .then(response => {
                console.log('Response status:', response.status);
                return response.json();
            })
            .then(data => {
                console.log('Data received for category:', category, data);
                if (data && ((data.results && data.results.length > 0) || (category === 'Music' && data.tracks && data.tracks.items && data.tracks.items.length > 0))) {
                    if (category === "Music") {
                        displayResultsMusics(data.tracks, category); // Perhatikan perubahan ini
                    } else {
                        displayResults(data, category);
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

    function displayResults(results, category) {
        const categoryHeader = document.createElement('h4');
        categoryHeader.textContent = category;
        categoryHeader.style.color = 'white';
        suggestions.appendChild(categoryHeader);

        // Untuk kategori Movies dan TV
        if (results.total_results > 0) {
            // Tampilkan hasil movies atau tv
            displaySuggestions(results.results);
        } else {
            displayNotFound(category);
        }
    }


    function displayResultsMusics(tracks, category) {
        const categoryHeader = document.createElement('h4');
        categoryHeader.textContent = category;
        categoryHeader.style.color = 'white';
        suggestions.appendChild(categoryHeader);

        console.log("ini trakcs lagu", tracks);

        if (tracks && tracks.items && tracks.items.length > 0) {
            displaySuggestions(tracks.items);
        } else {
            displayNotFound(category);
        }
    }


    function displayNotFound(category) {
        const categoryHeader = document.createElement('h4');
        categoryHeader.textContent = category;
        categoryHeader.style.color = 'white';
        suggestions.appendChild(categoryHeader);

        const notFoundMessage = document.createElement('p');
        notFoundMessage.textContent = 'No data found in this category.';
        notFoundMessage.style.color = 'white';
        suggestions.appendChild(notFoundMessage);
    }

    function addSuggestionItem(item) {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.style.display = 'flex'; // Menggunakan Flexbox untuk layout

        const thumbnail = document.createElement('img');
        thumbnail.style.width = '100px'; // Atur lebar gambar
        thumbnail.style.height = 'auto'; // Atur tinggi gambar sesuai proporsi
        thumbnail.style.marginRight = '10px'; // Atur margin kanan untuk memberikan jarak antara gambar dan teks
        thumbnail.classList.add('thumbnail');

        const textContainer = document.createElement('div');
        textContainer.style.flex = '1'; // Bagian teks akan mengisi sisa ruang yang tersedia
        textContainer.style.color = 'white';

        const title = document.createElement('h5');
        const albums = document.createElement('p'); // Menggunakan elemen <p> untuk nama albums
        const overview = document.createElement('h6'); // Menggunakan elemen <p> untuk overview

        if (item.poster_path) {
            thumbnail.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`; // Ganti dengan URL thumbnail yang sesuai
            thumbnail.alt = item.title;

            title.textContent = item.title;
            overview.textContent = item.overview;
        } else if (item.album && item.album.images && item.album.images.length > 0) {
            thumbnail.src = item.album.images[0].url; // Mengambil gambar pertama dari album
            thumbnail.alt = item.name;

            title.textContent = item.name;
            albums.textContent = item.album.name // Menampilkan nama album
            overview.textContent = item.artists.map(artist => artist.name).join(', '); // Menampilkan nama artis
        } else {
            return; // Jika tidak ada gambar atau informasi yang relevan, abaikan item ini
        }

        suggestionItem.appendChild(thumbnail);
        textContainer.appendChild(title);
        textContainer.appendChild(overview);
        suggestionItem.appendChild(textContainer);

        const dismissButton = document.createElement('button');
        dismissButton.textContent = 'Dismiss';
        dismissButton.classList.add('dismiss-button');
        dismissButton.addEventListener('click', function() {
            suggestionItem.remove(); // Hapus item suggestion ketika tombol Dismiss ditekan
        });
        suggestionItem.appendChild(dismissButton);

        suggestions.appendChild(suggestionItem);
    }

    // Fungsi untuk menampilkan suggestion
    function displaySuggestions(suggestionData) {
        suggestionData.forEach(item => {
            addSuggestionItem(item);
        });
    }
});