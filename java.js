document.addEventListener('DOMContentLoaded', () => {
  // Menü Toggle (Mobil Menü)
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden'); // Menü açma/kapama
    });
  }

  // Dropdown menü toggle işlevi
  const dropdownButton = document.querySelector('a[href="hizmetler.html"]'); // Hizmetler menüsündeki link
  const dropdownMenu = document.querySelector('ul'); // Dropdown menü (ul)
  
  if (dropdownButton && dropdownMenu) {
    dropdownButton.addEventListener('click', (e) => {
      e.preventDefault(); // Menü linkine gitmesini engelle
      dropdownMenu.classList.toggle('hidden'); // Dropdown menüsünü aç/kapa
    });
  }

  // Sayfada tıklama ile dropdown'ı kapatma
  document.addEventListener('click', function (e) {
    if (dropdownMenu && dropdownButton && !dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.add('hidden'); // Dropdown menüsünü gizle
    }
  });
  
  // ScrollReveal animasyonları
  if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('.service-card', {
      delay: 200,
      distance: '100px',
      origin: 'bottom',
      interval: 500,
      duration: 2000,
    });
  }

  // Slideshow görsel geçişi
  const images = ["photos/mustafa.JPG", "photos/mustafa2.jpg"];
  let currentIndex = 0;
  const imageElement = document.getElementById("slideshow-image");

  if (imageElement) {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      imageElement.src = images[currentIndex];
    }, 5000);
  }
});
