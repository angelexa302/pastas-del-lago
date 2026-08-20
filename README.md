# 🍝 Pastas del Lago

Sitio web estático de 5 páginas para **Pastas del Lago**, una fábrica de pastas artesanales ficticia ubicada en **Los Antiguos, Santa Cruz** (Patagonia Argentina), a orillas del Lago Buenos Aires. Proyecto final de la carrera de Diseño Web en Coderhouse.

🔗 **Sitio en producción:** _https://angelexa302.github.io/pastas-del-lago/pages/productos.html_
📂 **Repositorio:** _https://github.com/angelexa302/pastas-del-lago.git_

## Sobre el proyecto

El sitio combina la identidad de una fábrica de pastas artesanal con el paisaje y los productos típicos de Los Antiguos, especialmente la **cereza patagónica** (la localidad es sede de la Fiesta Nacional de la Cereza). Todas las ilustraciones son SVG originales creados para este proyecto.

## Páginas

| Página | Archivo | Descripción |
|---|---|---|
| Inicio | `index.html` | Hero, proceso de elaboración, productos destacados y testimonios |
| Nosotros | `pages/nosotros.html` | Historia de la fábrica, línea de tiempo y valores |
| Productos | `pages/productos.html` | Catálogo filtrable por categoría (rellenas, secas, salsas) |
| Galería | `pages/galeria.html` | Galería tipo masonry del obrador y el equipo |
| Contacto | `pages/contacto.html` | Formulario de pedidos, horarios y mapa |

## Stack técnico

- **HTML5** semántico
- **SCSS** con arquitectura de partials (`@use`), variables, mixins con parámetros, `@extend`/placeholders y nesting
- **Bootstrap 5** (navbar responsiva, grid, formularios) vía CDN, estilado desde SCSS
- **AOS** (Animate On Scroll) para animaciones al hacer scroll
- Animaciones nativas en SCSS con `transition` y `@keyframes`
- Diseño 100% responsivo (mobile / tablet / desktop), sin scroll horizontal

## Estructura de carpetas

```
pastas-del-lago/
├── index.html
├── pages/
│   ├── nosotros.html
│   ├── productos.html
│   ├── galeria.html
│   └── contacto.html
├── scss/
│   ├── abstracts/       (_variables.scss, _mixins.scss)
│   ├── base/            (_reset.scss, _typography.scss)
│   ├── components/      (_navbar.scss, _buttons.scss, _cards.scss, _sello.scss, _footer.scss, _forms.scss)
│   ├── layout/           (_hero.scss, _secciones.scss)
│   ├── utils/            (_animaciones.scss, _responsive.scss)
│   ├── pages/            (_home.scss, _nosotros.scss, _productos.scss, _galeria.scss, _contacto.scss)
│   └── main.scss         (solo @use, sin código propio)
├── styles/
│   └── main.css          (CSS compilado)
├── assets/
│   ├── img/               (ilustraciones SVG propias)
│   ├── icons/              (íconos de proceso)
│   └── js/main.js
├── package.json
└── README.md
```

## Cómo compilar el SCSS localmente

```bash
npm install
npm run sass:build     # compila una vez
npm run sass:watch     # recompila automáticamente al guardar cambios
```

El CSS ya está compilado en `styles/main.css`, así que el sitio funciona directamente abriendo `index.html`, sin necesidad de correr nada.

## Despliegue

El sitio es completamente estático, por lo que se puede desplegar arrastrando la carpeta a **Netlify** (Netlify Drop) o importando el repositorio en **Vercel**. Todas las rutas de `pages/` usan rutas relativas (`../assets`, `../styles`), por lo que funcionan igual en local y en producción.
