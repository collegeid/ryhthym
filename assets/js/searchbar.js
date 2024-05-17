// integrasi searchbar by febri
document.addEventListener('DOMContentLoaded', function () {
    $("#suggestions").hide()
   const searchInput = document.getElementById('searchInput');
   const searchButton = document.getElementById('searchButton');
   const suggestionsContainer = document.getElementById('suggestionsContainer');
   const suggestions = document.getElementById('suggestions');

   searchButton.addEventListener('click', function () {
       const query = searchInput.value.trim();
       if (query !== '') {
           search(query);
           suggestionsContainer.style.zIndex = '1500'; // Mengatur letak index container suggestions
           $("#suggestions").show()
       }
   });

   function search(query) {
       suggestions.innerHTML = ''; // Bersihkan suggestions

       searchInEndpoint('/tv/find/' + query, 'TV Shows');
       searchInEndpoint('/movies/find/' + query, 'Movies');
       searchInEndpoint('/tracks/find/' + query, 'Music');
   }

   function searchInEndpoint(endpoint, category) {
       fetch('https://rhytym.gigalixirapp.com' + endpoint)
           .then(response => response.json())
           .then(data => {
               if (data && data.results && data.results.length > 0) {
                   displayResults(data, category);
                   console.log(data)
                   console.log(category)
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

       if (category === 'Music') { // Jika kategori adalah Music
           if (results.tracks && results.tracks.total > 0) {
               // Tampilkan hasil track
               displaySuggestions(results.tracks.items);
           } else {
               displayNotFound(category);
           }
       } else { // Untuk kategori Movies dan TV


         if (results.total_results > 0) {
               // Tampilkan hasil movies atau tv
               displaySuggestions(results.results);
           } else {
               displayNotFound(category);
           }


          
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

// Pengecekan apakah poster_path ada atau null
if (item.poster_path) {
const thumbnail = document.createElement('img');
thumbnail.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`; // Ganti dengan URL thumbnail yang sesuai
thumbnail.alt = item.title;
thumbnail.style.width = '100px'; // Atur lebar gambar
thumbnail.style.height = 'auto'; // Atur tinggi gambar sesuai proporsi
thumbnail.style.marginRight = '10px'; // Atur margin kanan untuk memberikan jarak antara gambar dan teks
thumbnail.style.color = 'white';
thumbnail.classList.add('thumbnail');
suggestionItem.appendChild(thumbnail);
}

const textContainer = document.createElement('div');
textContainer.style.flex = '1'; // Bagian teks akan mengisi sisa ruang yang tersedia
textContainer.style.color = 'white';

const title = document.createElement('h3');
title.textContent = item.title;
textContainer.appendChild(title);

const overview = document.createElement('p'); // Menggunakan elemen <p> untuk overview
overview.textContent = item.overview;
textContainer.appendChild(overview);

suggestionItem.appendChild(textContainer);

const dismissButton = document.createElement('button');
dismissButton.textContent = 'Dismiss';
dismissButton.classList.add('dismiss-button');
dismissButton.addEventListener('click', function () {
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