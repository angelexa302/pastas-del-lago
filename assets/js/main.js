// Pastas del Lago — script principal del sitio
// Única función: activar la librería externa de animaciones AOS,
// que es requisito del proyecto (animación con librería externa).

document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) {
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
    });
  }
});
