/*
//////////////// MENUS AND DROPDOWNS ///////////////
*/

// Deselect all
let divs = document.querySelectorAll('.dropbtn');
divs.forEach(el => el.addEventListener('click', event => {
    // hide all
    let i;
    for (i = 0; i < 2; i++) {
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
    for (i = 0; i < 2; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
}

/*
//////////////// HERO BUTTONS ///////////////
*/

document.getElementById("dd_hero_buttons").value="0";
document.querySelector("#dd_hero_buttons").addEventListener("change", doHeroButtons);
function doHeroButtons() {
    const opt = document.querySelector("#dd_hero_buttons").value;
    // remove
    if (opt==="0") {
        removeHeroButtons();
    }
    // one button
    else if (opt==="1") {
        removeHeroButtons();

        // Test for h2
        if (document.querySelector("h2")) {
            document.querySelector("h2").insertAdjacentHTML("afterend", assets_header_buttons_one);
        }
        else {
            document.querySelector("h1").insertAdjacentHTML("afterend", assets_header_buttons_one);
        }
    }
    // two buttons
    else if (opt==="2") {
        removeHeroButtons();

        // Test for h2
        if (document.querySelector("h2")) {
            document.querySelector("h2").insertAdjacentHTML("afterend", assets_header_buttons_pair);
        }
        else {
            document.querySelector("h1").insertAdjacentHTML("afterend", assets_header_buttons_pair);
        }   
    }
}

function removeHeroButtons() {
    let HTML_content = document.getElementById("HTML-Content").innerHTML; 
    HTML_content = HTML_content.replace(assets_header_buttons_one, "");
    HTML_content = HTML_content.replace(assets_header_buttons_pair, "");
    document.getElementById("HTML-Content").innerHTML = HTML_content;
    return;
}



/*
//////////////// H2 SUB HEADING UNDER H1 ///////////////
*/

document.querySelector("#dd_h2").addEventListener("change", doH2);
document.getElementById("dd_h2").value="0";

function doH2() {
    let opt = document.querySelector("#dd_h2").value;
    //  regular
    if (opt==="0") {
        removeH2();
        const elH2 = document.querySelector("h1:first-of-type");
        elH2.insertAdjacentHTML("afterend", assets_header_h2);
    }
    // Border-top
    else if (opt==="1") {
        removeH2();
        const elH2 = document.querySelector("h1:first-of-type");
        elH2.insertAdjacentHTML("afterend", "<hr>"+assets_header_h2);
        
    }
    // Border-bottom
    else if (opt==="2") {
        removeH2();
        const elH2 = document.querySelector("h1:first-of-type");
        elH2.insertAdjacentHTML("afterend", assets_header_h2+"<hr>");
    }
    // None
    else if (opt==="3") {
        removeH2();  
    }
}

function removeH2() {
    const parentNode = document.querySelector("#HTML-Content");
    let element_h2 = Array.prototype.slice.call(document.getElementsByTagName("h2"),0); 
    for (var index = 0, len = element_h2.length; index < len; index++) {
        element_h2[index].parentNode.removeChild(element_h2[index]);
    }
    let element_hr = Array.prototype.slice.call(document.getElementsByTagName("hr"),0); 
    for (var index = 0, len = element_hr.length; index < len; index++) {
        element_hr[index].parentNode.removeChild(element_hr[index]);
    }
}




/*
//////////////// ALIGNMENT: FULL-WIDTH COLUMN  ///////////////
*/

document.querySelector("#dd_align_hero").addEventListener("change", doAlignHero);
    
function doAlignHero() {
    let opt = document.querySelector("#dd_align_hero").value;
    if (opt==="0") {
        document.querySelector(".hero-block").classList.remove("text-center");
    }
    else if (opt==="1") {
        document.querySelector(".hero-block").classList.add("text-center");
    }
}



/*
//////////////// COPY TO CLIPBOARD ///////////////
*/

document.querySelector("#btn-copy").addEventListener("click", copyHTML);

function copyHTML() {
    const HTML_Content = document.getElementById("HTML-Content").innerHTML;
    const el = document.createElement('textarea');
    el.value = HTML_Content;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
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