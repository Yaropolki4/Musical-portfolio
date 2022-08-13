let menu = document.querySelector('.header-nav-menu');
let button = document.querySelector('.menu-icon')
button.addEventListener('click', function(event) {
    menu.classList.toggle('open');
});