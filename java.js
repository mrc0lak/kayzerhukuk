function toggleDropdown() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('hidden');
  }

  document.addEventListener('click', function (e) {
    const button = document.querySelector('button[onclick="toggleDropdown()"]');
    const menu = document.getElementById('dropdownMenu');
    if (!button.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add('hidden');
    }
  });
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    ScrollReveal().reveal('.service-card', {
      delay: 200,
      distance: '100px',
      origin: 'bottom',
      interval: 500,
      duration: 2000,
    });
