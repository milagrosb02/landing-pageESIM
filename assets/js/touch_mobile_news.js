const carrusel = document.querySelector('.carrusel-noticias');

if (carrusel) {
  carrusel.addEventListener('touchstart', () => {
    carrusel.style.animationPlayState = 'paused';
  });

  carrusel.addEventListener('touchend', () => {
    carrusel.style.animationPlayState = 'running';
  });
}
