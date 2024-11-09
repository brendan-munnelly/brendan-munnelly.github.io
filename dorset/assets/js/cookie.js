document.addEventListener('DOMContentLoaded', function () {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};${expires};path=/;domain=.munnelly.com;Secure;SameSite=Lax`;
        // Remove 'Secure' attribute for local testing
        // document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};${expires};path=/;domain=.munnelly.com;SameSite=Lax`;
    }

    function getCookie(name) {
        const cookieName = `${name}=`;
        const value = document.cookie
            .split('; ')
            .find((cookie) => cookie.startsWith(cookieName))
            ?.split('=')[1] ?? "";
        return decodeURIComponent(value);
    }

    function showBanner() {
        try {
            cookieBanner?.classList.add('show');
        } catch (error) {
            console.error('Error showing cookie banner:', error);
        }
    }

    function hideBanner() {
        cookieBanner?.classList.remove('show');
    }

    function acceptCookies() {
        setCookie('munnelly.com', 'accepted', 365);
        hideBanner();
    }

    acceptButton?.addEventListener('click', acceptCookies);

    // Check if user has already made a choice
    const consentStatus = getCookie('munnelly.com');
    if (!consentStatus) {
        showBanner();
    }
});
