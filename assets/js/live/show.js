// Fungsi async untuk mengambil dan menampilkan data acara TV
async function fetchAndDisplayTvShows() {
  try {
    const response = await fetch('https://stellar.febrian.id/lite/cinema/tv');
    const data = await response.json();
    console.log('Data tv:', data);

    const results = data.tv;
    let html = '';
    const modalHtmlArray = [];

    for (const tv_show of results) {
      console.log('Processing tv:', tv_show);
      html += `
        <div class="swiper-slide">
          <img src="${tv_show.poster_path}" class="thumbnail">
          <div class="btn-tv">
            <button type="button" class="btntv btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop${tv_show.id}" data-image-src="${tv_show.poster_path}" data-title="${tv_show.title}" id="btn2">WATCH</button>
          </div>
        </div>
      `;

      try {
        const detailResponse = await fetch(`https://stellar.febrian.id/tv/${tv_show.id}`);
        const detail_tv = await detailResponse.json();
        let episode_html = '';
        detail_tv.seasons.episodes.forEach((episode, index) => {
          episode_html += `<li><button type="button" class="btn btn-secondary"><!---EPISODE ${index + 1}:--> ${episode.name}</button></li>`;
        });

        modalHtmlArray.push(`
        <div class="modal fade" id="staticBackdrop${tv_show.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="embed-responsive-tv">
              <div style="text-align: center;">
              <img src="https://image.tmdb.org/t/p/w500${detail_tv.poster_path}" 
                   alt="Poster Image" 
                   width="470" 
                   height="300" 
                   style="display: block; margin: auto;">
              </div>
            
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h2 class="text-episode">Total Episode: ${detail_tv.seasons.episodes.length} </h2>
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
        `);
      } catch (error) {
        console.error(`Error fetching tv show details for tv show ID ${tv_show.id}:`, error);
      }
    }

    console.log('HTML untuk daftar tv:', html);
    document.getElementById('tv-data').insertAdjacentHTML('afterend', html);
    document.getElementById('tv-data').remove();

    const modal_html = modalHtmlArray.join('');
    document.getElementById('modal-tv').insertAdjacentHTML('afterend', modal_html);
    document.getElementById('modal-tv').remove();
    console.log('Modal HTML untuk semua tv:', modal_html);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Panggil fungsi untuk menjalankan
fetchAndDisplayTvShows();
