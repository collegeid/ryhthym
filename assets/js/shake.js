// JavaScript untuk menambahkan animasi ke kontainer
document.addEventListener('DOMContentLoaded', (event) => {
    // Dapatkan semua tombol navigasi
    const navButtons = document.querySelectorAll('.sidebar .nav-link');
  
    // Dapatkan semua kontainer
    const containers = {
      trending: document.querySelector('.slider'),
      film: document.querySelector('.card-film'),
      tv: document.querySelector('.card-tv'),
      music: document.querySelector('.card-music')
    };
  
    // Fungsi untuk menghapus kelas 'active-container' dari semua kontainer
    const removeActiveClasses = () => {
      Object.values(containers).forEach(container => {
        container.classList.remove('active-container');
      });
    };
  
    // Tambahkan event click ke setiap tombol navigasi
    navButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        // Cegah perilaku default anchor
        e.preventDefault();
  
        // Hapus kelas 'active-container' dari semua kontainer
        removeActiveClasses();
  
        // Tambahkan kelas 'active-container' ke kontainer yang sesuai
        const containerType = button.getAttribute('data-container-type');
        if (containers[containerType]) {
          containers[containerType].classList.add('active-container');
        }
  
        // Opsional: Hapus kelas 'active-container' setelah beberapa waktu
        setTimeout(() => {
          containers[containerType].classList.remove('active-container');
        }, 2000); // Hapus setelah 2 detik
      });
    });
  });
  