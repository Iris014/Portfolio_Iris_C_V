document.addEventListener("DOMContentLoaded", () => {
    console.log("Conexión exitosa con JavaScript - Portafolio Iris C. V.");

    // 1. MENÚ RESPONSIVO
    const btnMenu = document.getElementById("btn-menu");
    const listaEnl = document.getElementById("lista-enl");
    const enlMenu = document.querySelectorAll(".enl-menu");

    if (btnMenu && listaEnl) {
        btnMenu.addEventListener("click", () => {
            const estaAbierto = listaEnl.classList.toggle("activo");
            btnMenu.setAttribute("aria-expanded", estaAbierto);
        });

        enlMenu.forEach(enl => {
            enl.addEventListener("click", () => {
                listaEnl.classList.remove("activo");
                btnMenu.setAttribute("aria-expanded", "false");
            });
        });
    }

    // 2. CAMBIO DE TEMA
    const btnTema = document.getElementById("btn-tema");
    const icoTema = document.getElementById("ico-tema");
    const body = document.body;

    if (btnTema && icoTema) {
        btnTema.addEventListener("click", () => {
            const temaActual = body.getAttribute("data-tema");
            const nuevoTema = temaActual === "claro" ? "oscuro" : "claro";

            body.setAttribute("data-tema", nuevoTema);
            icoTema.textContent = nuevoTema === "claro" ? "🌙" : "☀️";
        });
    }

    // 3. ANIMACIÓN AL HACER SCROLL
    const elementosAnimar = document.querySelectorAll(
        ".t-interes, .t-habilidad, .t-proyecto, .t-ejercicio, .item-contacto"
    );

    const observadorScroll = new IntersectionObserver(
        (entradas, observador) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visible");
                    observador.unobserve(entrada.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    elementosAnimar.forEach(elem => {
        elem.classList.add("fade-in");
        observadorScroll.observe(elem);
    });
});