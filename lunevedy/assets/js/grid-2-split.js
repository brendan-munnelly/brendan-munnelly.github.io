function loadAllGridSplit() {

// *** Global variables
// Number of dropdown menus on Lunevery navbar
const uiUIenusLength = document.querySelectorAll("#ui-menus li").length;

// Used by color picker to identify section for copying to user's HTML file.
// Values with be "section-selector-1", ... "section-selector-6".
let section_class ="section-selector-1"; 

// Used by color picker. Either 'theme-light' or 'theme-dark'.
let section_theme = "section.theme-light."+section_class;

/*
//////////////// MENUS AND DROPDOWNS ///////////////
*/

// Hide all menus - except currently selected one.
let divs = document.querySelectorAll('.dropbtn');
divs.forEach(el => el.addEventListener('click', event => {
    for (let i = 1; i <= uiUIenusLength; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
    // Get current menu id
    const strMenu = event.currentTarget.id.toString();
    const id = strMenu.charAt(strMenu.length-1);
    const elItem_show = document.querySelector("#content-"+id);
    // Unhide current menu
    elItem_show.classList.remove("dropdown-hidden"); 
    // Hide color picker
    hideSidebar();
}));

// Hide all menus and color picker when user clicks on work area.
window.onload=function(){
    iframe.contentWindow.document.querySelector('#HTML-Content').addEventListener('click',hideMenus,false);
}

function hideMenus() {
    for (let i = 1; i <= uiUIenusLength; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
    hideSidebar();
}

// Hide menus when users presses Esc key.
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

// Hide dialog box when user clicks X icon
for (let i = 1; i <= uiUIenusLength; i++) {
    document.querySelector(`#content-${[i]} .dialog-box-header span.close-x`).addEventListener("click", hideDialogBox);
}

function hideDialogBox() {
    for (let i = 1; i <= uiUIenusLength; i++) {
        document.querySelector(`#content-${[i]}`).classList.add("dropdown-hidden"); 
    }
    hideSidebar();
    disableTransColCode();
} 

/* Show/hide color picker */
function showSidebar() {
    document.querySelector("#myModal").classList.add("display-sidebar");
    document.querySelector("#myModal").classList.remove("hide-sidebar");
}

function hideSidebar() {
    document.querySelector("#myModal").classList.add("hide-sidebar");
    document.querySelector("#myModal").classList.remove("show-sidebar");
    document.querySelector("#myModal").scrollTo(0, 0); // scrolls to top of sidebar
}

/* ================ DIALOG BOXES =================== */

// Make dialog boxes element draggable:

for (let i = 1; i <= uiUIenusLength; i++) {
    dragElement(document.getElementById("content-"+[i]));
}

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
    var hs = iframe.contentWindow.document.querySelectorAll('style');
    for (var i=0, max = hs.length; i < max; i++) {
        hs[i].parentNode.removeChild(hs[i]);
    }

    if (selectedValue==="light") {
        iframe.contentWindow.document.querySelector("section").classList.remove("theme-dark"); 
        iframe.contentWindow.document.querySelector("section").classList.add("theme-light"); 
    }
        
    else if (selectedValue==="dark") {
        iframe.contentWindow.document.querySelector("section").classList.remove("theme-light"); 
        iframe.contentWindow.document.querySelector("section").classList.add("theme-dark"); 
    }

    // Check for outlines
    if (document.querySelector("#cb_outlines").checked) {
        const css_checked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px red }";
        head_checked = document.head || iframe.contentWindow.document.getElementsByTagName('head')[0],
        style_checked = iframe.contentWindow.document.createElement('style');
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
        const css_checked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px red }";
        head_checked = iframe.contentWindow.document.getElementsByTagName('head')[0],
        style_checked = iframe.contentWindow.document.createElement('style');
        head_checked.appendChild(style_checked);
        style_checked.type = 'text/css';
        style_checked.appendChild(iframe.contentWindow.document.createTextNode(css_checked));
    }

    else {
        const css_unchecked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px transparent }";
        head_unchecked = iframe.contentWindow.document.getElementsByTagName('head')[0],
        style_unchecked = iframe.contentWindow.document.createElement('style');
        head_unchecked.appendChild(style_unchecked);
        style_unchecked.type = 'text/css';
        style_unchecked.appendChild(iframe.contentWindow.document.createTextNode(css_unchecked));
    }
}    

/*
//////////////// COLOR PICKER ////////////////////
*/

// Get the modal
const modal = document.getElementById("myModal");
const span = document.querySelector('#myModal .close-modal')
span.onclick = function() {
    hideSidebar();
    disableTransColCode();
}
    
// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
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

/* Color picker error */
document.querySelector(".close-box-msg").addEventListener('click', closeBoxMsg);

function closeBoxMsg() {
    document.querySelector("#box-msg").classList.remove("is-visible");
    document.querySelector("#box-msg").classList.add("is-hidden");
}

function displayModal() {
    if ((btn_id === "btn_a_primary_passive_bg") || (btn_id === "btn_a_primary_active_bg") ||(btn_id === "btn_a_primary_passive_border") || (btn_id === "btn_a_primary_active_border") || (btn_id === "btn_a_secondary_passive_bg") || (btn_id === "btn_a_secondary_active_bg") ||(btn_id === "btn_a_secondary_passive_border") || (btn_id === "btn_a_secondary_active_border") ) {
        enableTransColCode();
    }
    if (btn_id === "btn_bg") {
        const el_section = iframe.contentWindow.document.querySelector("section");
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
        console.log('Proper click detected');
        const rbs = document.querySelectorAll("input[name='picker-radio']");
        let color_code;
    
        for (const rb of rbs) {
            if (rb.checked) {
                color_code = rb.value;
                break;
            }
        }
        console.log('color_code: '+color_code);

        if (iframe.contentWindow.document.querySelector("section.theme-light")) {
            section_theme = "section.theme-light."+section_class;
        }
        else if (iframe.contentWindow.document.querySelector("section.theme-dark")) {
            section_theme = "section.theme-dark."+section_class;
        }

        /* Section background */
        if (btn_id === "btn_bg") {
            newStyle = section_theme+ " { background-color: var("+color_code+") }\n";
            sub_string = section_theme+ " { background-color: ";
            doUpdateArray(sub_string,newStyle);
        }

        /* Header upper label */
        else if (btn_id === "btn_upper_label") {
            newStyle = section_theme+ " .container-upper-label { color: var("+color_code+") }\n";
            sub_string = ".container-upper-label";
            doUpdateArray(sub_string,newStyle);
        }
                    
        /* Header h2 */
        else if (btn_id === "btn_head") {
            newStyle = section_theme+ " h2 { color: var("+color_code+") }\n";
            sub_string = "h2";
            doUpdateArray(sub_string,newStyle);
        }

        /* Header h3 */
        else if (btn_id === "btn_subhead") {
            newStyle = section_theme+ " h3 { color: var("+color_code+") }\n";
            sub_string = "h3";
            doUpdateArray(sub_string,newStyle);
        }

        /* Section text */
        else if (btn_id === "btn_text") {
            newStyle = section_theme+ " p { color: var("+color_code+") } \n"+section_theme+" li { color: var("+color_code+") } \n"; 
            sub_string = "p { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* ======= PRIMARY BUTTONS =========*/
        
        /* Text colour: passive */
        else if (btn_id === "btn_a_primary_passive_text") {
            newStyle = section_theme+" a.btn-primary:link,\n"+section_theme+" a.btn-primary:visited { color: var("+color_code+") }\n\n";
            sub_string = "a.btn-primary:visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Text colour: active */
        else if (btn_id === "btn_a_primary_active_text") {
            newStyle = section_theme+" a.btn-primary:focus,\n"+section_theme+" a.btn-primary:hover,\n"+section_theme+" a.btn-primary:active { color: var("+color_code+") }\n\n";
            sub_string = "a.btn-primary:active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: passive */
        else if (btn_id === "btn_a_primary_passive_bg") {
            newStyle = section_theme+" a.btn-primary:link,\n"+section_theme+" a.btn-primary:visited { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-primary:visited { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: active */
        else if (btn_id === "btn_a_primary_active_bg") {
            newStyle = section_theme+" a.btn-primary:focus,\n"+section_theme+" a.btn-primary:hover,\n"+section_theme+" a.btn-primary:active { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-primary:active { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: passive */
        else if (btn_id === "btn_a_primary_passive_border") {
            newStyle = section_theme+" a.btn-primary:link,\n"+section_theme+" a.btn-primary:visited { border-color: var("+color_code+") }\n\n";
            sub_string = ".btn-primary:visited { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: active */
        else if (btn_id === "btn_a_primary_active_border") {
            newStyle = section_theme+" a.btn-primary:focus,\n"+section_theme+" a.btn-primary:hover,\n"+section_theme+" a.btn-primary:active { border-color: var("+color_code+") }\n\n";
            sub_string = "btn-primary:active { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* ========== SECONDARY BUTTONS =========== */

        /* Text colour: passive */
        else if (btn_id === "btn_a_secondary_passive_text") {
            newStyle = section_theme+" a.btn-secondary:link,\n"+section_theme+" a.btn-secondary:visited { color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:visited { color";
            doUpdateArray(sub_string,newStyle); 
        }

        /* Text colour: active */
        else if (btn_id === "btn_a_secondary_active_text") {
            newStyle = section_theme+" a.btn-secondary:focus,\n"+section_theme+" a.btn-secondary:hover,\n"+section_theme+" a.btn-secondary:active { color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:focus { color";
            doUpdateArray(sub_string,newStyle); 
        }

        /* Background colour: passive */
        else if (btn_id === "btn_a_secondary_passive_bg") {
            newStyle = section_theme+" a.btn-secondary:link,\n"+section_theme+" a.btn-secondary:visited { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:visited { background";
            doUpdateArray(sub_string,newStyle); 
        }

        /* Background colour: active */
        else if (btn_id === "btn_a_secondary_active_bg") {
            newStyle = section_theme+" a.btn-secondary:focus,\n"+section_theme+" a.btn-secondary:hover,\n"+section_theme+" a.btn-secondary:active { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:active { background";
            doUpdateArray(sub_string,newStyle); 
        }
        
        /* Border colour: passive */
        else if (btn_id === "btn_a_secondary_passive_border") {
            newStyle = section_theme+" a.btn-secondary:link,\n"+section_theme+" a.btn-secondary:visited { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:visited { border";
            doUpdateArray(sub_string,newStyle); 
        }

        /* Border colour: active */
        else if (btn_id === "btn_a_secondary_active_border") {
            newStyle = section_theme+" a.btn-secondary:focus,\n"+section_theme+" a.btn-secondary:hover,\n"+section_theme+" a.btn-secondary:active { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:active { border";
            doUpdateArray(sub_string,newStyle); 
        }
        
        style = document.createElement('style');
        iframe.contentWindow.document.head.appendChild(style);
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
//////////////// SECTION: CLASS NAMES ///////////////
*/

document.querySelector("#dd_className").addEventListener("change", doClassName);

function doClassName() {
    removeClassNames();
    let opt = 1 + parseInt(document.querySelector("#dd_className").value);
    section_class = "section-selector-"+opt;
    iframe.contentWindow.document.querySelector("section").classList.add("section-selector-"+opt);
}

function removeClassNames() {
    const el_section = iframe.contentWindow.document.querySelector("section");
    for (let i = 1; i <= uiUIenusLength; i++) {
        el_section.classList.remove("section-selector-"+[i]);
    }
}

/*
//////////////// SECTION WIDTH ///////////////
*/

document.querySelector("#dd_text_width").addEventListener("change", doWidthDesktopSection);

function doWidthDesktopSection() {

    let opt = document.querySelector("#dd_text_width").value;
    deleteSectionWidth();

    if (opt==="1") {
        iframe.contentWindow.document.querySelector("section").classList.add("section-width-960px");
    }
    else if (opt==="2") {
        iframe.contentWindow.document.querySelector("section").classList.add("section-width-1024px");
    }
    else if (opt==="3") {
        iframe.contentWindow.document.querySelector("section").classList.add("section-width-1140px");
    }
    else if (opt==="4") {
        iframe.contentWindow.document.querySelector("section").classList.add("section-width-1320px");
    }
    else if (opt==="5") {
        iframe.contentWindow.document.querySelector("section").classList.add("section-width-1536px");
    }
}

function deleteSectionWidth() {
    iframe.contentWindow.document.querySelector("section").classList.remove("section-width-960px");
    iframe.contentWindow.document.querySelector("section").classList.remove("section-width-1024px");
    iframe.contentWindow.document.querySelector("section").classList.remove("section-width-1140px");
    iframe.contentWindow.document.querySelector("section").classList.remove("section-width-1320px");
    iframe.contentWindow.document.querySelector("section").classList.remove("section-width-1536px");                
}

/*
//////////////// SECTION: COLUMN ORDER ////////////////////
*/

document.querySelector("#switch-col-visual-desktop").addEventListener("change", doColOrderDesktop);

function doColOrderDesktop() {
    const rbs = document.querySelectorAll("input[name='col-visual-desktop']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    console.log("selectedValue: "+selectedValue);

    if (selectedValue==="col-visual-right") {
        iframe.contentWindow.document.querySelector("section").classList.remove("split-image-left");
        iframe.contentWindow.document.querySelector("section").classList.add("split-image-right");
    }
    else if (selectedValue==="col-visual-left") {
        iframe.contentWindow.document.querySelector("section").classList.remove("split-image-right");
        iframe.contentWindow.document.querySelector("section").classList.add("split-image-left");
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
    let animationType;
    console.log("opt: "+opt);

    if (opt==="1") { 
        removeTextAnimation();
        animationType = "slide-in-sides"; 
        applyAnimation(animationType);
    }

    if (opt==="2") { 
        removeTextAnimation();
        animationType = "slide-in-top"; 
        applyAnimation(animationType);
    }

    if (opt==="3") {
        removeTextAnimation();
        animationType = "slide-in-bottom"; 
        applyAnimation(animationType);
    }

    if (opt==="4") {
        removeTextAnimation();
        animationType = "fade-in"; 
        applyAnimation(animationType);
    }
}

function applyAnimation(animationType) {

    if (animationType ==="slide-in-sides") {

        if (iframe.contentWindow.document.querySelector("section.split-image-right")) {
            // Image at right
            iframe.contentWindow.document.querySelector("section figure").classList.add("slide-in-right");
            // All else at left
            if (iframe.contentWindow.document.querySelector("section .container-upper-label")) {
                iframe.contentWindow.document.querySelector("section .container-upper-label").classList.add("slide-in-left");
            }
            iframe.contentWindow.document.querySelector("section h2").classList.add("slide-in-left");

            if (iframe.contentWindow.document.querySelector("section h3")) {
                iframe.contentWindow.document.querySelector("section h3").classList.add("slide-in-left");
            }
            let paras = iframe.contentWindow.document.querySelectorAll("section p");
            for (i = 0; i < paras.length; ++i) {
                paras[i].classList.add("slide-in-left")
            }
            if (iframe.contentWindow.document.querySelector("section ul")) {
                iframe.contentWindow.document.querySelector("section ul").classList.add("slide-in-left");
            }
            if (iframe.contentWindow.document.querySelector("section .container-btn")) {
                iframe.contentWindow.document.querySelector("section .container-btn").classList.add("slide-in-left");
            }
        }

        else if (iframe.contentWindow.document.querySelector("section.split-image-left")) {
            // Image at left
            iframe.contentWindow.document.querySelector("section figure").classList.add("slide-in-left");
            // All else at right
            if (iframe.contentWindow.document.querySelector("section .container-upper-label")) {
                iframe.contentWindow.document.querySelector("section .container-upper-label").classList.add("slide-in-right");
            }
            iframe.contentWindow.document.querySelector("section h2").classList.add("slide-in-right");
            if (iframe.contentWindow.document.querySelector("section h3")) {
                iframe.contentWindow.document.querySelector("section h3").classList.add("slide-in-right");
            }
            let paras = iframe.contentWindow.document.querySelectorAll("section p");
            for (i = 0; i < paras.length; ++i) {
                paras[i].classList.add("slide-in-right")
            }
            if (iframe.contentWindow.document.querySelector("section ul")) {
                iframe.contentWindow.document.querySelector("section ul").classList.add("slide-in-right");
            }
            if (iframe.contentWindow.document.querySelector("section .container-btn")) {
                iframe.contentWindow.document.querySelector("section .container-btn").classList.add("slide-in-right");
            }
        }
    }

    else {

        if (iframe.contentWindow.document.querySelector("section .container-upper-label")) {
            iframe.contentWindow.document.querySelector("section .container-upper-label").classList.add(animationType);
        }

        iframe.contentWindow.document.querySelector("section h2").classList.add(animationType);

        if (iframe.contentWindow.document.querySelector("section h3")) {
            iframe.contentWindow.document.querySelector("section h3").classList.add(animationType);
        }

        let paras = iframe.contentWindow.document.querySelectorAll("section p");
        for (i = 0; i < paras.length; ++i) {
            paras[i].classList.add(animationType)
        }

        if (iframe.contentWindow.document.querySelector("section ul")) {
            iframe.contentWindow.document.querySelector("section ul").classList.add(animationType);
        }
        
        if (iframe.contentWindow.document.querySelector("section figure")) {
            iframe.contentWindow.document.querySelector("section figure").classList.add(animationType);
        }
        
        if (iframe.contentWindow.document.querySelector("section .container-btn")) {
            iframe.contentWindow.document.querySelector("section .container-btn").classList.add(animationType);
        }
    }
    document.querySelector("label[for='dd_text_slide']").style.color = "#fff";
}

function removeTextAnimation() {
    if (iframe.contentWindow.document.querySelector("section .container-upper-label")) {
        iframe.contentWindow.document.querySelector("section .container-upper-label").removeAttribute("class");
    }

    iframe.contentWindow.document.querySelector("section h2").removeAttribute("class");

    if (iframe.contentWindow.document.querySelector("section h3")) {
        iframe.contentWindow.document.querySelector("section h3").removeAttribute("class");
    }

    let paras = iframe.contentWindow.document.querySelectorAll("section p");
    for (i = 0; i < paras.length; ++i) {
        paras[i].removeAttribute("class");
    }

    if (iframe.contentWindow.document.querySelector("section ul")) {
        iframe.contentWindow.document.querySelector("section ul").removeAttribute("class");
    }

    if (iframe.contentWindow.document.querySelector("section figure")) {
        iframe.contentWindow.document.querySelector("section figure").removeAttribute("class");
    }

    if (iframe.contentWindow.document.querySelector("section .container-btn")) {
        iframe.contentWindow.document.querySelector("section .container-btn").classList.remove("slide-in-top");
        iframe.contentWindow.document.querySelector("section .container-btn").classList.remove("slide-in-bottom");
        iframe.contentWindow.document.querySelector("section .container-btn").classList.remove("slide-in-left");
        iframe.contentWindow.document.querySelector("section .container-btn").classList.remove("slide-in-right");
        iframe.contentWindow.document.querySelector("section .container-btn").classList.remove("fade-in");
    }
}

/*
//////////////// UPPER CATEGORY LABEL ABOVE H2 ///////////////
*/

document.querySelector("#cb_upperLabelOn").addEventListener("change", doUpperLabel);

function doUpperLabel() {

    if (!document.getElementById("cb_upperLabelOn").checked) {
        removeUpperLabel();
    }
    else {
        removeUpperLabel();
        iframe.contentWindow.document.querySelector(".cols-2-split .col-2 h2").insertAdjacentHTML("beforebegin", "<div class=\"container-upper-label\"><span>CATEGORY<\/span><\/div>\n\n\t");
        document.getElementById("btn_upper_label").disabled=false;
    }
}

function removeUpperLabel() {
    if (iframe.contentWindow.document.querySelector('.container-upper-label')) {
    const upperLabel = iframe.contentWindow.document.querySelector('.container-upper-label');
        upperLabel.remove();
        iframe.contentWindow.document.querySelector('section').innerHTML =iframe.contentWindow.document.querySelector('section').innerHTML.replace("\t\n\n", "");
        document.getElementById("btn_upper_label").disabled=true;
    }
}

/*
//////////////// H3 SUB-HEADINGS ////////////////////
*/

document.querySelector("#cb_H3On").addEventListener("change", doColH3);

function doColH3() {

    if (!document.getElementById("cb_H3On").checked) {
        removeColH3();
    }

    else {
        if (!iframe.contentWindow.document.querySelector(".cols-2-split .col-2 h3")) {
            iframe.contentWindow.document.querySelector(".cols-2-split .col-2 > p:nth-of-type(1)").insertAdjacentHTML("afterend", assets_header_h3);
            document.getElementById("btn_subhead").disabled=false;
        }
        else {
            return
        }
    }
}

function removeColH3() {
    iframe.contentWindow.document.querySelector("section.cols-2-split .col-2 h3").remove();
    document.getElementById("btn_subhead").disabled=true;
}

/*
//////////////// TEXT: LISTS  ///////////////
*/

document.querySelector("#switch-col-list").addEventListener("change", doLists);

function doLists() {
    const rbs = document.querySelectorAll("input[name='col-list-type']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="list-none") {
        removeLists();
        // Restore second paragraph
        if (iframe.contentWindow.document.querySelector('.cols-2-split .col-2 > h3')) {
            iframe.contentWindow.document.querySelector(".cols-2-split .col-2 > h3").insertAdjacentHTML("afterend", content_paras_2);
        }
        else {
            iframe.contentWindow.document.querySelector(".cols-2-split .col-2 > p:nth-of-type(1)").insertAdjacentHTML("afterend", content_paras_2);
        }
    }

    else if (selectedValue==="list-short") {
        removeLists();
        // Remove last paragraph.
        if (iframe.contentWindow.document.querySelector('.cols-2-split .col-2 > p:nth-of-type(2)')) {
            iframe.contentWindow.document.querySelector('.cols-2-split .col-2 > p:nth-of-type(2)').remove();
        }

        // Add short list after h3 or first paragraph.
        if (iframe.contentWindow.document.querySelector('.cols-2-split .col-2 > h3')) {
            iframe.contentWindow.document.querySelector(".cols-2-split .col-2 > h3").insertAdjacentHTML("afterend", content_ul_short);
        }
        else {
            iframe.contentWindow.document.querySelector(".cols-2-split .col-2 > p:nth-of-type(1)").insertAdjacentHTML("afterend", content_ul_short);
        }
    }

    else if (selectedValue==="list-long") {
        removeLists();
        // Remove last paragraph.
        if (iframe.contentWindow.document.querySelector('.cols-2-split .col-2 > p:nth-of-type(2)')) {
            iframe.contentWindow.document.querySelector('.cols-2-split .col-2 > p:nth-of-type(2)').remove();
        }
        // Add short list after h3 or first paragraph.
        if (iframe.contentWindow.document.querySelector('.cols-2-split .col-2 > h3')) {
            iframe.contentWindow.document.querySelector(".cols-2-split .col-2 > h3").insertAdjacentHTML("afterend", content_ul_long);
        }
        else {
            iframe.contentWindow.document.querySelector(".cols-2-split .col-2 > p:nth-of-type(1)").insertAdjacentHTML("afterend", content_ul_long);
        }
    }
}

function removeLists() {
   if (iframe.contentWindow.document.querySelector(".cols-2-split .col-2 ul")) {
        iframe.contentWindow.document.querySelector(".cols-2-split .col-2 ul").remove();
    }
}

/*
//////////////// BUTTONS ////////////////////
*/

document.querySelector("#dd_buttons_split").addEventListener("change", doButtonsSplit);

    function doButtonsSplit() {
        let opt = document.querySelector("#dd_buttons_split").value;

        if (opt==="0") {
            removeButtonsSplit();
            disableAllButtons();
        }
       
        // one button
        else if (opt==="1") {
            removeButtonsSplit();
            enablePrimaryButtons();
            disableSecondaryButtons();
            if (iframe.contentWindow.document.querySelector(".col-2:nth-child(1) ul")) {
                iframe.contentWindow.document.querySelector(".col-2:nth-child(1) ul").insertAdjacentHTML("afterend", content_button_one);            
            }
            else {
                iframe.contentWindow.document.querySelector(".col-2:nth-child(1) p:last-of-type").insertAdjacentHTML("afterend", content_button_one);
            }
            document.getElementById("dd_buttons_style").value="0";
            document.getElementById("dd_buttons_style").disabled=false;
        }
        // two buttons
        else if (opt==="2") {
            removeButtonsSplit();
            enableAllButtons();

            if (iframe.contentWindow.document.querySelector(".col-2:nth-child(1) ul")) {
                iframe.contentWindow.document.querySelector(".col-2:nth-child(1) ul").insertAdjacentHTML("afterend", content_button_two);            
            }
            else {
                iframe.contentWindow.document.querySelector(".col-2:nth-child(1) p:last-of-type").insertAdjacentHTML("afterend", content_button_two);
            }
            document.getElementById("dd_buttons_style").value="0";
            document.getElementById("dd_buttons_style").disabled=false;
        }
    }

    function removeButtonsSplit() {
        if (iframe.contentWindow.document.querySelector("section .container-btn")) {
            const elBtn = iframe.contentWindow.document.querySelector("section .container-btn");
            elBtn.remove();
            document.getElementById("dd_buttons_style").value="0";
            document.getElementById("dd_buttons_style").disabled=true;
            document.getElementById("dd_buttons_style").value="0";
            document.getElementById("rd-btns-icons-left").checked=false;
            document.getElementById("rd-btns-icons-right").checked=false;
            document.getElementById("rd-btns-icons-none").checked=false;
            document.getElementById("rd-btns-icons-left").disabled=true;
            document.getElementById("rd-btns-icons-right").disabled=true;
            document.getElementById("rd-btns-icons-none").disabled=true;
        }
    }

    function enableAllButtons() {
        document.getElementById("rd-btns-icons-left").checked=true;
        document.getElementById("rd-btns-icons-right").checked=false;
        document.getElementById("rd-btns-icons-none").checked=false;
        document.getElementById("rd-btns-icons-left").disabled=false;
        document.getElementById("rd-btns-icons-right").disabled=false;
        document.getElementById("rd-btns-icons-none").disabled=false;

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
        document.getElementById("rd-btns-icons-left").checked=true;
        document.getElementById("rd-btns-icons-right").checked=false;
        document.getElementById("rd-btns-icons-none").checked=false;
        document.getElementById("rd-btns-icons-left").disabled=false;
        document.getElementById("rd-btns-icons-right").disabled=false;
        document.getElementById("rd-btns-icons-none").disabled=false;

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
        document.getElementById("dd_buttons_style").value="0";
        document.getElementById("rd-btns-icons-left").checked=false;
        document.getElementById("rd-btns-icons-right").checked=false;
        document.getElementById("rd-btns-icons-none").checked=false;
        document.getElementById("rd-btns-icons-left").disabled=true;
        document.getElementById("rd-btns-icons-right").disabled=true;
        document.getElementById("rd-btns-icons-none").disabled=true;
    
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
        if (iframe.contentWindow.document.querySelector(".btn-primary")) {
            const el_btn_primary = iframe.contentWindow.document.querySelector("a.btn-primary");
            el_btn_primary.classList.add("btn-soft");
        }

        if (iframe.contentWindow.document.querySelector(".btn-secondary")) {
            const el_btn_secondary = iframe.contentWindow.document.querySelector("a.btn-secondary");
            el_btn_secondary.classList.add("btn-soft");
        }
    }

    // rounded
    else if (opt==="2") {
        removeButtonsStyle();
        if (iframe.contentWindow.document.querySelector(".btn-primary")) {
            const el_btn_primary = iframe.contentWindow.document.querySelector("a.btn-primary");
            el_btn_primary.classList.add("btn-rounded");
        }

        if (document.querySelector(".btn-secondary")) {
            const el_btn_secondary = iframe.contentWindow.document.querySelector("a.btn-secondary");
            el_btn_secondary.classList.add("btn-rounded");
        }
    }
}

function removeButtonsStyle() {

    if (iframe.contentWindow.document.querySelector(".btn-primary")) {
        const el_btn_primary = iframe.contentWindow.document.querySelector("a.btn-primary");
        el_btn_primary.classList.remove("btn-soft");
        el_btn_primary.classList.remove("btn-rounded");
    }

    if (iframe.contentWindow.document.querySelector(".btn-secondary")) {
        const el_btn_secondary = iframe.contentWindow.document.querySelector("a.btn-secondary");
        el_btn_secondary.classList.remove("btn-soft");
        el_btn_secondary.classList.remove("btn-rounded");
    }
}

/*
//////////////// BUTTONS: ICON POSITION ////////////////////
*/

document.querySelector("#switch-btns-icons-position").addEventListener("change", swapButtonIcons);

function swapButtonIcons() {

    const rbs = document.querySelectorAll("input[name='btns-icons-position']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    // Verify at least primary button exists
    if (iframe.contentWindow.document.querySelector("a.btn")) {      
        // Set up button icon and text content;
        const icon_left_primary  ="<i class=\"fas fa-shopping-cart\"></i><span>Order now</span>";
        const icon_left_secondary  ="<i class=\"fas fa-arrow-right\"></i><span>Learn more</span>";
        const icon_right_primary ="<span>Order Now</span><i class=\"fas fa-shopping-cart\"></i>";
        const icon_right_secondary ="<span>Learn more</span><i class=\"fas fa-arrow-right\"></i>";
    
        if (selectedValue==="btns-icons-left") {
            // Icon at left. Text at right.
            if (iframe.contentWindow.document.querySelector("a.btn-secondary")) {
                const el_btn_1 = iframe.contentWindow.document.querySelector("a.btn-primary");
                el_btn_1.innerHTML = icon_left_primary;
                const el_btn_2 = iframe.contentWindow.document.querySelector("a.btn-secondary");
                el_btn_2.innerHTML = icon_left_secondary;
            }
            else {
                const el_btn = iframe.contentWindow.document.querySelector("a.btn-primary");
                el_btn.innerHTML = "<i class=\"fas fa-arrow-right\"></i><span>Start free trial<\/span>";
            }
        }
    
        else if (selectedValue==="btns-icons-right") {
            if (iframe.contentWindow.document.querySelector("a.btn-secondary")) {
                const el_btn_1 = iframe.contentWindow.document.querySelector("a.btn-primary");
                el_btn_1.innerHTML = icon_right_primary;
                const el_btn_2 = iframe.contentWindow.document.querySelector("a.btn-secondary");
                el_btn_2.innerHTML = icon_right_secondary;
            }
            else {
                const el_btn = iframe.contentWindow.document.querySelector("a.btn-primary");
                el_btn.innerHTML = "<span>Start free trial<\/span><i class=\"fas fa-arrow-right\"><\/i>";
            }
        }
    
        else if (selectedValue==="btns-icons-none") {
            // Only text, No icons.
            if (iframe.contentWindow.document.querySelector("a.btn-primary")) {
                const el_btn = iframe.contentWindow.document.querySelector("a.btn-primary");
                const btn_content = "<span>Order now</span>";
                el_btn.innerHTML = btn_content;
            }
    
            if (iframe.contentWindow.document.querySelector("a.btn-secondary")) {
                const el_btn = iframe.contentWindow.document.querySelector("a.btn-secondary");
                const btn_content = "<span>Learn more</span>";
                el_btn.innerHTML = btn_content;
            }       
        }

    }
}

/*
//////////////// VISUAL ELEMENT INSIDE SINGLE-COLOUMN LAYOUT ///////////////
*/

document.querySelector("#vis-types-all").addEventListener("click", doVisType);

function doVisType() { 
    const rbs = document.querySelectorAll("#vis-types-all input[name='dd_visual']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    
    let col_fig = iframe.contentWindow.document.querySelector('#HTML-Content section .col-2:nth-of-type(2)');

    if ( (selectedValue==="pictures") || (selectedValue==="transparent") || (selectedValue==="illustrations") ) {
        removeVisual();
        disableVidProps();
        enableImgProps();

        let child_obj = iframe.contentWindow.document.createElement("figure");

        if (selectedValue==="pictures") {
            console.log("el_picture: "+el_picture);
            child_obj.innerHTML = "<img src="+el_picture+" alt=\"Placeholder image\">";
            col_fig.appendChild(child_obj);
            document.getElementById("vis_type_1").checked=true;
        }

        else if (selectedValue==="transparent") {
            console.log("el_pic_tran: "+el_pic_trans);
            child_obj.innerHTML = "<img src="+el_pic_trans+" alt=\"Placeholder image\">";
            col_fig.appendChild(child_obj);
            document.getElementById("vis_type_2").checked=true;
        }

        else if (selectedValue==="illustrations") {
            console.log("el_drawing: "+el_drawing);
            child_obj.innerHTML = "<img src="+el_drawing+" alt=\"Placeholder image\">";
            col_fig.appendChild(child_obj);
            document.getElementById("vis_type_3").checked=true;
        }

        document.getElementById("cb_img_shadowsOn").disabled=false;
    }

    else if ( (selectedValue==="vid-file") || (selectedValue==="vid-yt") ) {
        removeVisual();
        disableImgProps();
        enableVidProps();

        let child_obj = iframe.contentWindow.document.createElement("figure");

        if (selectedValue==="vid-file") {
            child_obj.innerHTML = "\n\t\t<div class=\"container-video-file\">\n\t\t\t<video controls>\n\t\t\t\t<source src="+el_vid_file+" type=\"video\/mp4\">\n\t\t\t<\/video>\n\t\t</div>\n\t";
            col_fig.appendChild(child_obj);
            document.getElementById("vis_type_4").checked=true;
        }

        else if (selectedValue==="vid-yt") {
            child_obj.innerHTML = "\n\t\t\n\t\t<div class=\"container-video-yt\">\n\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/RNKWoqDlbxc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n\t\t\t<\/iframe>\n\t\t<\/div>\n\t\n\t";
            col_fig.appendChild(child_obj);
            document.getElementById("vis_type_5").checked=true;
        }
    }  
}

/*
//////////////// VISUAL PROPERTIES ///////////////
*/

/* =========== VISUAL: IMAGE SHADOWS ============ */

document.querySelector("#cb_img_shadowsOn").addEventListener("change", doImgShadows);

function doImgShadows() {

    if (!document.getElementById("cb_img_shadowsOn").checked) {
        iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
       
    }
    else {
        iframe.contentWindow.document.querySelector('section').classList.add("fig-shadow");
    }
}

/*
//////////////// VISUAL: IMAGE CORNERS ///////////////
*/

document.querySelector("#cb_img_cornersOn").addEventListener("change", doImgCorners);

function doImgCorners() {

    if (!document.getElementById("cb_img_cornersOn").checked) {
        iframe.contentWindow.document.querySelector('section').classList.remove("fig-corners-soft");
       
    }
    else {
        iframe.contentWindow.document.querySelector('section').classList.add("fig-corners-soft");
    }
}


/* =========== VISUAL: VIDEO SHADOWS ============ */

document.querySelector("#cb_vid_shadowsOn").addEventListener("change", doVidShadows);

function doVidShadows() {

    if (!document.getElementById("cb_vid_shadowsOn").checked) {
        iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
       
    }
    else {
        iframe.contentWindow.document.querySelector('section').classList.add("fig-shadow");
    }
}

/* ============== VISUAL PROPERTIES: ENABLE/DISABLE ========= */
// Image properties with labels
function enableImgProps() {
    document.getElementById("cb_img_cornersOn").disabled=false;
    document.getElementById("cb_img_cornersOn").checked=false;
    document.getElementById("cb_img_shadowsOn").disabled=false;
    document.getElementById("cb_img_shadowsOn").checked=false;
    document.querySelector("label[for='cb_img_cornersOn']").style.color = "#fff";
    document.querySelector("label[for='cb_img_shadowsOn']").style.color = "#fff";
}

function disableImgProps() {
    document.getElementById("cb_img_cornersOn").disabled=true;
    document.getElementById("cb_img_cornersOn").checked=false;
    document.getElementById("cb_img_shadowsOn").disabled=true;
    document.getElementById("cb_img_shadowsOn").checked=false;
    document.querySelector("label[for='cb_img_cornersOn']").style.color = "var(--gray-500)";
    document.querySelector("label[for='cb_img_shadowsOn']").style.color = "var(--gray-500)";
}

// Video properties with labels
function enableVidProps() {
    document.getElementById("cb_vid_shadowsOn").disabled=false;
    document.getElementById("cb_vid_shadowsOn").checked=false;
    document.querySelector("label[for='cb_vid_shadowsOn']").style.color = "#fff";
}

function disableVidProps() {
    document.getElementById("cb_vid_shadowsOn").disabled=true;
    document.getElementById("cb_vid_shadowsOn").checked=false;
    document.querySelector("label[for='cb_vid_shadowsOn']").style.color = "var(--gray-500)";
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-corners-soft");
}

function removeVisual() {
    if (iframe.contentWindow.document.querySelector('section figure')) {
        disableImgProps();
        disableVidProps();
        iframe.contentWindow.document.querySelector('section figure').remove();
    }
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
    let HTML_Content = iframe.contentWindow.document.getElementById("HTML-Content").innerHTML;
    const el = document.createElement('textarea');
    el.value = HTML_Content;
    hideMenus();
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el); 
}

document.querySelector("#btn-copy-css").addEventListener("click", copyCSS);

function copyCSS() {
    hideMenus();
    const el_css = document.createElement('textarea');
    let aLength = arrCSS.length;
    let strCSS  = arrCSS.join(",");
    strCSS = strCSS.replace(/,section/g, "section");
    // strCSS = strCSS.replace(/..container/g, ".container");
    el_css.value = strCSS;
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

/*
//////////////// Responsive resizing icons in navbar ///////////////
*/

document.querySelector("#container-icon-resize-width").addEventListener("click", doResizeWidth);

function doResizeWidth() {
    let img = document.getElementById('img-icon-resize-width').src;

    // Not currently selected
    if (img.indexOf('assets/img/icons/icon-resize-unselected.png')!=-1) {
        document.getElementById('img-icon-resize-width').src = 'assets/img/icons/icon-resize-selected.png';
        showRespIcons();
    }

    // Is currently selected
    else {
       document.getElementById('img-icon-resize-width').src = 'assets/img/icons/icon-resize-unselected.png';
       hideRespIcons();
   }
}

function showRespIcons() {
    console.log("Show responsive icons");
    document.querySelector('.page-preview-options').classList.add("show-options");
}

function hideRespIcons() {
    console.log("Hide responsive icons");
    document.querySelector('.page-preview-options').classList.remove("show-options");
}

const iconsResponsive = document.querySelectorAll('.icon_resize_respon');

iconsResponsive.forEach(icon => {
    icon.addEventListener('click', (e) => {
        // document.querySelector(icon).classList.remove("selected");
        // Get current icon id
        const id = e.currentTarget.id.toString();
        document.getElementById(id).classList.add("selected");
        resetResponsive();

        if (id==="respDesktopLarge") {
            document.getElementById("page-preview-body").classList.add("resp-desktop-large");
            document.querySelector("#respDesktopLarge img").src = "assets/img/icons/icon-resize-desktop-large.png";
        }

        if (id==="respDesktopSmall") {
            document.getElementById("page-preview-body").classList.add("resp-desktop-small");
            document.querySelector("#respDesktopSmall img").src = "assets/img/icons/icon-resize-desktop-small.png";
        }

        else if (id==="respTabletLandscape") {
            document.getElementById("page-preview-body").classList.add("resp-tablet-landscape");
            document.querySelector("#respTabletLandscape img").src = "assets/img/icons/icon-resize-tablet-landscape.png";
        }
        else if (id==="respTabletPortrait") {
            document.getElementById("page-preview-body").classList.add("resp-tablet-portrait");
            document.querySelector("#respTabletPortrait img").src = "assets/img/icons/icon-resize-tablet-portrait.png";
        }        
        
        else if (id==="respMobileLarge") {
            document.getElementById("page-preview-body").classList.add("resp-mobile-large");
            document.querySelector("#respMobileLarge img").src = "assets/img/icons/icon-resize-mobile-large.png";
        }        

        else if (id==="respMobileSmall") {
            document.getElementById("page-preview-body").classList.add("resp-mobile-small")
            document.querySelector("#respMobileSmall img").src = "assets/img/icons/icon-resize-mobile-small.png";           
        }        
    });
});


function resetResponsive() {
    document.getElementById("page-preview-body").classList.remove("resp-desktop-large");
    document.getElementById("page-preview-body").classList.remove("resp-desktop-small");
    document.getElementById("page-preview-body").classList.remove("resp-tablet-landscape");
    document.getElementById("page-preview-body").classList.remove("resp-tablet-portrait");
    document.getElementById("page-preview-body").classList.remove("resp-mobile-large");
    document.getElementById("page-preview-body").classList.remove("resp-mobile-small");

    document.querySelector("#respDesktopLarge img").src = "assets/img/icons/icon-resize-desktop-large-selected.png";
    document.querySelector("#respDesktopSmall img").src = "assets/img/icons/icon-resize-desktop-small-selected.png";
    document.querySelector("#respTabletLandscape img").src = "assets/img/icons/icon-resize-tablet-landscape-selected.png";
    document.querySelector("#respTabletPortrait img").src = "assets/img/icons/icon-resize-tablet-portrait-selected.png";
    document.querySelector("#respMobileLarge img").src = "assets/img/icons/icon-resize-mobile-large-selected.png";  
    document.querySelector("#respMobileSmall img").src = "assets/img/icons/icon-resize-mobile-small-selected.png";  
}

}