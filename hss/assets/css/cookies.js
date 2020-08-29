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
    modal.style.display = "none";
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


