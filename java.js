// Açılır dropdown menüsünü göster/gizle
function toggleDropdown() {
  const menu = document.getElementById('dropdownMenu');
  menu.classList.toggle('hidden');
}

// Sayfada tıklama ile dropdown menüyü kapatma
document.addEventListener('click', function (e) {
  const button = document.querySelector('button[onclick="toggleDropdown()"]');
  const menu = document.getElementById('dropdownMenu');
  if (menu && button && !button.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.add('hidden');
  }
});

// Mobil menüyü aç/kapat
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

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
