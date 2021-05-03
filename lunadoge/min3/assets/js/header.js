/*
//////////////// MENUS AND DROPDOWNS ///////////////
*/

// Deselect all
let divs = document.querySelectorAll('.dropbtn');
divs.forEach(el => el.addEventListener('click', event => {
    // hide all
    let i;
    for (i = 0; i < 3; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
    // 
    // get id
    const str = event.target.id.toString();
    const id = str.charAt(str.length-1);
    const elItem_show = document.querySelector("#content-"+id);
    elItem_show.classList.remove("dropdown-hidden"); 
    // if (id==="content-0") {
       // resetMenuOptions();
    // }
}));

// Hide menus when click on page
document.querySelector("#HTML-Content").addEventListener("click", hideMenus);

function hideMenus() {
    let i;
    for (i = 0; i < 3; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
}

/*
//////////////// TEXT LENGTH ///////////////
*/

document.querySelector("#dd_text_length").addEventListener("change", doTextLength);
    
function doTextLength() {
    let opt = document.querySelector("#dd_text_length").value;
    if (opt==="0") {
        document.querySelector("header.hero-block h1").classList.remove("text-long");
        document.querySelector("header.hero-block h2").classList.remove("text-long");
        document.querySelector("header.hero-block h1").innerHTML = "Lorem Malesua";
        document.querySelector("header.hero-block h2").innerHTML = "Etiam tincidunt risus nec odio sollin.";
    }
    else if (opt==="1") {
        document.querySelector("header.hero-block h1").classList.add("text-long");
        document.querySelector("header.hero-block h2").classList.add("text-long");
        document.querySelector("header.hero-block h1").innerHTML = "Praesent ornare ipsum sit amet massa convallis fringillan ullam leo mollis.";
        document.querySelector("header.hero-block h2").innerHTML = "Etiam tincidunt risus nec odio sollin.";
    }
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
    
    // None
    else if (opt==="1") {
        removeH2();  
    }
}

function removeH2() {
    const parentNode = document.querySelector("#HTML-Content");
    let element_h2 = Array.prototype.slice.call(document.getElementsByTagName("h2"),0); 
    for (var index = 0, len = element_h2.length; index < len; index++) {
        element_h2[index].parentNode.removeChild(element_h2[index]);
    }
}

/*
//////////////// TEXT SHADOW  ///////////////
*/

document.querySelector("#dd_h1_shadow").addEventListener("change", doH1Shadow);
    
function doH1Shadow() {
    let opt = document.querySelector("#dd_h1_shadow").value;
    if (opt==="0") {
        document.querySelector("header.hero-block .hero-text-container h1").classList.remove("text-shadow");
    }
    else if (opt==="1") {
        document.querySelector("header.hero-block .hero-text-container h1").classList.add("text-shadow");
    }
}

document.querySelector("#dd_h2_shadow").addEventListener("change", doH2Shadow);
    
function doH2Shadow() {
    let opt = document.querySelector("#dd_h2_shadow").value;
    if (opt==="0") {
        document.querySelector("header.hero-block .hero-text-container h2").classList.remove("text-shadow");
    }
    else if (opt==="1") {
        document.querySelector("header.hero-block .hero-text-container h2").classList.add("text-shadow");
    }
}

/*
//////////////// ALIGNMENT ///////////////
*/

document.querySelector("#dd_align_desktop").addEventListener("change", doAlignDesktop);
    
function doAlignDesktop() {
    let opt = document.querySelector("#dd_align_desktop").value;
    if (opt==="0") {
        document.querySelector(".hero-text-container").classList.add("text-center-desktop");
        // if buttons present
        if (document.querySelector(".container-btn") ) {
             document.querySelector(".container-btn").classList.add("text-center-desktop");
        }
    }
    else if (opt==="1") {
        document.querySelector(".hero-text-container").classList.remove("text-center-desktop");
        // if buttons present
        if (document.querySelector(".container-btn") ) {
             document.querySelector(".container-btn").classList.remove("text-center-desktop");
        }
    }
}

document.querySelector("#dd_align_mobile").addEventListener("change", doAlignMobile);

function doAlignMobile() {
    let opt = document.querySelector("#dd_align_mobile").value;
    if (opt==="0") {
        document.querySelector(".hero-text-container").classList.add("text-center-mobile");
        // if buttons present
        if (document.querySelector(".container-btn") ) {      
            document.querySelector(".container-btn").classList.add("text-center-mobile");
            document.querySelector(".container-btn").classList.remove("text-left-mobile");
       }

    }
    else if (opt==="1") {
        document.querySelector(".hero-text-container").classList.remove("text-center-mobile"); 
        // if buttons present       
        if (document.querySelector(".container-btn") ) {
            document.querySelector(".container-btn").classList.remove("text-center-mobile");
            document.querySelector(".container-btn").classList.add("text-left-mobile");
        }
    }
}


/*
//////////////// TEXT ANIMATION ///////////////
*/

document.querySelector("#dd_text_slide").addEventListener("change", doTextAnimation);
    
function doTextAnimation() {
    let opt = document.querySelector("#dd_text_slide").value;
    if (opt==="0") {
        removeTextAnimation();
    }
    else if (opt==="1") {
        removeTextAnimation();
        document.querySelector("header.hero-block .hero-text-container h1").classList.add("slide-in-top");
        document.querySelector("header.hero-block .hero-text-container h2").classList.add("slide-in-top");
    }
    else if (opt==="2") {
        removeTextAnimation();
        document.querySelector("header.hero-block .hero-text-container h1").classList.add("slide-in-left");
        document.querySelector("header.hero-block .hero-text-container h2").classList.add("slide-in-left");
    }

    else if (opt==="3") {
        removeTextAnimation();
        document.querySelector("header.hero-block .hero-text-container h1").classList.add("slide-in-bottom");
        document.querySelector("header.hero-block .hero-text-container h2").classList.add("slide-in-bottom");
    }

    else if (opt==="4") {
        removeTextAnimation();
        document.querySelector("header.hero-block .hero-text-container h1").classList.add("fade-in");
        document.querySelector("header.hero-block .hero-text-container h2").classList.add("fade-in");
    }

}

function removeTextAnimation() {
    document.querySelector("header.hero-block .hero-text-container h1").classList.remove("slide-in-top");
    document.querySelector("header.hero-block .hero-text-container h1").classList.remove("slide-in-left");
    document.querySelector("header.hero-block .hero-text-container h1").classList.remove("slide-in-bottom");
    document.querySelector("header.hero-block .hero-text-container h1").classList.remove("fade-in");

    document.querySelector("header.hero-block .hero-text-container h2").classList.remove("slide-in-top");
    document.querySelector("header.hero-block .hero-text-container h2").classList.remove("slide-in-left");
    document.querySelector("header.hero-block .hero-text-container h2").classList.remove("slide-in-bottom");
    document.querySelector("header.hero-block .hero-text-container h2").classList.remove("fade-in");
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
        // Test alignment of hero-text-container
        if (document.querySelector(".hero-text-container.text-center-desktop") ) {
            document.querySelector(".container-btn").classList.add("text-center-desktop");
        }
        if (document.querySelector(".hero-text-container.text-center-mobile") ) {
            document.querySelector(".container-btn").classList.add("text-center-mobile");
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
        // Test alignment of hero-text-container
        if (document.querySelector(".hero-text-container.text-center-desktop") ) {
            document.querySelector(".container-btn").classList.add("text-center-desktop");
        }
        if (document.querySelector(".hero-text-container.text-center-mobile") ) {
            document.querySelector(".container-btn").classList.add("text-center-mobile");
        }
    }
}

function removeHeroButtons() {
    const elements = document.getElementsByClassName("container-btn");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

/*
//////////////// COPY TO CLIPBOARD ///////////////
*/

document.querySelector("#dd_img_expand").addEventListener("change", doImgExpand);

function doImgExpand() {
    let opt = document.querySelector("#dd_img_expand").value;
    if (opt==="0") {
        document.querySelector("header.hero-block.hero-half .container-flex .col-2 img").classList.remove("img-expand");
    }
    else if (opt==="1") {
        console.log("expand image");
        document.querySelector("header.hero-block.hero-half .container-flex .col-2 img").classList.add("img-expand");
    }
}


/*
//////////////// COPY TO CLIPBOARD ///////////////
*/

document.querySelector("#btn-copy").addEventListener("click", copyHTML);

function copyHTML() {
    document.querySelector("#btn-copy").setAttribute("data-text", "🙂 &nbsp;Copied");    
    document.querySelector("#btn-copy").classList.add("tooltip");
    document.querySelector("#btn-copy").classList.add("elementToFadeInAndOut");
    
    let HTML_Content = document.getElementById("HTML-Content").innerHTML;
    HTML_Content = replaceVidAttributes(HTML_Content);
    const el = document.createElement('textarea');
    el.value = HTML_Content;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function replaceVidAttributes(HTML_Content) {
    HTML_Content = HTML_Content.replace("loop=\"\"", "loop");
    HTML_Content = HTML_Content.replace("playsinline=\"\"", "playsinline");
    HTML_Content = HTML_Content.replace("muted=\"\"", "muted");
    HTML_Content = HTML_Content.replace("autoplay=\"\"", "autoplay");  
    HTML_Content = HTML_Content.replace("disablepictureinpicture=\"\"", "disablepictureinpicture");  
    return (HTML_Content);
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

