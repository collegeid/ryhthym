// Siswo Adi Nugroho dataset untuk bagian Music
// Fungsi async untuk mengambil dan menampilkan data musik
async function fetchAndDisplayMusic() {
    try {
        const response = await fetch('https://stellar.febrian.id/lite/albums/musics');
        const data = await response.json();
        console.log('Data music:', data);

        const results = data.albums;
        let cardsHtml = '';
        let listHtml = '';

        for (const music of results) {
            console.log('Processing music:', music);
            try {
                const detailResponse = await fetch(`https://stellar.febrian.id/check/album/${music.id_albums}`);
                const detail_music = await detailResponse.json();
                console.log('Detail music:', detail_music);

                // Tambahkan detail musik ke cards HTML
                cardsHtml += `
                    <div id="cards-music" class="swiper-slide">
                        <img src="${detail_music.images[0].url}" class="music-item" alt="${detail_music.name}">
                        <div class="hover-card">
                            <div class="hover-card-header">
                                <img src="${detail_music.images[0].url}" class="music-item" alt="${detail_music.name}">
                                <div class="hover-card-warp-btn">
                                    <button>
                                        <i class="bi bi-play-fill"></i>
                                    </button>
                                   <!--
                                    <button>
                                        <i class="bi bi-bookmark-plus-fill"></i>
                                    </button>
                                    -->
                                </div>
                            </div>
                            <div class="hover-card-body">
                                <h4 style="color: white;">${detail_music.name}</h3>
                                <h4 style="color: #1DB954;">${detail_music.artists[0].name}</h4>
                                <div class="hover-card-info">
                                    <p>
                                        <i class="bi bi-star-fill"></i> ${detail_music.popularity}
                                    </p>
                                    <p>${new Date(detail_music.release_date).getFullYear()}</p>
                                </div>
                                <p>${detail_music.label || 'No label name available.'}</p>
                                <a href="/">more info ></a>
                            </div>
                        </div>
                    </div>`;

                // Jika ada lebih dari satu trek, buat pemutar audio untuk setiap trek
                detail_music.tracks.items.forEach((track) => {
                    // Pastikan URL pratinjau tidak null
                    if (track.preview_url) {
                        console.log(`Preview URL for track ID ${track.id}:`, track.preview_url);
                        listHtml += `
                            <li class="audio-item">
                                <p>${track.name} - ${detail_music.artists[0].name}</p>
                                <div class="audio-item-btn">
                                    <button id="play-button-${track.id}" onclick="playAudio(event, '${track.preview_url}', 'audio-preview-${track.id}', 'play-button-${track.id}')">
                                        <i class="bi bi-play-fill"></i>
                                    </button>
                                    <button>
                                        <i class="bi bi-bookmark-plus-fill"></i>
                                    </button>
                                </div>
                                <audio id="audio-preview-${track.id}" src="${track.preview_url}" preload="none"></audio>
                            </li>`;
                    } else {
                        console.log(`Preview not available for track ID ${track.id}`);
                    }
                });

            } catch (error) {
                console.error(`Error fetching music details for album ID ${music.id_albums}:`, error);
            }
        }

        // Memasukkan markup HTML untuk cards musik
        document.getElementById('music-data').insertAdjacentHTML('afterend', cardsHtml);

        // Memasukkan markup HTML untuk list popup
        document.getElementById('modal-music').insertAdjacentHTML('afterend', listHtml);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function playAudio(event, previewUrl, audioId, playButtonId) {
    const audioPlayer = document.getElementById(audioId);
    const playButton = document.getElementById(playButtonId);

    if (!previewUrl) {
        alert('Preview not available for this track.');
        return;
    }

    if (audioPlayer.src !== previewUrl) {
        audioPlayer.src = previewUrl;
    }

    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.innerHTML = '<i class="bi bi-pause-fill"></i>'; // Ubah ikon tombol menjadi pause
    } else {
        audioPlayer.pause();
        playButton.innerHTML = '<i class="bi bi-play-fill"></i>'; // Ubah ikon tombol menjadi play
    }

    // Menghentikan penyebaran event klik
    event.stopPropagation();
}

// Panggil fungsi untuk menjalankan
fetchAndDisplayMusic();
