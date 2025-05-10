// Açılır dropdown menüsünü göster/gizle
function toggleDropdown() {
  const menu = document.getElementById('dropdownMenu');
  if (menu) menu.classList.toggle('hidden');
}

// Sayfa yüklendikten sonra tüm işlemleri yap
document.addEventListener('DOMContentLoaded', () => {
  // Mobil menü aç/kapat
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Sayfada tıklama ile dropdown'ı kapatma
  document.addEventListener('click', function (e) {
    const dropdownButton = document.querySelector('button[onclick="toggleDropdown()"]');
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu && dropdownButton && !dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.add('hidden');
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
    }, 10000);
  }
});
