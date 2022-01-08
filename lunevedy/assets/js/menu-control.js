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

    document.querySelector("#picker-box").addEventListener('click', handleLabelClick);
    
    function handleLabelClick(event) {
        event.stopPropagation();
        const label = event.target.closest("label");
        if (label && this.contains(label)) {
            // Ignore this click
            return;
        }
        // console.log('Label click detected');
        const span = event.target.closest("span");
        if (span && this.contains(span)) {
            // Ignore this click
            return;
        }
        // console.log('Span click detected');
    }

        function getColorID(color_code) {

            /* MENU BACKGROUNDS */

            /* Desktop/default mobile */
            if (btn_id === "btn_bg_menu_desktop") {
                newStyle = ".container-menu.menu-desktop { background-color: var("+color_code+") }\n.container-menu.menu-mobile { background-color: var("+color_code+") }\n.container-menu.menu-mobile ul.mobile-display { background-color: var("+color_code+") }\n";
                sub_string = "container-menu.menu-desktop { background-color";
                doUpdateArray(sub_string,newStyle);
            }

            /* Mobile-only */
            if (btn_id === "btn_bg_menu_mobile") {
                newStyle = ".container-menu.menu-mobile,\n.container-menu.menu-mobile ul.mobile-display { background-color: var("+color_code+") }\n";
                sub_string = ".container-menu.menu-mobile ul.mobile-display { background-color";
                doUpdateArray(sub_string,newStyle);
            }

            /* On-scroll only */            
            if (btn_id === "btn_bg_onscroll_menu") {
                newStyle = ".container-menu.menu-sticky.menu-desktop.menu-on-scroll,\n.container-menu.menu-sticky.menu-mobile.menu-on-scroll,\n.container-menu.menu-sticky.menu-mobile ul.mobile-display { background-color: var("+color_code+") }\n";
                sub_string = "container-menu.menu-sticky.menu-mobile.menu-on-scroll ul.mobile-display { background-color";
                doUpdateArray(sub_string,newStyle);
            }

            /* HYPERLINKS */

            /* Desktop/mobile default: passive */
            else if (btn_id === "btn_link_passive_text") {
                newStyle = ".container-menu a:link,\n.container-menu a:visited { color: var("+color_code+") }\n";
                sub_string = "container-menu a:visited { color";
                doUpdateArray(sub_string,newStyle);            
            }

            /* Desktop/mobile default: passive */
            else if (btn_id === "btn_link_active_text") {
                newStyle = ".container-menu a:focus,\n.container-menu a:hover,\n.container-menu a:active { color: var("+color_code+") }\n";
                sub_string = "container-menu a:active { color";
                doUpdateArray(sub_string,newStyle);            
            }

            /* Mobile-only: passive */
            else if (btn_id === "btn_link_mobile_passive_text") {
                newStyle = ".container-menu.menu-mobile ul.mobile-display a:link,\n.container-menu.menu-mobile ul.mobile-display a:visited { color: var("+color_code+") }\n";
                sub_string = "container-menu.menu-mobile a:visited { color";
                doUpdateArray(sub_string,newStyle);            
            }

            /* Mobile-only: active */
            else if (btn_id === "btn_link_mobile_active_text") {
                newStyle = ".container-menu.menu-mobile ul.mobile-display a:focus,\n.container-menu.menu-mobile ul.mobile-display a:hover,\n.container-menu.menu-mobile ul.mobile-display a:active { color: var("+color_code+") }\n";
                sub_string = "container-menu.menu-mobile ul.mobile-display a:active";
                doUpdateArray(sub_string,newStyle); 
            }
            
            /* On-scroll: passive */
            else if (btn_id === "btn_link_onscroll_passive") {
                newStyle = ".container-menu.menu-on-scroll ul li a:link,\n.container-menu.menu-on-scroll ul li a:visited { color: var("+color_code+") }\n";
                sub_string = "container-menu.menu-on-scroll ul li a:visited { color";
                doUpdateArray(sub_string,newStyle);            
            }

            /* On-scroll: active */
            else if (btn_id === "btn_link_onscroll_active") {
                newStyle = ".container-menu.menu-on-scroll ul li a:focus,\n.container-menu.menu-on-scroll ul li a:hover,\n.container-menu.menu-on-scroll ul li a:active { color: var("+color_code+") }\n";
                sub_string = "container-menu.menu-on-scroll ul li a:active { color";
                doUpdateArray(sub_string,newStyle); 
            }            

            /* CTA button text colour: passive */
            else if (btn_id === "btn_a_cta_passive_text") {
                newStyle = ".container-menu a#btn-cta:link,\n.container-menu a#btn-cta:visited { color: var("+color_code+") }\n";
                sub_string = "a#btn-cta:visited { color";
                doUpdateArray(sub_string,newStyle);
            }

            /* CTA button text colour: active */
           else if (btn_id === "btn_a_cta_active_text") {
                newStyle = ".container-menu a#btn-cta:focus,\n.container-menu a#btn-cta:hover,\n.container-menu a#btn-cta:active { color: var("+color_code+") }\n";
                sub_string = "a#btn-cta:active { color";
                doUpdateArray(sub_string,newStyle);
            }

            /* CTA button background colour: passive */
            else if (btn_id === "btn_a_cta_passive_bg") {
                newStyle = ".container-menu a#btn-cta:link,\n.container-menu a#btn-cta:visited { background-color: var("+color_code+") }\n";
                sub_string = "a#btn-cta:visited { background-color";
                doUpdateArray(sub_string,newStyle);
            }

            /* CTA button background colour: active */
            else if (btn_id === "btn_a_cta_active_bg") {
                newStyle = ".container-menu a#btn-cta:focus,\n.container-menu a#btn-cta:hover,\n.container-menu a#btn-cta:active { background-color: var("+color_code+") }\n";
                sub_string = "a#btn-cta:active { background-color";
                doUpdateArray(sub_string,newStyle);
            }

            /* CTA button border colour: passive */
            else if (btn_id === "btn_a_cta_passive_border") {
                newStyle = ".container-menu a#btn-cta:link,\n.container-menu a#btn-cta:visited { border-color: var("+color_code+") }\n";
                sub_string = "a#btn-cta:visited { border-color";
                doUpdateArray(sub_string,newStyle);
            }

            /* CTA button border colour: active */
            else if (btn_id === "btn_a_cta_active_border") {
                newStyle = ".container-menu a#btn-cta:focus,\n.container-menu a#btn-cta:hover,\n.container-menu a#btn-cta:active { border-color: var("+color_code+") }\n";
                sub_string = "a#btn-cta:active";
                doUpdateArray(sub_string,newStyle);
            }

            /* HAMBURGER ICON */

            /* Non-sticky */
            else if (btn_id === "btn_hamburger") {
                newStyle = ".container-menu .item-icon .bar1, .container-menu .item-icon .bar2, .container-menu .item-icon .bar3 { background-color: var("+color_code+") }\n";
                sub_string = ".container-menu .item-icon .bar1";
                doUpdateArray(sub_string,newStyle);
            }

            /* Sticky */
            else if (btn_id === "btn_hamburger_sticky") {
                newStyle = ".container-menu.menu-on-scroll .item-icon .bar1, .container-menu.menu-on-scroll .item-icon .bar2, .container-menu.menu-on-scroll .item-icon .bar3 { background-color: var("+color_code+") }\n";
                sub_string = "container-menu.menu-on-scroll .item-icon .bar1";
                doUpdateArray(sub_string,newStyle);
            }         

            style = document.createElement('style');
            document.head.appendChild(style);
            style.appendChild(document.createTextNode(newStyle));
            document.getElementById("btn-copy-css").disabled=false;
            // console.log("Button ID: "+btn_id);
            console.log("newStyle: "+newStyle);
            enableCSS();
        }

       function doUpdateArray(sub_string,newStyle) {
           console.log("hello here: "+newStyle);
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
//////////////// BUTTONS: CORNER STYLE ////////////////////
*/

document.querySelector("#dd_cta_button_style").addEventListener("change", doButtonsStyle);

function doButtonsStyle() {
    let opt = document.querySelector("#dd_cta_button_style").value;
    // remove
    if (opt==="0") {
        removeButtonsStyle();
    }
    // soft
    else if (opt==="1") {
        removeButtonsStyle();
        if (document.querySelector("#btn-cta")) {
            const el_btn_primary = document.querySelector("#btn-cta");
            el_btn_primary.classList.add("btn-soft");
        }
    }

    // rounded
    else if (opt==="2") {
        removeButtonsStyle();
        if (document.querySelector("#btn-cta")) {
            const el_btn_primary = document.querySelector("#btn-cta");
            el_btn_primary.classList.add("btn-rounded");
        }
    }
}

function removeButtonsStyle() {

    if (document.querySelector("#btn-cta")) {
        const el_btn_primary = document.querySelector("#btn-cta");
        el_btn_primary.classList.remove("btn-soft");
        el_btn_primary.classList.remove("btn-rounded");
    }
}

/*
//////////////// MENU: BOTTOM BORDER DROP SHADOW ////////////////////
*/

// document.querySelector("#dd_bottom_shadow").addEventListener("change", doBottomShadow);

function doBottomShadow() {
    let opt = document.querySelector("#dd_bottom_shadow").value;
    console.log("got here");
    // remove
    if (opt==="0") {
        console.log("got here");
        removeBottomShadow();
    }
    // Always
    else if (opt==="1") {
        console.log("always on");
        removeBottomShadow();
        if (document.querySelector(".container-menu")) {
            const el_menu = document.querySelector(".container-menu");
            el_menu.classList.add("menu-drop-shadow");
        }
    }

    // Only on-scroll
    else if (opt==="2") {
        console.log("On scroll only");
        removeBottomShadow();
        if (document.querySelector(".container-menu")) {
            const el_menu = document.querySelector(".container-menu");
            el_menu.classList.add("menu-drop-shadow");
        }
    }
}

function removeBottomShadow() {
    if (document.querySelector(".container-menu")) {
        const el_btn_primary = document.querySelector(".container-menu");
        el_btn_primary.classList.remove("menu-drop-shadow");
    }
}

/*
//////////////// BUTTONS: ICON POSITION ////////////////////
*/

document.querySelector("#dd_cta_button_icon").addEventListener("change", swapButtonIcons);

function swapButtonIcons() {
    let opt = document.querySelector("#dd_cta_button_icon").value;
    if (document.querySelector("a#btn-cta")) {  
        console.log("Button exists");    
        const icon_left_cta  ="<i class=\"fas fa-arrow-right\"><\/i><span>CTA Link<\/span>";
        const icon_right_cta ="<span>CTA Link<\/span><i class=\"fas fa-arrow-right\"><\/i>";

        // move text to left, icon to right        
        if (opt==="0") {
            console.log("option 0, text left and icon right");
            if (document.querySelector("a#btn-cta")) {
                const el_btn = document.querySelector("a#btn-cta");
                btn_content = el_btn.innerHTML;
                btn_content = btn_content.replace(icon_left_cta, icon_right_cta);
                el_btn.innerHTML = btn_content;
            }
        }

        // move text to right, icon to left
        if (opt==="1") {
            console.log("option 1, icon left and text right");
            console.log("icon_left_cta: " +icon_left_cta);
            if (document.querySelector("a#btn-cta")) {
                const el_btn = document.querySelector("a#btn-cta");
                btn_content = el_btn.innerHTML;
                btn_content = btn_content.replace(icon_right_cta, icon_left_cta);
                el_btn.innerHTML = btn_content;
            }
        }
    }
}

/*
//////////////// MENU: STICKY ////////////////////
*/

document.querySelector("#dd_sticky").addEventListener("change", doStickyMenu);

function doStickyMenu() {
    let opt = document.querySelector("#dd_sticky").value;
    // remove
    if (opt==="0") {
        removeStickyMenu();
    }

    else if (opt==="1") {
        removeStickyMenu();
        enableCSS();
        enableSticky();

        if (document.querySelector(".container-menu")) {
            const el_menu = document.querySelector(".container-menu");
            el_menu.classList.add("menu-sticky");
        }

        if (document.querySelector(".hero-block")) {
            const el_menu = document.querySelector(".hero-block");
            el_menu.classList.add("header-under-menu-sticky");
        }
    }
}

function removeStickyMenu() {
    disableSticky();
    if (document.querySelector(".container-menu")) {
        const el_menu = document.querySelector(".container-menu");
        el_menu.classList.remove("menu-sticky");
    }

    if (document.querySelector(".hero-block")) {
        const el_menu = document.querySelector(".hero-block");
        el_menu.classList.remove("header-under-menu-sticky");
    }
}

function enableSticky() {
    document.getElementById("btn_bg_onscroll_menu").disabled=false;
    document.getElementById("btn_link_onscroll_passive").disabled=false;
    document.getElementById("btn_link_onscroll_active").disabled=false;
    document.getElementById("btn_a_cta_onscroll_passive_text").disabled=false;
    document.getElementById("btn_a_cta_onscroll_active_text").disabled=false;
    document.getElementById("btn_a_cta_onscroll_passive_bg").disabled=false;
    document.getElementById("btn_a_cta_onscroll_active_bg").disabled=false;
    document.getElementById("btn_a_cta_onscroll_passive_border").disabled=false;
    document.getElementById("btn_a_cta_onscroll_active_border").disabled=false;
}

function disableSticky() {
    document.getElementById("btn_bg_onscroll_menu").disabled=true;
    document.getElementById("btn_link_onscroll_passive").disabled=true;
    document.getElementById("btn_link_onscroll_active").disabled=true;
    document.getElementById("btn_a_cta_onscroll_passive_text").disabled=true;
    document.getElementById("btn_a_cta_onscroll_active_text").disabled=true;
    document.getElementById("btn_a_cta_onscroll_passive_bg").disabled=true;
    document.getElementById("btn_a_cta_onscroll_active_bg").disabled=true;
    document.getElementById("btn_a_cta_onscroll_passive_border").disabled=true;
    document.getElementById("btn_a_cta_onscroll_active_border").disabled=true;
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
}

function enableCSS() {
    document.getElementById("btn-copy-css").disabled=false;
}

function copyCSS() {
    hideMenus();
    const el_css = document.createElement('textarea');
    let aLength = arrCSS.length;
    let strCSS  = arrCSS.join(",");
    strCSS = strCSS.replace(/..container/g, ".container");
    strCSS = strCSS.replace(/,header/g, "header");
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

