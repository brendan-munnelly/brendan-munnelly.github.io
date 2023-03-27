
// Copy code sample to clipboard

    const btns = document.querySelectorAll('main .copy-code');
    const btnsArr = Array.from(btns);
    let btnJSid;

    btnsArr.forEach(btn => {
        btn.addEventListener("click", e => {
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
            document.getElementById("btn-"+id).style.color= "";
            document.getElementById("btn-"+id).style.borderColor= "";
            document.getElementById("btn-"+id).innerHTML = "Copy <i class=\"fa-solid fa-copy\"><\/i>";
            document.getElementById("btn-"+id).classList.add('copy-code');	
        }, 1500);
    }

