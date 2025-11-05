const mobile_menu = document.querySelector('.mobile-menu');
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const overlay = document.querySelector('.overlay');

// function to open menu 
const openMenu = () => {
    mobile_menu.style.display = 'block';
    overlay.style.display = 'block';
    mobile_menu.style.width = '80%'
}

// function to close menu 
const closeMenu = () => {
    mobile_menu.style.display = 'none';
    overlay.style.display = 'none';
}

// apply open and close menu functions
menuOpen.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);