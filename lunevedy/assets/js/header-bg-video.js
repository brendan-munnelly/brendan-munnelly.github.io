/*
//////////////// MENUS AND DROPDOWNS ///////////////
*/
document.querySelector("#dd_actions").addEventListener("change", displayActions);

function displayActions() {
    const opt = document.querySelector("#dd_actions").value;
    document.querySelector("#content-1").classList.add("dropdown-hidden"); 
    document.querySelector("#content-2").classList.add("dropdown-hidden"); 
    document.querySelector("#content-3").classList.add("dropdown-hidden"); 
    document.querySelector("#content-4").classList.add("dropdown-hidden"); 
    document.querySelector("#content-5").classList.add("dropdown-hidden"); 
    document.querySelector("#content-6").classList.add("dropdown-hidden"); 
    document.querySelector("#content-7").classList.add("dropdown-hidden"); 
    const modal = document.getElementById("myModal");
    
    // modal.style.display = "none";
    hideSidebar();

    // show Hero Block options
    if (opt==="0") {
        document.getElementById("menu-1").style.display="inline-block";
        document.getElementById("menu-2").style.display="inline-block";
        document.getElementById("menu-3").style.display="inline-block";
        document.getElementById("menu-4").style.display="inline-block";
        document.getElementById("menu-5").style.display="none";
        document.getElementById("menu-6").style.display="none";
        document.getElementById("menu-7").style.display="none";
    }

    // show Menu options
    else if (opt==="1") {
        document.getElementById("menu-1").style.display="none";
        document.getElementById("menu-2").style.display="none";
        document.getElementById("menu-3").style.display="none";
        document.getElementById("menu-4").style.display="none";
        document.getElementById("menu-5").style.display="inline-block";
        document.getElementById("menu-6").style.display="inline-block";
        document.getElementById("menu-7").style.display="inline-block";
    }
}

// Deselect all

let divs = document.querySelectorAll('.dropbtn');
divs.forEach(el => el.addEventListener('click', event => {
    // hide all
    let i;
    for (i = 1; i < 8; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
    const modal = document.getElementById("myModal");
    const span = document.querySelector('#myModal .close-modal')
    hideSidebar();
    // modal.style.display = "none";
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
    for (i = 1; i < 8; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
    const modal = document.getElementById("myModal");
    // modal.style.display = "none";
    hideSidebar();
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        hideMenus()
    }
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        hideMenus()
    }
}

/*
//////////////// SIDE FLYOUT WITH COLOR PICKER  ///////////////
*/

function showSidebar() {
    document.querySelector("#myModal").classList.add("display-sidebar");
    document.querySelector("#myModal").classList.remove("hide-sidebar");
}

function hideSidebar() {
    document.querySelector("#myModal").classList.add("hide-sidebar");
    document.querySelector("#myModal").classList.remove("show-sidebar");
    document.querySelector("#myModal").scrollTo(0, 0);
}

/*
//////////////// SECTION: THEME  ///////////////
*/

document.querySelector("#switch_section_theme").addEventListener("change", doSectionTheme);

function doSectionTheme() {
    hideMenus();
    const rbs = document.querySelectorAll("input[name='switch_section_light_dark']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    // Remove all styles
    var hs = document.querySelectorAll('style');
    for (var i=0, max = hs.length; i < max; i++) {
        hs[i].parentNode.removeChild(hs[i]);
    }

    if (selectedValue==="light") {
        document.querySelector("header").classList.remove("theme-dark"); 
        document.querySelector("header").classList.add("theme-light"); 
    }
    else if (selectedValue==="dark") {
        document.querySelector("header").classList.remove("theme-light"); 
        document.querySelector("header").classList.add("theme-dark"); 
    }

    // Check for outlines
    if (document.querySelector("#cb_outlines").checked) {
        const css_checked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px red }";
        head_checked = document.head || document.getElementsByTagName('head')[0],
        style_checked = document.createElement('style');
        head_checked.appendChild(style_checked);
        style_checked.type = 'text/css';
        style_checked.appendChild(document.createTextNode(css_checked));
    }
    disableCSS();
}

/*
//////////////// SECTION: OUTLINES  ///////////////
*/

document.querySelector("#cb_outlines").addEventListener("change", toggleOutlines);

function toggleOutlines() {
    if (document.querySelector("#cb_outlines").checked) {
        const css_checked = "#HTML-Content header, #HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px red }";
        head_checked = document.head || document.getElementsByTagName('head')[0],
        style_checked = document.createElement('style');
        head_checked.appendChild(style_checked);
        style_checked.type = 'text/css';
        style_checked.appendChild(document.createTextNode(css_checked));
    }

    else {
        const css_unchecked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px transparent }";
        head_unchecked = document.head || document.getElementsByTagName('head')[0],
        style_unchecked = document.createElement('style');
        head_unchecked.appendChild(style_unchecked);
        style_unchecked.type = 'text/css';
        style_unchecked.appendChild(document.createTextNode(css_unchecked));
    }
}    

/*
//////////////// SECTION: OUTLINES  ///////////////
*/

document.querySelector("#cb_outlines").addEventListener("change", toggleOutlines);

function toggleOutlines() {
    if (document.querySelector("#cb_outlines").checked) {
        const css_checked = "#HTML-Content header, #HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px red }";
        head_checked = document.head || document.getElementsByTagName('head')[0],
        style_checked = document.createElement('style');
        head_checked.appendChild(style_checked);
        style_checked.type = 'text/css';
        style_checked.appendChild(document.createTextNode(css_checked));
    }

    else {
        const css_unchecked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px transparent }";
        head_unchecked = document.head || document.getElementsByTagName('head')[0],
        style_unchecked = document.createElement('style');
        head_unchecked.appendChild(style_unchecked);
        style_unchecked.type = 'text/css';
        style_unchecked.appendChild(document.createTextNode(css_unchecked));
    }
}    


/*
//////////////// HEADER COLOURS ///////////////
*/
    // Get the modal
    const modal = document.getElementById("myModal");
    const span = document.querySelector('#myModal .close-modal')
    span.onclick = function() {
        // modal.style.display = "none";
        hideSidebar();
        disableTransColCode();
    }
    
    // When the user clicks anywhere outside the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            // modal.style.display = "none";
            hideSidebar();
            disableTransColCode();
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
        if ((btn_id === "btn_a_primary_passive_bg") || (btn_id === "btn_a_primary_active_bg") ||(btn_id === "btn_a_primary_passive_border") || (btn_id === "btn_a_primary_active_border") || (btn_id === "btn_a_secondary_passive_bg") || (btn_id === "btn_a_secondary_active_bg") ||(btn_id === "btn_a_secondary_passive_border") || (btn_id === "btn_a_secondary_active_border") || (btn_id === "btn_a_cta_passive_bg") || (btn_id === "btn_a_cta_active_bg") || (btn_id === "btn_a_cta_passive_border") || (btn_id === "btn_a_cta_active_border") || (btn_id === "btn_a_cta_onscroll_passive_bg") || (btn_id === "btn_a_cta_onscroll_active_bg") || (btn_id === "btn_a_cta_onscroll_passive_border") || (btn_id === "btn_a_cta_onscroll_active_border") || (btn_id==="btn_a_cta_passive_bg") || (btn_id==="btn_a_cta_active_bg") || (btn_id==="btn_a_cta_passive_border") || (btn_id==="btn_a_cta_active_border") || (btn_id==="btn_a_cta_onscroll_passive_bg") || (btn_id==="btn_a_cta_onscroll_active_bg") || (btn_id==="btn_a_cta_onscroll_passive_border") || (btn_id==="btn_a_cta_onscroll_active_border") || ((btn_id==="btn_bg_menu_desktop") && ( document.querySelector(".menu-sticky")) ) || ( (btn_id==="btn_bg_menu_mobile") && ( document.querySelector(".menu-sticky"))) ) {
            enableTransColCode();
        }
        showSidebar();
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
        /* Header background */
        if (btn_id === "btn_bg") {
            newStyle = ".hero-block { background-color: var("+color_code+") }\n";
            sub_string = ".hero-block {";
            doUpdateArray(sub_string,newStyle);
        }

        /* Header upper label */
        else if (btn_id === "btn_upper_label") {
            newStyle = ".hero-block .container-upper-label span { color: var("+color_code+") }\n";
            sub_string = ".container-upper-label";
            doUpdateArray(sub_string,newStyle);
        }
                    
        /* Header h1 */
        else if (btn_id === "btn_head") {
            newStyle = ".hero-block h1 { color: var("+color_code+") }\n";
            sub_string = "h1";
            doUpdateArray(sub_string,newStyle);
        }

        /* Header h2 */
        else if (btn_id === "btn_subhead") {
            newStyle = ".hero-block h2 { color: var("+color_code+") }\n";
            sub_string = "h2";
            doUpdateArray(sub_string,newStyle);
        }

        /* ======= PRIMARY BUTTONS =========*/
        
        /* Text colour: passive */
        else if (btn_id === "btn_a_primary_passive_text") {
            newStyle = ".hero-block a.btn-primary:link,\n.hero-block a.btn-primary:visited { color: var("+color_code+") }\n\n";
            sub_string = "a.btn-primary:visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Text colour: active */
        else if (btn_id === "btn_a_primary_active_text") {
            newStyle = ".hero-block a.btn-primary:focus,\n.hero-block a.btn-primary:hover,\n.hero-block a.btn-primary:active { color: var("+color_code+") }\n\n";
            sub_string = "a.btn-primary:active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: passive */
        else if (btn_id === "btn_a_primary_passive_bg") {
            newStyle = ".hero-block a.btn-primary:link,\n.hero-block a.btn-primary:visited { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-primary:visited { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: active */
        else if (btn_id === "btn_a_primary_active_bg") {
            newStyle = ".hero-block a.btn-primary:focus,\n.hero-block a.btn-primary:hover,\n.hero-block a.btn-primary:active { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-primary:active { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: passive */
        else if (btn_id === "btn_a_primary_passive_border") {
            newStyle = ".hero-block a.btn-primary:link,\n.hero-block a.btn-primary:visited { border-color: var("+color_code+") }\n\n";
            sub_string = ".btn-primary:visited { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: active */
        else if (btn_id === "btn_a_primary_active_border") {
            newStyle = ".hero-block a.btn-primary:focus,\n.hero-block a.btn-primary:hover,\n.hero-block a.btn-primary:active { border-color: var("+color_code+") }\n\n";
            sub_string = "btn-primary:active { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* ========== SECONDARY BUTTONS =========== */

        /* Text colour: passive */
        else if (btn_id === "btn_a_secondary_passive_text") {
            newStyle = ".hero-block a.btn-secondary:link,\n.hero-block a.btn-secondary:visited { color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:visited { color";
            doUpdateArray(sub_string,newStyle); 
        }

        /* Text colour: active */
        else if (btn_id === "btn_a_secondary_active_text") {
            newStyle = ".hero-block a.btn-secondary:focus,\n.hero-block a.btn-secondary:hover,\n.hero-block a.btn-secondary:active { color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:focus { color";
            doUpdateArray(sub_string,newStyle); 
        }

        /* Background colour: passive */
        else if (btn_id === "btn_a_secondary_passive_bg") {
            newStyle = ".hero-block a.btn-secondary:link,\n.hero-block a.btn-secondary:visited { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:visited { background";
            doUpdateArray(sub_string,newStyle); 
        }

        /* Background colour: active */
        else if (btn_id === "btn_a_secondary_active_bg") {
            newStyle = ".hero-block a.btn-secondary:focus,\n.hero-block a.btn-secondary:hover,\n.hero-block a.btn-secondary:active { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:active { background";
            doUpdateArray(sub_string,newStyle); 
        }
        
        /* Border colour: passive */
        else if (btn_id === "btn_a_secondary_passive_border") {
            newStyle = ".hero-block a.btn-secondary:link,\n.hero-block a.btn-secondary:visited { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:visited { border";
            doUpdateArray(sub_string,newStyle); 
        }

        /* Border colour: active */
        else if (btn_id === "btn_a_secondary_active_border") {
            newStyle = ".hero-block a.btn-secondary:focus,\n.hero-block a.btn-secondary:hover,\n.hero-block a.btn-secondary:active { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:active { border";
            doUpdateArray(sub_string,newStyle); 
        }

        /* MENU BACKGROUNDS */

        /* Desktop/default mobile */
        else if (btn_id === "btn_bg_menu_desktop") {
            newStyle = ".container-menu.menu-desktop { background-color: var("+color_code+") }\n.container-menu.menu-mobile { background-color: var("+color_code+") }\n.container-menu.menu-mobile ul.mobile-display { background-color: var("+color_code+") }\n";
            sub_string = "container-menu.menu-desktop { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Mobile-only */
        else if (btn_id === "btn_bg_menu_mobile") {
            newStyle = ".container-menu.menu-mobile,\n.container-menu.menu-mobile ul.mobile-display { background-color: var("+color_code+") }\n";
            sub_string = ".container-menu.menu-mobile ul.mobile-display { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* On-scroll only */            
        else if (btn_id === "btn_bg_onscroll_menu") {
            newStyle = ".container-menu.menu-sticky.menu-desktop.menu-on-scroll,\n.container-menu.menu-sticky.menu-mobile.menu-on-scroll,\n.container-menu.menu-sticky.menu-mobile ul.mobile-display { background-color: var("+color_code+") }\n";
            sub_string = "container-menu.menu-sticky.menu-mobile.menu-on-scroll ul.mobile-display { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* HYPERLINKS */

        /* Desktop/mobile default: passive */
        else if (btn_id === "btn_link_passive_text") {
            newStyle = ".container-menu ul li a:link,\n.container-menu ul li a:visited { color: var("+color_code+") }\n";
            sub_string = "container-menu ul li a:visited { color";
            doUpdateArray(sub_string,newStyle);            
        }

        /* Desktop/mobile default: passive */
        else if (btn_id === "btn_link_active_text") {
            newStyle = ".container-menu ul li a:focus,\n.container-menu ul li a:hover,\n.container-menu ul li a:active { color: var("+color_code+") }\n";
            sub_string = "container-menu ul li a:active { color";
            doUpdateArray(sub_string,newStyle);            
        }

        /* Mobile-only: passive */
        else if (btn_id === "btn_link_mobile_passive_text") {
            newStyle = ".container-menu.menu-mobile ul.mobile-display li a:link,\n.container-menu.menu-mobile ul.mobile-display li a:visited { color: var("+color_code+") }\n";
            sub_string = "container-menu.menu-mobile li a:visited { color";
            doUpdateArray(sub_string,newStyle);            
        }

        /* Mobile-only: active */
        else if (btn_id === "btn_link_mobile_active_text") {
            newStyle = ".container-menu.menu-mobile ul.mobile-display li a:focus,\n.container-menu.menu-mobile ul.mobile-display li a:hover,\n.container-menu.menu-mobile ul.mobile-display li a:active { color: var("+color_code+") }\n";
            sub_string = "container-menu.menu-mobile ul.mobile-display li a:active";
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
        enableCSS();
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
//////////////// COLORS: TRANSPARENT OPTION ////////////////////
*/

function enableTransColCode() {
    document.getElementById("color-transparent").style.display="block";
}

function disableTransColCode() {
    document.getElementById("color-transparent").style.display="none";
}

/*
//////////////// HERO BLOCK OVERLAY OPACITY ////////////////////
*/

var slider = document.getElementById("slider-thumb");
var output = document.getElementById("slider-display");
output.innerHTML = ((slider.value)/10).toFixed(1); // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = ((this.value)/10).toFixed(1);
    sub_string = "background-image";
    newStyle = ".hero-block .container-overlay { background-image: linear-gradient(rgba(0,0,0,"+output.innerHTML+"),rgba(0,0,0,"+output.innerHTML+")); } \n";
    doUpdateArray(sub_string,newStyle);

    style = document.createElement('style');
    document.head.appendChild(style);
    style.appendChild(document.createTextNode(newStyle));
    enableCSS();
} 


/*
//////////////// TEXT SHADOW  ///////////////
*/

document.querySelector("#dd_text_shadow").addEventListener("change", doTextShadow);
    
function doTextShadow() {
    let opt = document.querySelector("#dd_text_shadow").value;
    if (opt==="0") {
        document.querySelector("h1").classList.add("text-shadow");
        document.querySelector("h2").classList.add("text-shadow");
    }
    else if (opt==="1") {
        document.querySelector("h1").classList.remove("text-shadow");
        document.querySelector("h2").classList.remove("text-shadow");
    }
}

/*
//////////////// BUTTONS: CORNER STYLE ////////////////////
*/

document.querySelector("#dd_cta_button_style").addEventListener("change", doButtonsCTAStyle);

function doButtonsCTAStyle() {
    let opt = document.querySelector("#dd_cta_button_style").value;
    // remove
    if (opt==="0") {
        removeButtonsCTAStyle();
    }
    // soft
    else if (opt==="1") {
        removeButtonsCTAStyle();
        console.log("Add soft");

        if (document.querySelector("#btn-cta")) {
            const el_btn_primary = document.querySelector("#btn-cta");
            el_btn_primary.classList.add("btn-soft");
        }
    }

    // rounded
    else if (opt==="2") {
        removeButtonsCTAStyle();
        console.log("Add pill");
        if (document.querySelector("#btn-cta")) {
            const el_btn_primary = document.querySelector("#btn-cta");
            el_btn_primary.classList.add("btn-rounded");
        }
    }
}

function removeButtonsCTAStyle() {

    if (document.querySelector("#btn-cta")) {
        const el_btn_primary = document.querySelector("#btn-cta");
        el_btn_primary.classList.remove("btn-soft");
        el_btn_primary.classList.remove("btn-rounded");
    }
}

/*
//////////////// MENU: BOTTOM BORDER DROP SHADOW ////////////////////
*/

document.querySelector("#dd_bottom_shadow").addEventListener("change", doBottomShadow);

function doBottomShadow() {
    let opt = document.querySelector("#dd_bottom_shadow").value;
    console.log("got here");
    // remove
    if (opt==="0") {
        removeBottomShadow();
    }
    // Always
    else if (opt==="1") {
        removeBottomShadow();
        if (document.querySelector(".container-menu")) {
            const el_menu = document.querySelector(".container-menu");
            el_menu.classList.add("menu-drop-shadow-desktop");
            el_menu.classList.add("menu-drop-shadow-mobile");
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
        el_btn_primary.classList.remove("menu-drop-shadow-desktop");
        el_btn_primary.classList.remove("menu-drop-shadow-mobile");
    }
}

/*
//////////////// BUTTONS: ICON POSITION ////////////////////
*/

document.querySelector("#dd_cta_button_icon").addEventListener("change", swapButtonIconsCTA);

function swapButtonIconsCTA() {
    let opt = document.querySelector("#dd_cta_button_icon").value;
    if (document.querySelector("a#btn-cta")) {  
        console.log("Button exists");    
        const icon_left_cta  ="<i class=\"fas fa-arrow-right\"><\/i><span>CTA Link<\/span>";
        const icon_right_cta ="<span>CTA Link<\/span><i class=\"fas fa-arrow-right\"><\/i>";

        // Icon at left. Text at right.       
        if (opt==="0") {
            const el_btn = document.querySelector("a#btn-cta");
            el_btn.innerHTML = icon_right_cta;
        }

        // Text at left. Icon at right.
        else if (opt==="1") {
            const el_btn = document.querySelector("a#btn-cta");
            el_btn.innerHTML = icon_left_cta;
        }

        else if (opt==="2") {
            const el_btn = document.querySelector("a#btn-cta");
            el_btn.innerHTML = "<span>CTA Link<\/span>";
        }
    }
}

/*
//////////////// MENU: ILLUSTRATION ////////////////////
*/

document.querySelector("#dd_focal_point").addEventListener("change", doVidFocalPoint);

function doVidFocalPoint() {
    let opt = document.querySelector("#dd_focal_point").value;
    if (opt==="0") {
        document.querySelector(".container-media video").setAttribute('poster',assets_poster_focal_center);
        document.querySelector(".container-media video").src = assets_video_focal_center;
    }
    else if (opt==="1") {
        document.querySelector(".container-media video").setAttribute('poster',assets_poster_focal_right);
        document.querySelector(".container-media video").src = assets_video_focal_right;
    }
    else if (opt==="2") {
        document.querySelector(".container-media video").setAttribute('poster',assets_poster_focal_left);
        document.querySelector(".container-media video").src = assets_video_focal_left;
    }
}

/*
//////////////// MENU: STICKY ////////////////////
*/

document.querySelector("#dd_sticky").addEventListener("change", doStickyMenu);

function doStickyMenu() {
    console.log("Do menu sticky")
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
    document.getElementById("btn_hamburger_sticky").disabled=false;
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
    document.getElementById("btn_hamburger_sticky").disabled=true;
    // set menu background to dark
    // document.querySelector(".container-menu").style.backgroundColor= "var(--slate-900)";
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

document.querySelector("#cb_upperLabelOn").addEventListener("change", doUpperLabel);

function doUpperLabel() {
    // remove
    if (!document.getElementById("cb_upperLabelOn").checked) {
        removeUpperLabel();
    }
    // add
    else {
        removeUpperLabel();
        document.querySelector(".container-text").insertAdjacentHTML("beforebegin", "<div class=\"container-upper-label\"><span>10% off all week<\/span><\/div>\n\n\t");
        enableLabelColor();
    }
}

function removeUpperLabel() {
    if (document.querySelector('.container-upper-label')) {
        const upperLabel = document.querySelector('.container-upper-label');
        upperLabel.remove();
        document.querySelector('.hero-block').innerHTML = document.querySelector('.hero-block').innerHTML.replace("\t\n\n", "");
        disableLabelColor();
    } 
}

/*
//////////////// TEXT LENGTH ///////////////
*/

document.querySelector("#dd_text_length").addEventListener("change", doTextLength);
    
function doTextLength() {
    let opt = document.querySelector("#dd_text_length").value;
    if (opt==="0") {
        document.querySelector(".container-text").classList.remove("text-long");
        document.querySelector("h1").innerHTML = "Nice heading";
    }
    else if (opt==="1") {
        document.querySelector(".container-text").classList.add("text-long");
        document.querySelector("h1").innerHTML = "Sometimes a short heading is not enough and a longer one is needed.";
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
        document.getElementById("btn_subhead").disabled=false;
    }
    
    // None
    else if (opt==="1") {
        removeH2();
        document.getElementById("btn_subhead").disabled=true;
    }
}

function removeH2() {
    if (document.querySelector("h2")) {
        const elH2 = document.querySelector("h2");
        elH2.remove();
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
        if (document.querySelector("h2")) {
            document.querySelector("h2").classList.add("slide-in-top");
        }
    }
    else if (opt==="2") {
        removeTextAnimation();
        document.querySelector("h1").classList.add("slide-in-left");
        if (document.querySelector("h2")) {
            document.querySelector("h2").classList.add("slide-in-left");
        }
    }

    else if (opt==="3") {
        removeTextAnimation();
        document.querySelector("h1").classList.add("slide-in-right");
        if (document.querySelector("h2")) {
            document.querySelector("h2").classList.add("slide-in-right");
        }
    }

    else if (opt==="4") {
        removeTextAnimation();
        document.querySelector("h1").classList.add("slide-in-bottom");
        if (document.querySelector("h2")) {
            document.querySelector("h2").classList.add("slide-in-bottom");
        }
    }

    else if (opt==="5") {
        removeTextAnimation();
        document.querySelector("h1").classList.add("fade-in");
        if (document.querySelector("h2")) {
            document.querySelector("h2").classList.add("fade-in");
        }
    }
}

function removeTextAnimation() {
    document.querySelector("h1").classList.remove("slide-in-top");
    document.querySelector("h1").classList.remove("slide-in-left");
    document.querySelector("h1").classList.remove("slide-in-right");
    document.querySelector("h1").classList.remove("slide-in-bottom");
    document.querySelector("h1").classList.remove("fade-in");

    if (document.querySelector("h2")) {
        document.querySelector("h2").classList.remove("slide-in-top");
        document.querySelector("h2").classList.remove("slide-in-left");
        document.querySelector("h2").classList.remove("slide-in-right");
        document.querySelector("h2").classList.remove("slide-in-bottom");
        document.querySelector("h2").classList.remove("fade-in");
    }
}

/*
//////////////// ALIGNMENT ///////////////
*/

/* Default alignment based on header type */
function doHeaderAlignment(heroType) {
    const el_cont = document.querySelector(".hero-block"); 
    el_cont.classList.add("text-center-desktop");
    el_cont.classList.add("text-center-mobile");
    document.getElementById("dd_align_desktop").value="0";
    document.getElementById("dd_align_mobile").value="0";
}

/* Set alignment - desktop */

document.querySelector("#switch-desktop-align").addEventListener("change", doAlignDesktop);

function doAlignDesktop() {
    const rbs = document.querySelectorAll("input[name='align_desktop']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        document.querySelector(".hero-block").classList.remove("text-center-desktop");   
    }
    else if (selectedValue==="center") {
        document.querySelector(".hero-block").classList.add("text-center-desktop");
    }
}

document.querySelector("#switch-mobile-align").addEventListener("change", doAlignMobile);

function doAlignMobile() {
    const rbs = document.querySelectorAll("input[name='align_mobile']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        document.querySelector(".hero-block").classList.remove("text-center-mobile");   
    }
    else if (selectedValue==="center") {
        document.querySelector(".hero-block").classList.add("text-center-mobile");
    }
}

/*
//////////////// H1 AND H1 TEXT WIDTH  ///////////////
*/

document.querySelector("#dd_text_width").addEventListener("change", doTextWidth);
    
function doTextWidth() {
    let opt = document.querySelector("#dd_text_width").value;
    if (opt==="0") {
        document.querySelector(".hero-block").classList.remove("text-width-50");
        document.getElementById("dd_text_start").disabled=true;
    }
    else if (opt==="1") {
        document.querySelector(".hero-block").classList.add("text-width-50");
        enableTextStart();
    }
}

function enableTextStart() {
    const elHero = document.querySelector(".hero-block");
    if ((elHero.classList.contains('text-width-50')) && (!elHero.classList.contains('text-center-desktop'))) {
        document.getElementById("dd_text_start").disabled=false;
    }
}

document.querySelector("#dd_text_start").addEventListener("change", doTextStart);
    
function doTextStart() {

    let opt = document.querySelector("#dd_text_start").value;
    if (opt==="0") {
        document.querySelector(".hero-block").classList.remove("text-start-center");
    }
    else if (opt==="1") {
        document.querySelector(".hero-block").classList.add("text-start-center");
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
        document.querySelector(".container-text").insertAdjacentHTML("afterend",assets_header_buttons_one);
        document.getElementById("dd_buttons_style").disabled=false;
        document.getElementById("dd_buttons_style").value="0";
        document.getElementById("dd_buttons_icon").disabled=false;
        document.getElementById("dd_buttons_icon").value="1";
    }

    // two buttons
    else if (opt==="2") {
        removeHeroButtons();
        enableAllButtons();
        document.querySelector(".container-text").insertAdjacentHTML("afterend", assets_header_buttons_pair);
        document.getElementById("dd_buttons_icon").disabled=false;
        document.getElementById("dd_buttons_style").value="0";
        document.getElementById("dd_buttons_style").disabled=false;
        document.getElementById("dd_buttons_icon").value="0";
    }
}

function removeHeroButtons() {
    const elements = document.getElementsByClassName("container-btn");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    document.getElementById("dd_buttons_icon").disabled=true;
    document.getElementById("dd_buttons_style").disabled=true;
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
//////////////// BUTTONS: ICON POSITION ////////////////////
*/

document.querySelector("#dd_buttons_icon").addEventListener("change", swapButtonIcons);

function swapButtonIcons() {
    let opt = document.querySelector("#dd_buttons_icon").value;
    // Verify at least primary button exists
    if (document.querySelector("a.btn")) {      
        // Set up button icon and text content;
        const icon_left_primary  ="<i class=\"fas fa-shopping-cart\"></i><span>Order now</span>";
        const icon_left_secondary  ="<i class=\"fas fa-arrow-right\"></i><span>Learn more</span>";
        const icon_right_primary ="<span>Order Now</span><i class=\"fas fa-shopping-cart\"></i>";
        const icon_right_secondary ="<span>Learn more</span><i class=\"fas fa-arrow-right\"></i>";

        if (opt==="0") {
            // Icon at left. Text at right.
            if (document.querySelector("a.btn-secondary")) {
                const el_btn_1 = document.querySelector("a.btn-primary");
                el_btn_1.innerHTML = icon_left_primary;
                const el_btn_2 = document.querySelector("a.btn-secondary");
                el_btn_2.innerHTML = icon_left_secondary;
            }
            else {
                const el_btn = document.querySelector("a.btn-primary");
                el_btn.innerHTML = "<i class=\"fas fa-arrow-right\"></i><span>Start free trial<\/span>";
            }
        }

        // Text at left. Icon at right.
        else if (opt==="1") {
            if (document.querySelector("a.btn-secondary")) {
                const el_btn_1 = document.querySelector("a.btn-primary");
                el_btn_1.innerHTML = icon_right_primary;
                const el_btn_2 = document.querySelector("a.btn-secondary");
                el_btn_2.innerHTML = icon_right_secondary;
            }
            else {
                const el_btn = document.querySelector("a.btn-primary");
                el_btn.innerHTML = "<span>Start free trial<\/span><i class=\"fas fa-arrow-right\"><\/i>";
            }
        }
         
        // Text only. No icon.
        else if (opt==="2") {
            if (document.querySelector("a.btn-primary")) {
                const el_btn = document.querySelector("a.btn-primary");
                const btn_content = "<span>Order now</span>";
                el_btn.innerHTML = btn_content;
            }
    
            if (document.querySelector("a.btn-secondary")) {
                const el_btn = document.querySelector("a.btn-secondary");
                const btn_content = "<span>Learn more</span>";
                el_btn.innerHTML = btn_content;
            }       
        }
    }
}

/* ================== ILLUSTRATION =================== */
document.querySelector("#dd_nudge_mobile").addEventListener("change", doNudgeMobile);

function doNudgeMobile() {
    let opt = document.querySelector("#dd_nudge_mobile").value;
    const el_media = document.querySelector(".container-media");

    if (opt==="0") {
        el_media.classList.remove("pull-to-left");
        el_media.classList.remove("push-to-right");
    }

    else if (opt==="1") {
        el_media.classList.remove("push-to-right");
        el_media.classList.add("pull-to-left");
    }

    else if (opt==="2") {
        el_media.classList.remove("pull-to-left");
        el_media.classList.add("push-to-right");
    }
}

/* ================ DIALOG BOXES =================== */

// Make dialog boxes element draggable:
dragElement(document.getElementById("content-1"));
dragElement(document.getElementById("content-2"));
dragElement(document.getElementById("content-3"));
// dragElement(document.getElementById("content-4"));
dragElement(document.getElementById("content-5"));
dragElement(document.getElementById("content-6"));
dragElement(document.getElementById("content-7"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } 
    else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }
    
    function dragMouseDown(e) {
        e = e || window.event;
        // e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

if (document.querySelector("#content-1 .dialog-box-header")) {
    document.querySelector("#content-1 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}

if (document.querySelector("#content-2 .dialog-box-header")) {
    document.querySelector("#content-2 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}
if (document.querySelector("#content-3 .dialog-box-header")) {
    document.querySelector("#content-3 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}

if (document.querySelector("#content-4 .dialog-box-header")) {
    document.querySelector("#content-4 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}

if (document.querySelector("#content-5 .dialog-box-header")) {
    document.querySelector("#content-5 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}

if (document.querySelector("#content-6 .dialog-box-header")) {
    document.querySelector("#content-6 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}

if (document.querySelector("#content-7 .dialog-box-header")) {
    document.querySelector("#content-7 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}


function hideDialogBox() {
    document.querySelector("#content-1").classList.add("dropdown-hidden"); 
    document.querySelector("#content-2").classList.add("dropdown-hidden"); 
    document.querySelector("#content-3").classList.add("dropdown-hidden"); 
    document.querySelector("#content-4").classList.add("dropdown-hidden"); 
    document.querySelector("#content-5").classList.add("dropdown-hidden"); 
    document.querySelector("#content-6").classList.add("dropdown-hidden"); 
    document.querySelector("#content-7").classList.add("dropdown-hidden"); 
    const modal = document.getElementById("myModal");
    // modal.style.display = "none";
    hideSidebar();
    disableTransColCode();
} 


/*
//////////////// COPY TO CLIPBOARD ///////////////
*/

document.querySelector("#btn-copy").addEventListener("click", copyHTML);

function enableCSS() {
    document.getElementById("btn-copy-css").disabled=false;
}

function disableCSS() {
    document.getElementById("btn-copy-css").disabled=true;
}

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

function copyCSS() {
    hideMenus();
    const el_css = document.createElement('textarea');
    let aLength = arrCSS.length;
    let strCSS  = arrCSS.join(",");
    strCSS = strCSS.replace(/,.hero-block/g, ".hero-block");
    strCSS = strCSS.replace(/..container/g, ".container");
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