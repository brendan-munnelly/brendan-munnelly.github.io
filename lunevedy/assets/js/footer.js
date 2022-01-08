/*
//////////////// MENUS AND DROPDOWNS ///////////////
*/

// Deselect all

let divs = document.querySelectorAll('.dropbtn');
divs.forEach(el => el.addEventListener('click', event => {
    // hide all
    let i;
    for (i = 1; i < 5; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
    // get id
    const str = event.target.id.toString();
    const id = str.charAt(str.length-1);
    const elItem_show = document.querySelector("#content-"+id);
    elItem_show.classList.remove("dropdown-hidden"); 
}));

// Hide menus when click on page
document.querySelector("#HTML-Content").addEventListener("click", hideMenus);

function hideMenus() {
    let i;
    for (i = 1; i < 5; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
}

/*
//////////////// HEADER COLOURS ///////////////
*/
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let btn_id; // item to be coloured
    let newStyle; // full selector and style rule
    let sub_string; // style rule excerpt
    const arrCSS = []; // array for style rules to copy

    // On click style button 
    let all_btns = document.querySelectorAll('.btn_style');
    all_btns.forEach(el => el.addEventListener('click', event => {
        event.preventDefault();
        // get button id
        btn_id = event.target.id.toString();
        console.log("Button ID: "+btn_id);
        if (!btn_id) {
            // alert("btn_id problem");
            document.querySelector("#box-msg").classList.add("is-visible");
            document.querySelector("#box-msg").classList.remove("is-hidden");
        }
        else {
            document.querySelector("#box-msg").classList.remove("is-visible");
            document.querySelector("#box-msg").classList.add("is-hidden");
            displayModal();
        }
    }));

    document.querySelector(".close-box-msg").addEventListener('click', closeBoxMsg);

    function closeBoxMsg() {
        document.querySelector("#box-msg").classList.remove("is-visible");
        document.querySelector("#box-msg").classList.add("is-hidden");
    }

    function displayModal() {
        modal.style.display = "block";
        event.preventDefault();
    }

    document.querySelector("#picker-box").addEventListener('click', suppressBubblingClicks);
    
    function suppressBubblingClicks(event) {
        // event.preventDefault();
        event.stopPropagation();
        const label = event.target.closest("label");
        if (label && this.contains(label)) {
            event.stopPropagation();
            // Ignore this click
            return;
        }
        // console.log('Label click detected');
        const span = event.target.closest("span");
        if (span && this.contains(span)) {
            event.stopPropagation();
            // Ignore this click
            return;
        }
        // console.log('Span click detected');
    }

    function getColorID(color_code) {
        if (btn_id === "btn_bg") {
            newStyle = "footer { background-color: var("+color_code+") }\n";
            sub_string = "footer { background-color";
            doUpdateArray(sub_string,newStyle)
        }

        else if (btn_id === "btn_head") {
            newStyle = "footer h2 { color: var("+color_code+") }\n"; 
            sub_string = "h2";
            doUpdateArray(sub_string,newStyle);
        }

        else if (btn_id === "btn_subhead") {
            newStyle = "footer h3 { color: var("+color_code+") }\n"; 
            sub_string = "h3";
            doUpdateArray(sub_string,newStyle);
            doUpdateArray(sub_string,newStyle);
        }

        /* Hyperlink text colour: passive */
        else if (btn_id === "hyper_a_passive") {
            newStyle = "footer ul.footer-links li a:link, \nfooter ul.footer-links li a:visited { color: var("+color_code+"); text-decoration-color: var("+color_code+") }\n\nfooter p.privacy a:link, \nfooter p.privacy a:visited { color: var("+color_code+"); text-decoration-color: var("+color_code+") }\n\n";
            sub_string = "ul.footer-links li a:link";
            doUpdateArray(sub_string,newStyle);
        }

        /* Hyperlink text colour: active */
        else if (btn_id === "hyper_a_active") {
            newStyle = "footer ul.footer-links li a:focus, \nfooter ul.footer-links li a:hover, \nfooter ul.footer-links li a:active { color: var("+color_code+"); text-decoration-color: var("+color_code+") }\n\nfooter p.privacy a:focus, \nfooter p.privacy a:hover, \nfooter p.privacy a:active { color: var("+color_code+"); text-decoration-color: var("+color_code+") }\n\n";
            sub_string = "footer ul.footer-links li a:focus";
            doUpdateArray(sub_string,newStyle);
        }

        /* Icon colour: passive */
        else if (btn_id === "icon_a_passive") {
            newStyle = "footer ul.footer-icons li a:link i, \nfooter ul.footer-icons li a:visited i { color: var("+color_code+")\n\n";
            sub_string = "ul.footer-icons li a:link";
            doUpdateArray(sub_string,newStyle);
        }
        
        /* Icon colour: active */
        else if (btn_id === "icon_a_active") {
            newStyle = "footer ul.footer-icons li a:focus i, \nfooter ul.footer-icons li a:hover i, \nfooter ul.footer-icons li a:active i { color: var("+color_code+")}\n\n";
            console.log("newStyle: "+newStyle);
            sub_string = "footer ul.footer-icons li a:focus";
            doUpdateArray(sub_string,newStyle);
        }

        style = document.createElement('style');
        document.head.appendChild(style);
        style.appendChild(document.createTextNode(newStyle));
        document.getElementById("btn-copy-css").disabled=false;
        // console.log("Button ID: "+btn_id);
        // console.log("newStyle: "+newStyle);
    }

    function doUpdateArray(sub_string,newStyle) {
        if ( arrCSS.some(e => e.includes(sub_string)) ) {
            const arrPos =arrCSS.findIndex(e => e.includes(sub_string));
            arrCSS.splice(arrPos, 1);
            arrCSS.push(newStyle);
        }
        else {
            arrCSS.push(newStyle);
        }
   }


/*
//////////////// COPY TO CLIPBOARD ///////////////
*/

document.querySelector("#btn-copy").addEventListener("click", copyHTML);

function copyHTML() {
    // removeEmptyNodes();
    let HTML_Content = document.getElementById("HTML-Content").innerHTML;
    const el = document.createElement('textarea');
    el.value = HTML_Content;
    hideMenus();
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function copyCSS() {
    hideMenus();
    const el_css = document.createElement('textarea');
    let aLength = arrCSS.length;
    let strCSS  = arrCSS.join(",");
    strCSS = strCSS.replace(",footer", "footer");
    strCSS = strCSS.replace(/,footer/g, "footer");
    el_css.value = strCSS;
    document.body.appendChild(el_css);
    el_css.select();
    document.execCommand('copy');
    document.body.removeChild(el_css);  
   // console.log(strCSS);
}

/*
//////////////// REMOVE LEFTOVER NODES  ///////////////
*/

function removeEmptyNodes() {
    const HTML_Content = document.querySelector("#HTML-Content");
    var treeWalker = document.createTreeWalker(HTML_Content, NodeFilter.SHOW_ELEMENT);
    var currentNode = treeWalker.currentNode
    var emptyNodes = []

    // test if a node has no text, regardless of whitespaces
    var isNodeEmpty = node => !node.textContent.trim()

    // find all empty nodes
    while(currentNode) {
        isNodeEmpty(currentNode) && emptyNodes.push(currentNode)
        currentNode = treeWalker.nextNode()
    }

    // remove found empty nodes
    emptyNodes.forEach(node => node.parentNode.removeChild(node))
    return;
}

