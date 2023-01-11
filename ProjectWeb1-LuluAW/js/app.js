const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Menampilkan Menu Mobile
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Untuk menampilkan menu aktif saat scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const berandaMenu = document.querySelector('#beranda-page');
  const tentangkamiMenu = document.querySelector('#tentangkami-page');
  const produkMenu = document.querySelector('#produk-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // Untuk menambahkan kelas 'highlight' class ke item menu 
  if (window.innerWidth > 960 && scrollPos < 600) {
    berandaMenu.classList.add('highlight');
    tentangkamiMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    tentangkamiMenu.classList.add('highlight');
    berandaMenu.classList.remove('highlight');
    produkMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    produkMenu.classList.add('highlight');
    tentangkamiMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Untuk menutup menu mobile saat mengklik item menu
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};
