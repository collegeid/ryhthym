// JavaScript file untuk proyek Rhythm Movie TV


// Ahmad Faiz bertanggung jawab untuk bagian Film
// Branch: FILM




// Siswo Adi Nugroho bertanggung jawab untuk bagian Music
// Branch: MUSIC




// Haikal Ihza bertanggung jawab untuk bagian TV Show
// Branch: TV




// Jarwo bertanggung jawab untuk bagian Trending Banner
// Branch: TRENDING
// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:5,
    nav:true,
	  autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
	    "<i class='fa fa-angle-left'></i>",
	    "<i class='fa fa-angle-right'></i>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});




// Febri bertanggung jawab untuk bagian Base Layout dan Sidebar
// Branch: BASE, SIDEBAR



function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var mainContent = document.querySelector('.main-content');
    sidebar.classList.toggle('show-sidebar');
    mainContent.classList.toggle('show-sidebar'); // Tambahkan class pada main-content saat toggle
  }