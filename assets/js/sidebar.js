// JavaScript untuk membuat sidebar dinamis
document.addEventListener('DOMContentLoaded', (event) => {
    // Dapatkan semua elemen nav-link
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
  
    // Fungsi untuk menghapus kelas 'active' dari semua nav-link
    const removeActiveClasses = () => {
      navLinks.forEach(link => {
        link.classList.remove('active');
        link.style.color = 'white'; // Tambahkan ini untuk mengubah teks menjadi putih
      });
    };
  
    // Tambahkan event click ke setiap nav-link
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Cegah perilaku default anchor
        e.preventDefault();
  
        // Hapus kelas 'active' dari semua nav-link
        removeActiveClasses();
  
        // Tambahkan kelas 'active' ke nav-link yang diklik
        link.classList.add('active');
        link.style.color = 'blue'; // Tambahkan ini untuk mengubah teks menjadi biru
      });
    });
  });
  