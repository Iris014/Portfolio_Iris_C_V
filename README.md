# Portafolio Profesional - Iris C. V.

Portafolio web moderno, responsivo y accesible creado para presentar habilidades profesionales y proyectos como Desarrolladora Front-End.

## 🚀 Características

- **Diseño Moderno**: Tema oscuro con degradados cyan/azul y morado/fucsia
- **100% Responsivo**: Adaptado para móvil, tablet y escritorio
- **Accesibilidad (A11y)**: Modos sensoriales, navegación por teclado, contraste adaptativo
- **Interactividad JavaScript**: Animaciones, efectos de scroll, toggle de temas
- **HTML5 Semántico**: Estructura limpia y optimizada para SEO
- **CSS3 Moderno**: Variables CSS, Flexbox, Grid, Glassmorphism
- **Sin dependencias externas**: Sin Bootstrap, sin Google Fonts, 100% CSS puro

## 📁 Estructura del Proyecto

```
Portfolio_Iris_C_V/
├── index.html              # Estructura HTML principal
├── static/
│   ├── css/
│   │   └── style.css      # Hoja de estilos CSS
│   └── js/
│       └── script.js      # Interactividad JavaScript
└── README.md              # Este archivo
```

## 🎨 Personalización

### Información Personal
Edita el archivo `index.html` para actualizar:
- Tu nombre y título profesional
- Descripción personal
- Ubicación y disponibilidad
- Enlaces de contacto (email, LinkedIn, GitHub)

### Proyectos
En la sección `#proyectos` del `index.html`, actualiza:
- Nombres de proyectos
- Descripciones
- Tecnologías utilizadas
- Enlaces a demos y repositorios
- Imágenes (reemplaza los placeholders con tus capturas)

### Video
Reemplaza el placeholder en la sección `#video` con tu video:
```html
<!-- Opción A: Video de YouTube -->
<iframe width="100%" height="315" src="https://www.youtube.com/embed/TU_VIDEO_ID" frameborder="0" allowfullscreen></iframe>

<!-- Opción B: Video local -->
<video controls width="100%">
  <source src="tu-video.mp4" type="video/mp4">
</video>
```

### Colores y Tema
Edita las variables CSS en `static/css/style.css`:
```css
:root {
    --primary: #00d4ff;        /* Color principal cyan */
    --secondary: #b829dd;      /* Color secundario morado */
    --bg-dark: #0a0e27;        /* Fondo oscuro */
    /* ... más variables */
}
```

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño responsivo, animaciones, variables CSS
- **JavaScript (ES6+)**: Interactividad, manipulación del DOM
- **System Fonts**: Tipografías del sistema (sin conexiones externas)

## 🌐 Despliegue con GitHub Pages

1. **Sube tu repositorio a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/portfolio.git
   git push -u origin main
   ```

2. **Activa GitHub Pages**:
   - Ve a la configuración del repositorio en GitHub
   - Navega a "Pages" en el menú lateral
   - En "Source", selecciona "Deploy from a branch"
   - Elige "main" como rama y "/ (root)" como directorio
   - Haz clic en "Save"

3. **Tu sitio estará disponible en**:
   ```
   https://tu-usuario.github.io/portfolio/
   ```

## 🎯 Modos Sensoriales

El portafolio incluye tres modos sensoriales para accesibilidad:

1. **Estándar**: Modo normal con todos los efectos visuales
2. **Calmado**: Reduce contraste y saturación para menor sobrecarga sensorial
3. **Alto Contraste**: Aumenta contraste para mejor legibilidad

Actívalos con el botón flotante 🎨 o presionando `Ctrl/Cmd + K`.

## 📱 Responsividad

El diseño se adapta automáticamente a:
- 📱 Móvil (< 480px)
- 📲 Tablet (481px - 768px)
- 💻 Escritorio (> 768px)

## ♿ Accesibilidad

- Navegación por teclado (Tab, Enter, Escape)
- Atributos ARIA para lectores de pantalla
- Estados de foco visibles
- Soporte para prefers-reduced-motion
- Modos de alto contraste

## 📝 Checklist antes de entregar

- [ ] Actualizar toda la información personal
- [ ] Reemplazar placeholders de proyectos con información real
- [ ] Agregar enlace a tu perfil de LinkedIn
- [ ] Agregar tu correo electrónico profesional
- [ ] Subir/insertar tu video de presentación
- [ ] Actualizar enlaces a GitHub de tus proyectos
- [ ] Probar en diferentes dispositivos y navegadores
- [ ] Verificar accesibilidad (navegación por teclado)
- [ ] Desplegar en GitHub Pages

## 🛠️ Desarrollo Local

Para ver el portafolio localmente:

1. Con Python 3:
   ```bash
   python -m http.server 8000
   ```

2. Con Node.js (usando http-server):
   ```bash
   npx http-server
   ```

3. Simplemente abre `index.html` en tu navegador

## 🎨 Notas sobre el Diseño

- **Sin dependencias externas**: No se usan frameworks ni librerías externas
- **CSS puro**: Todo el estilo está escrito en CSS nativo
- **System fonts**: Se usan las tipografías del sistema para mejor rendimiento y privacidad
- **Variables CSS**: Facilitan la personalización del tema
- **Responsive design**: Mobile-first approach con media queries

## 📄 Licencia

Este portafolio fue creado por Iris C. V. durante el proceso de formación en Skillnest.

---

© 2026 Iris C. V. · Creado con HTML, CSS y JavaScript
