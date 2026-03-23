document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-tab');
            console.log("Cambiando a la pestaña: " + targetId); // Esto te dirá en la consola si funciona

            // 1. Quitar clases active de botones
            tabBtns.forEach(b => b.classList.remove('active'));
            // 2. Ocultar todos los contenidos
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });

            // 3. Activar el botón actual
            this.classList.add('active');
            // 4. Mostrar el contenido con el ID correspondiente
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
                targetContent.style.display = 'block';
            }
        });
    });
});


    const audio = document.getElementById('main-audio');
    const playBtn = document.getElementById('play-pause');

    if (playBtn) {
        playBtn.onclick = () => {
            if (audio.paused) {
                audio.play().catch(error => {
                    console.error("Error al reproducir:", error);
                    alert("Verifica que el nombre del archivo de audio sea correcto.");
                });
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                audio.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        };
    }