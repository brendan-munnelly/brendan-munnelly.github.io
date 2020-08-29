/* CODE FOR HANDLING OFF-CANVAS, FLYOUT MENUS */

// Code to show/hide fly-out mobile menu -->
document.querySelector('.item-icon').addEventListener('click', toggleMobileMenu)
   
function toggleMobileMenu() {
    // Toggle hamburger icon
    const elemIcon = document.querySelector('.item-icon');
    elemIcon.classList.toggle("change");
    const elemHTML = document.querySelector('html');
    const elemBody = document.querySelector('body');            
    const elemFlyOut = document.querySelector('.flyout-menu');
    const elemMasks = document.querySelector('.masks-desktop');

    // If flyout menu is currently closed, open it.
    if (elemIcon.classList.contains('change')) {
        elemFlyOut.classList.remove('flyout-menu-is-closed');
        elemFlyOut.classList.add('flyout-menu-is-open');
        elemHTML.classList.add('no-scroll');
        elemBody.classList.add('no-scroll');
        elemMasks.classList.add('display-none');
    }    

    // If flyout menu is currently open, close it.
    else {
        elemFlyOut.classList.remove('flyout-menu-is-open');
        elemFlyOut.classList.add('flyout-menu-is-closed');
        elemHTML.classList.remove('no-scroll');
        elemBody.classList.remove('no-scroll');
        elemMasks.classList.add('display-block');
        elemMasks.classList.remove('display-none');
    }
}

// Detect click of option within fly-out menu
let specifiedElement = document.querySelector('.flyout-menu');
    document.addEventListener('click', function(event) {
        var isClickInside = specifiedElement.contains(event.target);
        //If link is within current web page
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
    }
);

