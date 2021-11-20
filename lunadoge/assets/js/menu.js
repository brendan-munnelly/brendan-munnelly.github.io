
// Detect click of option is within mobile menu
const elemMenuList = document.querySelector('.container-menu ul');
document.addEventListener('click', function(event) {
const isClickInside = elemMenuList.contains(event.target);
            
// If clicked link is outside mobile menu
if (isClickInside) {
    //Get id of anchor
    let anchor_id = window.location.hash;
    //Add extra spacing above anchor
    let elemAnchor = document.querySelector(anchor_id)
    elemAnchor.classList.add('sticky-anchor');
    //Close fly-out menu
    toggleMobileMenu();
}
    else {
        return;
    }
});


// Code to show/hide fly-out mobile menu -->
        document.querySelector('.item-icon').addEventListener('click', toggleMobileMenu)
        const pageContainer = document.querySelector('.page-container');
   
        function toggleMobileMenu() {
            //toggle hamburger icon
            const elemIcon = document.querySelector('.item-icon');
            const elemMenuList = document.querySelector('.container-menu ul');
            elemIcon.classList.toggle("change");
            const elemHTML = document.querySelector('html');

            // If fly-out menu is currently hidden, display it.
            if (elemIcon.classList.contains('change')) {
                elemMenuList.classList.add('mobile-display');
                elemHTML.classList.add('no-scroll');
            }    
            //if fly-out menu is currently open, close it.
            else {
                elemMenuList.classList.remove('mobile-display');
                elemHTML.classList.remove('no-scroll');
            }
        }

	// Code for menus with transparent background
    window.onscroll = function() {swapMenuStyle()};
		const headerDesktop = document.querySelector('.container-menu-desktop');
		const headerMobile = document.querySelector('.container-menu-bar-mobile');

		const stickyDesktop = headerDesktop.offsetTop +300;
		const stickyMobile = headerDesktop.offsetTop  +300;

		function swapMenuStyle() {
			if (window.pageYOffset > stickyDesktop) {
				headerDesktop.classList.add("menu-light","menu-drop-shadow");
				headerDesktop.classList.remove("menu-transparent");
				headerMobile.classList.add("menu-light","menu-drop-shadow");
				headerMobile.classList.remove("menu-transparent");

			} else {
				headerDesktop.classList.add("menu-transparent");
				headerDesktop.classList.remove("menu-light","menu-drop-shadow");
				headerMobile.classList.add("menu-transparent");
				headerMobile.classList.remove("menu-light","menu-drop-shadow");
			}
		}
