document.addEventListener("DOMContentLoaded", function() {
    var videos = document.querySelectorAll(".header-video"); // Obtener todos los videos
    var currentVideoIndex = 0; // Índice del video actual

    function playNextVideo() {
        // Pausar el video actual
        videos[currentVideoIndex].pause();
        // Ocultar el video actual
        videos[currentVideoIndex].classList.remove("active");
        // Incrementar el índice o volver al primer video si estamos en el último
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        // Mostrar y reproducir el próximo video
        videos[currentVideoIndex].classList.add("active");
        videos[currentVideoIndex].currentTime = 0; // Reiniciar el tiempo del video
        videos[currentVideoIndex].play(); // Reproducir el próximo video

        // Reproducir el próximo video después de 7 segundos
        setTimeout(playNextVideo, 7000);
    }

    // Reproducir el primer video
    videos[currentVideoIndex].classList.add("active");
    videos[currentVideoIndex].play(); // Reproducir el primer video

    // Reproducir el siguiente video después de 7 segundos
    setTimeout(playNextVideo, 7000);

    // Código para el menú móvil
    const menuIcon = document.getElementById('mobile-menu-Icon');
    const submenu = document.getElementById('mobile-submenu');

    // Event listener para el botón del menú móvil
    menuIcon.addEventListener('click', function() {
        // Alternar la clase 'active' para mostrar u ocultar el submenú
        submenu.classList.toggle('active');
    });
});
