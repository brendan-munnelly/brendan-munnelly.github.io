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

    // On click style button 
    let all_btns = document.querySelectorAll('.btn_style');
    all_btns.forEach(el => el.addEventListener('click', event => {
        // get button id
        btn_id = event.target.id.toString();
        console.log("Button ID: "+btn_id);
        displayModal();
    }));

    function displayModal() {
        modal.style.display = "block";
        event.preventDefault();
    }
   
    var radios = document.querySelectorAll('input[type=radio][name="picker-radio"]');
    radios.forEach(radio => radio.addEventListener('change', () => getColorID(radio.value)));

    function getColorID(color_code) {
            let newStyle; 
            /* Header background */
            if (btn_id === "btn_bg") {
                newStyle = "header.hero-block { background-color: var("+color_code+") }\n";
            }

            /* Header upper label */
            else if (btn_id === "btn_upper_label") {
                newStyle = "header.hero-block .upper-label { color: var("+color_code+") }\n";
            }
                        
            /* Header h1 */
            else if (btn_id === "btn_head") {
                newStyle = "header.hero-block h1 { color: var("+color_code+") }\n";
            }

            /* Header h2 */
            else if (btn_id === "btn_subhead") {
                newStyle = "header.hero-block h2 { color: var("+color_code+") }\n";
            }

            /* Primary button text colour: passive */
            else if (btn_id === "btn_a_primary_passive_text") {
                newStyle = "header a.btn-primary:link { color: var("+color_code+") }\nheader a.btn-primary:visited { color: var("+color_code+") }\n";
            }
            /* Primary button text colour: active */
           else if (btn_id === "btn_a_primary_active_text") {
                newStyle = "header a.btn-primary:focus { color: var("+color_code+") }\nheader a.btn-primary:hover { color: var("+color_code+") }\nheader a.btn-primary:active { color: var("+color_code+") }\n";
            } 
            /* Primary button background colour: passive */
            else if (btn_id === "btn_a_primary_passive_bg") {
                newStyle = "header a.btn-primary:link { background-color: var("+color_code+") }\nheader a.btn-primary:visited { background-color: var("+color_code+") }\n";
            }
            /* Primary button background colour: active */
            else if (btn_id === "btn_a_primary_active_bg") {
                newStyle = "header a.btn-primary:focus { background-color: var("+color_code+") }\nheader a.btn-primary:hover { background-color: var("+color_code+") }\nheader a.btn-primary:active { background-color: var("+color_code+") }\n";
            }
            /* Primary button border colour: passive */
            else if (btn_id === "btn_a_primary_passive_border") {
                newStyle = "header a.btn-primary:link { border-color: var("+color_code+") }\nheader a.btn-primary:visited { border-color: var("+color_code+") }\n";
            }
            /* Primary button border colour: active */
            else if (btn_id === "btn_a_primary_active_border") {
                newStyle = "header a.btn-primary:focus { border-color: var("+color_code+") }\nheader a.btn-primary:hover { border-color: var("+color_code+") }\nheader a.btn-primary:active { border-color: var("+color_code+") }\n";
            }

            /* secondary button text colour: passive */
            else if (btn_id === "btn_a_secondary_passive_text") {
                newStyle = "header a.btn-secondary:link { color: var("+color_code+") }\nheader a.btn-secondary:visited { color: var("+color_code+") }\n";
            }
            /* secondary button text colour: active */
            else if (btn_id === "btn_a_secondary_active_text") {
                newStyle = "header a.btn-secondary:focus { color: var("+color_code+") }\nheader a.btn-secondary:hover { color: var("+color_code+") }\nheader a.btn-secondary:active { color: var("+color_code+") }\n";
            }
            /* secondary button background colour: passive */
            else if (btn_id === "btn_a_secondary_passive_bg") {
                newStyle = "header a.btn-secondary:link { background-color: var("+color_code+") }\nheader a.btn-secondary:visited { background-color: var("+color_code+") }\n";
            }
            /* secondary button background colour: active */
            else if (btn_id === "btn_a_secondary_active_bg") {
                newStyle = "header a.btn-secondary:focus { background-color: var("+color_code+") }\nheader a.btn-secondary:hover { background-color: var("+color_code+") }\nheader a.btn-secondary:active { background-color: var("+color_code+") }\n";
            }
            /* secondary button border colour: passive */
            else if (btn_id === "btn_a_secondary_passive_border") {
                newStyle = "header a.btn-secondary:link { border-color: var("+color_code+") }\nheader a.btn-secondary:visited { border-color: var("+color_code+") }\n";
            }
            /* secondary button border colour: active */
            else if (btn_id === "btn_a_secondary_active_border") {
                newStyle = "header a.btn-secondary:focus { border-color: var("+color_code+") }\nheader a.btn-secondary:hover { border-color: var("+color_code+") }\nheader a.btn-secondary:active { border-color: var("+color_code+") }\n";
            }
            console.log(newStyle); 
            style = document.createElement('style');
            document.head.appendChild(style);
            style.appendChild(document.createTextNode(newStyle));
            document.getElementById("btn-copy-css").disabled=false;   
    }

/*
//////////////// COLOURS: ENABLE/DISABLE ///////////////
*/

function disableBgColor() {
    document.getElementById("btn_bg").disabled=true;
}


function enableBgColor() {
    document.getElementById("btn_bg").disabled=false;
}


function disableLabelColor() {
    document.getElementById("btn_upper_label").disabled=true;
}

function enableLabelColor() {
    document.getElementById("btn_upper_label").disabled=false;
}

/*
//////////////// TEXT: UPPER CATEGORY LABEL ABOVE H2 ///////////////
*/

document.getElementById("dd_upperLabel").value="0";
document.querySelector("#dd_upperLabel").addEventListener("change", doUpperLabel);

function doUpperLabel() {
    const opt = document.querySelector("#dd_upperLabel").value;
    // remove
    if (opt==="0") {
        removeUpperLabel();
    }
    // add
    else if (opt==="1") {
        removeUpperLabel();
        document.querySelector("h1").insertAdjacentHTML("beforebegin", "<div class=\"upper-label\">Upper Label Text<\/div>\n");
        enableLabelColor();
    }
}

function removeUpperLabel() {
    if (document.querySelector('.upper-label')) {
        const upperLabel = document.querySelector('.upper-label');
        upperLabel.remove();
        disableLabelColor();
        document.getElementById("dd_upperLabel").value="0";
    } 
}

/*
//////////////// TEXT LENGTH ///////////////
*/

document.querySelector("#dd_text_length").addEventListener("change", doTextLength);
    
function doTextLength() {
    let opt = document.querySelector("#dd_text_length").value;
    if (opt==="0") {
        document.querySelector("h1").classList.remove("text-long");
        document.querySelector("h2").classList.remove("text-long");
        document.querySelector("h1").innerHTML = "Lorem Malesuada";
    }
    else if (opt==="1") {
        document.querySelector("h1").classList.add("text-long");
        document.querySelector("h2").classList.add("text-long");
        document.querySelector("h1").innerHTML = "Praesent ornare ipsum sit amet massa convallis fringillan ullam leo mollis.";
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
        const elH2 = document.querySelector("h1");
        elH2.insertAdjacentHTML("afterend", assets_header_h2);
    }
    
    // None
    else if (opt==="1") {
        removeH2();  
    }
}

function removeH2() {
    if (document.querySelector("h2")) {
        const elH2 = document.querySelector("h2");
        elH2.remove();
    }
}

/*
//////////////// TEXT SHADOW  ///////////////
*/

document.querySelector("#dd_text_shadow").addEventListener("change", doTextShadow);
    
function doTextShadow() {
    let opt = document.querySelector("#dd_text_shadow").value;
    if (opt==="0") {
        document.querySelector("h1").classList.remove("text-shadow");
        document.querySelector("h2").classList.remove("text-shadow");
    }
    else if (opt==="1") {
        document.querySelector("h1").classList.add("text-shadow");
        document.querySelector("h2").classList.add("text-shadow");
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
        document.querySelector("h1").classList.add("slide-in-top");
        document.querySelector("h2").classList.add("slide-in-top");
    }
    else if (opt==="2") {
        removeTextAnimation();
        document.querySelector("h1").classList.add("slide-in-left");
        document.querySelector("h2").classList.add("slide-in-left");
    }

    else if (opt==="3") {
        removeTextAnimation();
        document.querySelector("h1").classList.add("slide-in-bottom");
        document.querySelector("h2").classList.add("slide-in-bottom");
    }

    else if (opt==="4") {
        removeTextAnimation();
        document.querySelector("h1").classList.add("fade-in");
        document.querySelector("h2").classList.add("fade-in");
    }
}

function removeTextAnimation() {
    document.querySelector("h1").classList.remove("slide-in-top");
    document.querySelector("h1").classList.remove("slide-in-left");
    document.querySelector("h1").classList.remove("slide-in-bottom");
    document.querySelector("h1").classList.remove("fade-in");

    document.querySelector("h2").classList.remove("slide-in-top");
    document.querySelector("h2").classList.remove("slide-in-left");
    document.querySelector("h2").classList.remove("slide-in-bottom");
    document.querySelector("h2").classList.remove("fade-in");
}

/*
//////////////// ALIGNMENT ///////////////
*/

/* Default alignment based on header type */
function doHeaderAlignment(heroType) {
    if (( heroType === 1) || (heroType === 2) || (heroType === 3) ) {
        const el_cont = document.querySelector(".hero-text-container"); 
        el_cont.classList.add("text-center-desktop");
        el_cont.classList.add("text-center-mobile");
        document.getElementById("dd_align_desktop").value="0";
        document.getElementById("dd_align_mobile").value="0";
        document.getElementById("dd_text_shadow").value="1";
    }

    else if ( heroType === 4 ) {
        const el_cont = document.querySelector(".hero-text-container"); 
        el_cont.classList.remove("text-center-desktop");
        el_cont.classList.add("text-center-mobile");
        // if buttons present
        if (document.querySelector(".container-btn") ) {
            document.querySelector(".container-btn").classList.remove("text-center-desktop");
        }
        document.getElementById("dd_align_desktop").value="1";
        document.getElementById("dd_align_mobile").value="0";
    }
}

/* Set alignment - desktop */

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
//////////////// HERO BUTTONS ///////////////
*/

document.getElementById("dd_hero_buttons").value="0";
document.querySelector("#dd_hero_buttons").addEventListener("change", doHeroButtons);
function doHeroButtons() {
    const opt = document.querySelector("#dd_hero_buttons").value;
    // remove
    if (opt==="0") {
        removeHeroButtons();
        disableAllButtons();
    }
    // one button
    else if (opt==="1") {
        removeHeroButtons();
        disableAllButtons();
        enablePrimaryButtons();
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
        enableAllButtons();

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
    const elements = document.getElementsByClassName("container-btn");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function enableAllButtons() {
    document.getElementById("btn_a_primary_passive_text").disabled=false;
    document.getElementById("btn_a_primary_active_text").disabled=false;
    document.getElementById("btn_a_primary_passive_bg").disabled=false;
    document.getElementById("btn_a_primary_active_bg").disabled=false;
    document.getElementById("btn_a_primary_passive_border").disabled=false;
    document.getElementById("btn_a_primary_active_border").disabled=false;
    document.getElementById("btn_a_secondary_passive_text").disabled=false;
    document.getElementById("btn_a_secondary_active_text").disabled=false;
    document.getElementById("btn_a_secondary_passive_bg").disabled=false;
    document.getElementById("btn_a_secondary_active_bg").disabled=false;
    document.getElementById("btn_a_secondary_passive_border").disabled=false;
    document.getElementById("btn_a_secondary_active_border").disabled=false;
}

function enablePrimaryButtons() {
    document.getElementById("btn_a_primary_passive_text").disabled=false;
    document.getElementById("btn_a_primary_active_text").disabled=false;
    document.getElementById("btn_a_primary_passive_bg").disabled=false;
    document.getElementById("btn_a_primary_active_bg").disabled=false;
    document.getElementById("btn_a_primary_passive_border").disabled=false;
    document.getElementById("btn_a_primary_active_border").disabled=false;
}

function enableSecondaryButtons() {
    document.getElementById("btn_a_secondary_passive_text").disabled=false;
    document.getElementById("btn_a_secondary_active_text").disabled=false;
    document.getElementById("btn_a_secondary_passive_bg").disabled=false;
    document.getElementById("btn_a_secondary_active_bg").disabled=false;
    document.getElementById("btn_a_secondary_passive_border").disabled=false;
    document.getElementById("btn_a_secondary_active_border").disabled=true;        
}

function disableAllButtons() {
    document.getElementById("btn_a_primary_passive_text").disabled=true;
    document.getElementById("btn_a_primary_active_text").disabled=true;
    document.getElementById("btn_a_primary_passive_bg").disabled=true;
    document.getElementById("btn_a_primary_active_bg").disabled=true;
    document.getElementById("btn_a_primary_passive_border").disabled=true;
    document.getElementById("btn_a_primary_active_border").disabled=true;
    document.getElementById("btn_a_secondary_passive_text").disabled=true;
    document.getElementById("btn_a_secondary_active_text").disabled=true;
    document.getElementById("btn_a_secondary_passive_bg").disabled=true;
    document.getElementById("btn_a_secondary_active_bg").disabled=true;
    document.getElementById("btn_a_secondary_passive_border").disabled=true;
    document.getElementById("btn_a_secondary_active_border").disabled=true;
}

function disablePrimaryButtons() {
    document.getElementById("btn_a_primary_passive_text").disabled=true;
    document.getElementById("btn_a_primary_active_text").disabled=true;
    document.getElementById("btn_a_primary_passive_bg").disabled=true;
    document.getElementById("btn_a_primary_active_bg").disabled=true;
    document.getElementById("btn_a_primary_passive_border").disabled=true;
    document.getElementById("btn_a_primary_active_border").disabled=true;
}

function disableSecondaryButtons() {
    document.getElementById("btn_a_secondary_passive_text").disabled=true;
    document.getElementById("btn_a_secondary_active_text").disabled=true;
    document.getElementById("btn_a_secondary_passive_bg").disabled=true;
    document.getElementById("btn_a_secondary_active_bg").disabled=true;
    document.getElementById("btn_a_secondary_passive_border").disabled=true;
    document.getElementById("btn_a_secondary_active_border").disabled=true;        
}

/*
//////////////// BUTTONS: CORNER STYLE ////////////////////
*/

document.querySelector("#dd_buttons_style").addEventListener("change", doButtonsStyle);

function doButtonsStyle() {
    let opt = document.querySelector("#dd_buttons_style").value;
    // remove
    if (opt==="0") {
        removeButtonsStyle();
    }
    // soft
    else if (opt==="1") {
        removeButtonsStyle();
        if (document.querySelector(".btn-primary")) {
            const el_btn_primary = document.querySelector("a.btn-primary");
            el_btn_primary.classList.add("btn-soft");
        }

        if (document.querySelector(".btn-secondary")) {
            const el_btn_secondary = document.querySelector("a.btn-secondary");
            el_btn_secondary.classList.add("btn-soft");
        }
    }

    // rounded
    else if (opt==="2") {
        removeButtonsStyle();
        if (document.querySelector(".btn-primary")) {
            const el_btn_primary = document.querySelector("a.btn-primary");
            el_btn_primary.classList.add("btn-rounded");
        }

        if (document.querySelector(".btn-secondary")) {
            const el_btn_secondary = document.querySelector("a.btn-secondary");
            el_btn_secondary.classList.add("btn-rounded");
        }
    }
}

function removeButtonsStyle() {

    if (document.querySelector(".btn-primary")) {
        const el_btn_primary = document.querySelector("a.btn-primary");
        el_btn_primary.classList.remove("btn-soft");
        el_btn_primary.classList.remove("btn-rounded");
    }

    if (document.querySelector(".btn-secondary")) {
        const el_btn_secondary = document.querySelector("a.btn-secondary");
        el_btn_secondary.classList.remove("btn-soft");
        el_btn_secondary.classList.remove("btn-rounded");
    }
}


/*
//////////////// COPY TO CLIPBOARD ///////////////
*/

document.querySelector("#btn-copy").addEventListener("click", copyHTML);

function copyHTML() {
    // removeEmptyNodes();
    const HTML_Content = document.getElementById("HTML-Content").innerHTML;
    const el = document.createElement('textarea');
    el.value = HTML_Content;
    hideMenus();

    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
        
    console.log("copied");
}

function copyCSS() {
    var css = "", styletags = document.getElementsByTagName("style");
    for(var i = 0; i < styletags.length; i++) {
    css += "\n"+styletags[i].innerHTML }
    console.log(css);
    const el_css = document.createElement('textarea');
    el_css.value = css;
    hideMenus();

    document.body.appendChild(el_css);
    el_css.select();
    document.execCommand('copy');
    document.body.removeChild(el_css);        
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

