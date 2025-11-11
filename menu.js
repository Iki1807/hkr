const menu = document.getElementById('burguer-menu');
const nav = document.querySelector('nav ul');
menu.addEventListener('click', () => {
    nav.classList.toggle('show');
});