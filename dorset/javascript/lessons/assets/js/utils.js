
// Copy code sample to clipboard

    const btnsJS = document.querySelectorAll('main .copy-code');
    const btnsArrJS = Array.from(btnsJS);
    let btnJSid;

    btnsArrJS.forEach(btnJS => {
        btnJS.addEventListener("click", e => {
            e.stopPropagation();
            btnJSid = e.target.id;
            console.log("You clicked button: "+btnJSid);
            // remove 'btn-' from ID
            btnJSid = btnJSid.replace('btn-', '');
            doCopyCode(btnJSid);
        });
    });

    const btnsHTML = document.querySelectorAll('main .copy-html');
    const btnsArrHTML = Array.from(btnsHTML);
    let btnHTMLID;

    btnsArrHTML.forEach(btnHTML => {
        btnHTML.addEventListener("click", e => {
            e.stopPropagation();
            btnHTMLID = e.target.id;
            console.log("You clicked button: "+btnHTMLID);
            // remove 'btn-' from ID
            btnHTMLID = btnHTMLID.replace('btn-', '');
            doCopyHTML(btnHTMLID);
        });
    });

    const btnsCSS = document.querySelectorAll('main .copy-css');
    const btnsArrCSS = Array.from(btnsCSS);
    let btnCSSID;

    btnsArrCSS.forEach(btnCSS => {
        btnCSS.addEventListener("click", e => {
            e.stopPropagation();
            btnCSSID = e.target.id;
            console.log("You clicked button: "+btnCSSID);
            // remove 'btn-' from ID
            btnCSSID = btnCSSID.replace('btn-', '');
            doCopyCSS(btnCSSID);
        });
    });


    const btnsGPT = document.querySelectorAll('main .copy-gpt');
    const btnsArrGPT = Array.from(btnsGPT);
    let btnGPTID;

    btnsArrGPT.forEach(btnGPT => {
        btnGPT.addEventListener("click", e => {
            e.stopPropagation();
            btnGPTID = e.target.id;
            console.log("You clicked button: "+btnGPTID);
            // remove 'btn-' from ID
            btnGPTID = btnGPTID.replace('btn-', '');
            doCopyGPT(btnGPTID);
        });
    });



    async function doCopyCode(id) {
        const strCode = document.getElementById('strCode-'+id).textContent;
        await navigator.clipboard.writeText(strCode);
        document.getElementById("btn-"+id).style.color= "#00ff00";
        document.getElementById("btn-"+id).style.borderColor= "#00ff00";
        document.getElementById("btn-"+id).innerHTML = "Copied <i class=\"fa-solid fa-check\"><\/i>";
        setTimeout(function() {
            document.getElementById("btn-"+id).style.color= "";
            document.getElementById("btn-"+id).style.borderColor= "";
            document.getElementById("btn-"+id).innerHTML = "Copy Code <i class=\"fa-brands fa-square-js\"><\/i>";
            document.getElementById("btn-"+id).classList.add('copy-code');	
        }, 1500);
    }

    async function doCopyHTML(id) {
        const strCode = document.getElementById('strCode-'+id).textContent;
        await navigator.clipboard.writeText(strCode);
        document.getElementById("btn-"+id).style.color= "#00ff00";
        document.getElementById("btn-"+id).style.borderColor= "#00ff00";
        document.getElementById("btn-"+id).innerHTML = "Copied <i class=\"fa-solid fa-check\"><\/i>";
        setTimeout(function() {
            document.getElementById("btn-"+id).style.color= "";
            document.getElementById("btn-"+id).style.borderColor= "";
            document.getElementById("btn-"+id).innerHTML = "Copy HTML <i class=\"fa-solid fa-code\"><\/i>";
            document.getElementById("btn-"+id).classList.add('copy-html');	
        }, 1500);
    }

   async function doCopyCSS(id) {
        const strCode = document.getElementById('strCode-'+id).textContent;
        await navigator.clipboard.writeText(strCode);
        document.getElementById("btn-"+id).style.color= "#00ff00";
        document.getElementById("btn-"+id).style.borderColor= "#00ff00";
        document.getElementById("btn-"+id).innerHTML = "Copied <i class=\"fa-solid fa-check\"><\/i>";
        setTimeout(function() {
            document.getElementById("btn-"+id).style.color= "";
            document.getElementById("btn-"+id).style.borderColor= "";
            document.getElementById("btn-"+id).innerHTML = "Copy CSS { }";
            document.getElementById("btn-"+id).classList.add('copy-css');	
        }, 1500);
    }

    async function doCopyGPT(id) {
        const strCode = document.getElementById('strCode-'+id).textContent;
        await navigator.clipboard.writeText(strCode);
        document.getElementById("btn-"+id).style.color= "#00ff00";
        document.getElementById("btn-"+id).style.borderColor= "#00ff00";
        document.getElementById("btn-"+id).innerHTML = "Copied <i class=\"fa-solid fa-check\"><\/i>";
        setTimeout(function() {
            document.getElementById("btn-"+id).style.color= "#87CEFA";
            document.getElementById("btn-"+id).style.borderColor= "#87CEFA";
            document.getElementById("btn-"+id).innerHTML = "Copy <i class=\"fa-regular fa-lightbulb\"></i>";
            document.getElementById("btn-"+id).classList.add('copy-gpt');	
        }, 1500);
    }

    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("firefox")) {
        document.documentElement.classList.add("firefox");
    } else if (userAgent.includes("chrome") && !userAgent.includes("edg")) {
        document.documentElement.classList.add("chrome");
    } else if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
        document.documentElement.classList.add("safari");
    }
    else {
        document.documentElement.classList.add("chrome");
    }

