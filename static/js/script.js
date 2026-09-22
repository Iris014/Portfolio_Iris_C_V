console.log("Conexión exitosa con JavaScript");

const btnMenu = document.getElementById('btn-menu');
const menuList = document.getElementById('lista-enl');
const menuLinks = document.querySelectorAll('.menu-item-link');
const toggleMenu = () => {
    menuList.classList.toggle('is-active');
    btnMenu.classList.toggle('is-active');
};
btnMenu.addEventListener('click', toggleMenu);
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuList.classList.contains('is-active')) {
            toggleMenu();
        }
    });
});

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
});