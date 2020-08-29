// Code for menus with transparent background
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