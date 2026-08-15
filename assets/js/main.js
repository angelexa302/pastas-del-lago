// Pastas del Lago — script principal del sitio

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa las animaciones de scroll (librería AOS)
  if (window.AOS) {
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
    });
  }

  // Sombra en la navbar al hacer scroll
  const navbar = document.querySelector('.navbar-pastas');
  if (navbar) {
    const alScrollear = () => {
      navbar.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    alScrollear();
    window.addEventListener('scroll', alScrollear, { passive: true });
  }

  // Filtro de categorías en la página de productos
  const botonesFiltro = document.querySelectorAll('[data-filtro]');
  const productos = document.querySelectorAll('[data-categoria]');

  botonesFiltro.forEach((boton) => {
    boton.addEventListener('click', () => {
      botonesFiltro.forEach((b) => b.classList.remove('activo'));
      boton.classList.add('activo');
      const filtro = boton.getAttribute('data-filtro');

      productos.forEach((producto) => {
        const coincide = filtro === 'todos' || producto.getAttribute('data-categoria') === filtro;
        producto.closest('[data-item-producto]').style.display = coincide ? '' : 'none';
      });
    });
  });

  // Validación básica del formulario de contacto (feedback nativo de Bootstrap)
  const formularioContacto = document.querySelector('.form-pastas');
  if (formularioContacto) {
    formularioContacto.addEventListener('submit', (evento) => {
      if (!formularioContacto.checkValidity()) {
        evento.preventDefault();
        evento.stopPropagation();
      } else {
        evento.preventDefault();
        const boton = formularioContacto.querySelector('button[type="submit"]');
        boton.textContent = '¡Pedido enviado!';
        boton.disabled = true;
      }
      formularioContacto.classList.add('was-validated');
    });
  }
});
