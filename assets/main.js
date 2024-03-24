// JavaScript file untuk proyek Rhythm Movie TV


// Ahmad Faiz bertanggung jawab untuk bagian Film
// Branch: FILM




// Siswo Adi Nugroho bertanggung jawab untuk bagian Music
// Branch: MUSIC




// Haikal Ihza bertanggung jawab untuk bagian TV Show
// Branch: TV




// Jarwo bertanggung jawab untuk bagian Trending Banner
// Branch: TRENDING





// Febri bertanggung jawab untuk bagian Base Layout dan Sidebar
// Branch: BASE, SIDEBAR



function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var mainContent = document.querySelector('.main-content');
    sidebar.classList.toggle('show-sidebar');
    mainContent.classList.toggle('show-sidebar'); // Tambahkan class pada main-content saat toggle
  }