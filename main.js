document.addEventListener("DOMContentLoaded", function() {
    // Código para reproducir videos
    var videos = document.querySelectorAll(".header-video");
    var currentVideoIndex = 0;

    function playNextVideo() {
        videos[currentVideoIndex].pause();
        videos[currentVideoIndex].classList.remove("active");
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        videos[currentVideoIndex].classList.add("active");
        videos[currentVideoIndex].currentTime = 0;
        videos[currentVideoIndex].play();
        setTimeout(playNextVideo, 7000);
    }

    videos[currentVideoIndex].classList.add("active");
    videos[currentVideoIndex].play();
    setTimeout(playNextVideo, 7000);

    const navToggle = document.getElementById('toggleMenu');
    const closeMenu = document.getElementById('closeMenu');
    const submenu = document.querySelector('.nav-menu');
    const submenuBg = document.querySelector('.submenu-bg');

    navToggle.addEventListener('click', () => {
        submenu.classList.toggle("nav-menu_visible");
        submenuBg.style.display = submenu.classList.contains("nav-menu_visible") ? 'block' : 'none';
        navToggle.setAttribute("aria-label", submenu.classList.contains("nav-menu_visible") ? "cerrar menú" : "abrir menú");
    });

    closeMenu.addEventListener('click', () => {
        submenu.classList.remove("nav-menu_visible");
        submenuBg.style.display = 'none';
        navToggle.setAttribute("aria-label", "abrir menú");
    });

    // Cerrar el menú cuando se haga clic en el fondo
    submenuBg.addEventListener('click', () => {
        submenu.classList.remove("nav-menu_visible");
        submenuBg.style.display = 'none';
        navToggle.setAttribute("aria-label", "abrir menú");
    });
    });

