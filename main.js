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
    const menuIcon = document.getElementById('toggleMenu');
    const menuLateral = document.querySelector('.menu-lateral');

    // Event listener para el botón del menú desplegable
    menuIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Evitar que el clic se propague al contenedor padre

        // Alternar la clase 'activo' para mostrar u ocultar el menú lateral
        menuLateral.classList.toggle('activo');
    });

    // Event listener para ocultar el menú desplegable al hacer clic fuera de él
    document.addEventListener('click', function() {
        // Ocultar el menú desplegable si está abierto
        if (menuLateral.classList.contains('activo')) {
            menuLateral.classList.remove('activo');
        }
    });

    // Event listener para evitar que el clic en el menú desplegable se propague al contenedor padre
    menuLateral.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
