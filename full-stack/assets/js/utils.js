
    // Copy prompt to clipboard

    // Copy text content
    const btnsText = document.querySelectorAll('main .copy-text');
    const btnsArrText = Array.from(btnsText);
    let btnTextid;

    btnsArrText.forEach(btnsText => {
        btnsText.addEventListener("click", e => {
            e.stopPropagation();
            btnTextid = e.target.id;
            console.log("You clicked button: "+btnTextid);
            // remove 'btn-' from ID
            btnTextid = btnTextid.replace('btn-', '');
            doCopyText(btnTextid);
        });
    });



    const btnsGPT = document.querySelectorAll('main .copy-gpt');
    const btnsArrGPT = Array.from(btnsGPT);
    let btnGPTid;

    btnsArrGPT.forEach(btnGPT => {
        btnGPT.addEventListener("click", e => {
            e.stopPropagation();
            btnGPTid = e.target.id;
            console.log("You clicked button: "+btnGPTid);
            // remove 'btn-' from ID
            btnGPTid = btnGPTid.replace('btn-', '');
            doCopyGPT(btnGPTid);
        });
    });



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



    async function doCopyText(id) {
        const strCode = document.getElementById('strCode-'+id).textContent;
        await navigator.clipboard.writeText(strCode);
        document.getElementById("btn-"+id).style.color= "#00ff00";
        document.getElementById("btn-"+id).style.borderColor= "#00ff00";
        document.getElementById("btn-"+id).innerHTML = "Copied <svg width=\"16\" height=\"16\" text-gray-800 dark:text-white\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 12\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M1 5.917 5.724 10.5 15 1.5\"/></svg>";

        setTimeout(function() {
            document.getElementById("btn-"+id).style.color= "";
            document.getElementById("btn-"+id).style.borderColor= "";
            document.getElementById("btn-"+id).innerHTML = "Copy <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"16\" width=\"14\" viewBox=\"0 0 448 512\" class=\"filter-blue\"><path d=\"M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z\"/></svg>";
            document.getElementById("btn-"+id).classList.add('copy-text');	
        }, 1500);
    }




    async function doCopyGPT(id) {
        const strCode = document.getElementById('strCode-'+id).textContent;
        await navigator.clipboard.writeText(strCode);
        document.getElementById("btn-"+id).style.color= "#00ff00";
        document.getElementById("btn-"+id).style.borderColor= "#00ff00";
        document.getElementById("btn-"+id).innerHTML = "Copied <i class=\"fa-solid fa-check\"><\/i>";
        setTimeout(function() {
            document.getElementById("btn-"+id).style.color= "";
            document.getElementById("btn-"+id).style.borderColor= "";
            document.getElementById("btn-"+id).innerHTML = "Copy Prompt <i class=\"fa-brands fa-react\"><\/i>";
            document.getElementById("btn-"+id).classList.add('copy-gpt');	
        }, 1500);
    }

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