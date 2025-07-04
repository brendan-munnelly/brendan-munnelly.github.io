
    const btnsJS = document.querySelectorAll('main article .copy-code');
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

    async function doCopyCode(id) {
        const strCode = document.getElementById('strCode-'+id).textContent;
        await navigator.clipboard.writeText(strCode);
        document.getElementById("btn-"+id).style.color= "#00ff00";
        document.getElementById("btn-"+id).style.borderColor= "#00ff00";
        document.getElementById("btn-"+id).innerHTML = "Copied <i class=\"fa-solid fa-check\"><\/i>";
        setTimeout(function() {
            document.getElementById("btn-"+id).style.color= "lightskyblue";
            document.getElementById("btn-"+id).style.borderColor= "lightskyblue";
            document.getElementById("btn-"+id).innerHTML = "Copy <i class=\"fa-regular fa-copy\"><\/i>";
            document.getElementById("btn-"+id).classList.add('copy-code');	
        }, 1500);
    }

