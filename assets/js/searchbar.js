document.addEventListener('DOMContentLoaded', function() {
    $("#suggestions").hide()
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const suggestionsContainer = document.getElementById('suggestionsContainer');
    const suggestions = document.getElementById('suggestions');
    const closeButton = document.querySelector('.close-button-suggestions');
    let typingTimer; // Timer untuk menunggu selesai mengetik
    const doneTypingInterval = 500; // Interval waktu setelah selesai mengetik

    function toggleCloseButtonVisibility() {
        const closeButton = document.querySelector('.close-button-suggestions');
        if (suggestionsContainer.style.display === 'none') {
            closeButton.style.display = 'none';
        } else {
            closeButton.style.display = 'block';
        }
    }
    // Pencarian saat input berubah
    searchInput.addEventListener('input', function() {
        clearTimeout(typingTimer); // Bersihkan timer sebelumnya
        const query = searchInput.value.trim();
        if (query !== '') {
            typingTimer = setTimeout(() => {
                clearSuggestions(); // Bersihkan hasil pencarian sebelumnya
                search(query);
                suggestionsContainer.style.zIndex = '1500'; // Setel indeks Z container suggestions
                $("#suggestions").show();
                toggleCloseButtonVisibility(true);
            }, doneTypingInterval);
        } else {
            clearSuggestions(); // Bersihkan hasil pencarian jika input kosong
            $("#suggestions").hide();
            toggleCloseButtonVisibility(false);
        }
    });

    // Pencarian saat tombol pencarian diklik
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query !== '') {
            clearSuggestions(); // Bersihkan hasil pencarian sebelumnya
            search(query);
            suggestionsContainer.style.zIndex = '1500'; // Setel indeks Z container suggestions
            $("#suggestions").show();
            toggleCloseButtonVisibility();
        }
    });

    function clearSuggestions() {
        suggestions.innerHTML = ''; // Bersihkan hasil pencarian sebelumnya
    }

    function search(query) {
        console.log('Searching for:', query);

        searchInEndpoint('/movies/find/' + query, 'Movies');
        searchInEndpoint('/tv/find/' + query, 'TV Shows');
        searchInEndpoint('/tracks/find/' + query, 'Music');
    }

    function searchInEndpoint(endpoint, category) {
        console.log('Fetching data from endpoint:', endpoint, 'for category:', category);

        fetch('https://vega.gigalixirapp.com' + endpoint)
            .then(response => {
                console.log('Response status:', response.status);
                return response.json();
            })
            .then(data => {
                console.log('Data received for category:', category, data);
                if (data && ((data.results && data.results.length > 0) || (category === 'Music' && data.tracks && data.tracks.items && data.tracks.items.length > 0))) {
                   if(category == "Music" ){
                    console.log
                    displayResultsMusic(data.tracks, category);
                   } else {
                    displayResults(data.results, category);
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

    function displayResultsMusic(tracks, category) {
        const hrElement = document.createElement('hr'); // Buat elemen hr
        hrElement.style.width = '50%'; // Atur lebar hr
        hrElement.style.margin = '60'; // Pusatkan hr
        suggestions.appendChild(hrElement); // Tambahkan hr ke suggestions
    
        const categoryHeader = document.createElement('h4');
        categoryHeader.textContent = category;
        categoryHeader.style.color = 'white';
        categoryHeader.style.textAlign = 'center'; // Menengahkan judul
        suggestions.appendChild(categoryHeader);

        const hrElementEnd = document.createElement('hr'); // Buat elemen hr
        hrElementEnd.style.width = '50%'; // Atur lebar hr
        hrElementEnd.style.margin = '20'; // Pusatkan hr
        suggestions.appendChild(hrElementEnd); // Tambahkan hr ke suggestions

        if (tracks.items && tracks.items.length > 0) {
            displaySuggestions(tracks.items);
        } else {
            displayNotFound(category);
        }
    }

    function displayResults(results, category) {
        const hrElement = document.createElement('hr'); // Buat elemen hr
        hrElement.style.width = '50%'; // Atur lebar hr
        hrElement.style.margin = '60'; // Pusatkan hr
        suggestions.appendChild(hrElement); // Tambahkan hr ke suggestions
    
        const categoryHeader = document.createElement('h4');
        categoryHeader.textContent = category;
        categoryHeader.style.color = 'white';
        categoryHeader.style.textAlign = 'center'; // Menengahkan judul
        suggestions.appendChild(categoryHeader);

        const hrElementEnd = document.createElement('hr'); // Buat elemen hr
        hrElementEnd.style.width = '50%'; // Atur lebar hr
        hrElementEnd.style.margin = '20'; // Pusatkan hr
        suggestions.appendChild(hrElementEnd); // Tambahkan hr ke suggestions
    
      if (results && results.length > 0) {
         // Tampilkan hasil movies atau tv
           displaySuggestions(results);
        } else {
          displayNotFound(category);
        }
    }
    function displayNotFound(category) {
        const hrElement = document.createElement('hr'); // Buat elemen hr
        hrElement.style.width = '50%'; // Atur lebar hr
        hrElement.style.margin = '70'; // Pusatkan hr
        suggestions.appendChild(hrElement); // Tambahkan hr ke suggestions
    
        const categoryHeader = document.createElement('h4');
        categoryHeader.textContent = category;
        categoryHeader.style.color = 'white';
        categoryHeader.style.textAlign = 'center'; // Menengahkan judul
        suggestions.appendChild(categoryHeader);
    
        const notFoundMessage = document.createElement('p');
        notFoundMessage.textContent = 'No data found in this category.';
        notFoundMessage.style.color = 'white';
        notFoundMessage.style.textAlign = 'center'; // Menengahkan pesan
        suggestions.appendChild(notFoundMessage);
    }
    

    function addSuggestionItem(item) {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.style.display = 'flex';

        const thumbnail = document.createElement('img');
        thumbnail.style.width = '100px';
        thumbnail.style.height = 'auto';
        thumbnail.style.marginRight = '10px';
        thumbnail.classList.add('thumbnail');

        const textContainer = document.createElement('div');
        textContainer.style.flex = '1';
        textContainer.style.color = 'white';

        const title = document.createElement('h5');
        const overview = document.createElement('h6');

        if (item.poster_path) {
            thumbnail.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
            thumbnail.alt = item.title;

            title.textContent = item.title;
            overview.textContent = item.overview;

        } else if (item.album && item.album.images && item.album.images.length > 0) {
            thumbnail.src = item.album.images[0].url;
            thumbnail.alt = item.name;

            title.textContent = item.name;
            overview.textContent = item.artists.map(artist => artist.name).join(', ');
        } else {
            return;
        }

        suggestionItem.appendChild(thumbnail);
        textContainer.appendChild(title);
        textContainer.appendChild(overview);
        suggestionItem.appendChild(textContainer);

        const dismissButton = document.createElement('button');
        dismissButton.textContent = 'Dismiss';
        dismissButton.classList.add('dismiss-button');
        dismissButton.addEventListener('click', function() {
            suggestionItem.remove();
            event.stopPropagation();
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

    // listener tombol close-button untuk menghilangkan suggestionsContainer dan close-button saat diklik
    closeButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Mencegah event click menyebar ke luar dari closeButton
        $("#suggestions").hide();
        this.style.display = 'none'; // Menyembunyikan close-button
    });
    
    // listener untuk menghilangkan suggestionsContainer dan close-button saat klik dilakukan di luar suggestionsContainer
    document.addEventListener('click', function(event) {
        const isClickInside = suggestionsContainer.contains(event.target) || searchInput.contains(event.target) || searchButton.contains(event.target);
        if (!isClickInside) {
            $("#suggestions").hide();
            closeButton.style.display = 'none'; // Menyembunyikan close-button
        }
    });
});
