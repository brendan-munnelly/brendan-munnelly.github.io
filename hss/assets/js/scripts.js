

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

// Mobile Menus *****************************

document.addEventListener('DOMContentLoaded', function() {
    checkCookie();
}, false);

function checkCookie() {
    const x = getCookie('Elsinore99');
    if (x) {
        // do something with x
        console.log("Cookie here");
        return;
    }
    else {
        console.log("No cookie here"); 
        displayCookieMessage();       
    }
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function displayCookieMessage() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Accept cookie and close modaal
document.addEventListener('click', function (event) {
	if (!event.target.matches('#btnAccept')) return;
	event.preventDefault();
    // Log the clicked element in the console
    //console.log(event.target);
    setCookie('Elsinore99','essaykit.com',365);
    closeCookieMessage();
}, false);

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function closeCookieMessage() {
    var modal = document.getElementById("myModal");
    //var modal = document.getElementsByClassName("modal-content");
   
    modal.classList.add('slide-out-top');
    //modal.style.display = "none";
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// Smooth scroll ********************************
window.onscroll = function() {ToggleBackToHome()};
const UpArrow = document.querySelector('.back-to-top');
const stickyUpArrow = UpArrow.offsetTop +400;

function ToggleBackToHome() {
	if (window.pageYOffset > stickyUpArrow) {
    	UpArrow.classList.add("display-block");  
		UpArrow.classList.remove("display-none");

	} else {
        UpArrow.classList.add("display-none"); 
        UpArrow.classList.remove("display-block");
    }
}


// Vanilla JavaScript Scroll to Anchor
// @ https://perishablepress.com/vanilla-javascript-scroll-anchor/

/*
(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll('.scroll');
	links.forEach(each => (each.onclick = scrollAnchors));
}

//Smooth scrolling
function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}

(function() {
    var backTop = document.getElementsByClassName('back-to-top')[0],
        offset = 600,
        offsetOpacity = 1200,
        scrollDuration = 700,
        scrolling = false;
    if (backTop) {
        window.addEventListener("scroll", function(event) {
            if (!scrolling) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250): window.requestAnimationFrame(checkBackToTop);
            }
        });
        backTop.addEventListener('click', function(event) {
            event.preventDefault();
            (!window.requestAnimationFrame) ? window.scrollTo(0, 0): Util.scrollTo(0, scrollDuration);
        });
    }

    function checkBackToTop() {
        var windowTop = window.scrollY || document.documentElement.scrollTop;
        (windowTop > offset) ? Util.addClass(backTop, 'cd-top--is-visible'): Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
        (windowTop > offsetOpacity) && Util.addClass(backTop, 'cd-top--fade-out');
        scrolling = false;
    }
})();

*/