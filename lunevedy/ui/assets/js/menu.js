// Check initial viepwort width
document.addEventListener("DOMContentLoaded", checkViewportWidth);

function checkViewportWidth() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (document.querySelector('.container-menu')) {
        const elemMenuList = document.querySelector('.container-menu');
        if (vw >= 1025) {
            elemMenuList.classList.add("menu-desktop");
            elemMenuList.classList.remove("menu-mobile");
        }
        else {
            elemMenuList.classList.add("menu-mobile");
            elemMenuList.classList.remove("menu-desktop");
        }
    }
}

// Monitor viepwort width
window.onresize = checkViewportWidth;

// Show/hide fly-out mobile menu -->

if (document.querySelector('.container-menu .item-icon')) {
    document.querySelector('.container-menu .item-icon').addEventListener('click', toggleMobileMenu);
}
  
function toggleMobileMenu() {
    //toggle hamburger icon
    const elemIcon = document.querySelector('.item-icon');
    const elemMenu = document.querySelector('.container-menu');
    const elemMenuList = document.querySelector('.container-menu ul');
    elemIcon.classList.toggle("change");
    const elemHTML = document.querySelector('html');

    // If fly-out menu is currently hidden, display it.
    if (elemIcon.classList.contains('change')) {
        elemMenuList.classList.add('mobile-display');
        elemMenu.classList.add('menu-on-scroll');
        elemHTML.classList.add('no-scroll');
    }    
    //if fly-out menu is currently open, close it.
    else {
        elemMenuList.classList.remove('mobile-display');
        elemHTML.classList.remove('no-scroll');
        elemMenu.classList.remove('menu-on-scroll');
    }
}

// On-scroll colours

if (document.querySelector('.container-menu')) {
    window.onscroll = function() {swapMenuStyle()};
}

if (document.querySelector('.container-menu')) {
    const el_menu = document.querySelector('.container-menu');
    const el_menu_onscroll = el_menu.offsetTop +300;
}

function swapMenuStyle() {
	if ( window.pageYOffset > el_menu_onscroll) {
		el_menu.classList.add("menu-on-scroll");
	} 
    else {
        el_menu.classList.remove("menu-on-scroll")
	}
}

// Check initial menu scroll position
if (document.querySelector('.container-menu')) {
    document.addEventListener("DOMContentLoaded", checkMenuScrollPosition);
}

function checkMenuScrollPosition() {
    var y = window.scrollY;
    if (y === 0) {
        const el_menu = document.querySelector('.container-menu');
        el_menu.classList.remove("menu-on-scroll")
    }
}