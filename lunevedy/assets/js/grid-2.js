/* After frame content loads */
function onFrameLoaded() {
    loadGrid();
} 

function loadGrid() {

// *** Global variables
// Number of dropdown menus on Lunevery navbar
const uiUIenusLength = document.querySelectorAll("#ui-menus li").length;

// Used by color picker to identify section for copying to user's HTML file.
// values with be "section-selector-1", ... "section-selector-6".
let section_class ="section-selector-1"; 

// Used by color picker. Either 'theme-light' or 'theme-dark'.
let section_theme = "section.theme-light."+section_class;

// Number column blocks to loop through
let col_count = iframe.contentWindow.document.querySelectorAll(col_no).length;

sessionStorage.setItem('col-count', col_count);

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
    const menuId = strMenu.charAt(strMenu.length-1);
    const elItem_show = document.querySelector("#content-"+menuId);
    // Unhide current menu
    elItem_show.classList.remove("dropdown-hidden"); 
    
    if (iframe.contentWindow.document.querySelector('.col-1') ) {
        // // Work with upper block
        // if (menuId==="2") {
        //     window.scrollTo(0,0);
        // }
        // Work with columns
        if (menuId==="3") {
            let el = iframe.contentWindow.document.querySelector(col_no);
            el.scrollIntoView(true);
        }
        // Work with buttons
        else if (menuId==="4") {
            window.scrollTo(0,document.body.scrollHeight);
        }
    }
    // Hide color picker
    hideSidebar();
}));

// Hide all menus and color picker when user clicks on frame container.
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
    document.getElementById("cb_col_shadows").checked=false; 
    document.getElementById("cb_col_borders").disabled=false; 
    document.getElementById("cb_col_borders").checked=false; 
    document.getElementById("cb_col_corners").disabled=true; 
    document.getElementById("cb_col_corners").checked=false; 
    const el_section = iframe.contentWindow.document.querySelector("section");
    el_section.classList.remove("col-padding");
    el_section.classList.remove("col-shadows");
    el_section.classList.remove("col-corners");
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
        const span = event.target.closest("span");
        if (span && this.contains(span)) {
            // Ignore this click
            return;
        }
        const rbs = document.querySelectorAll("input[name='picker-radio']");
        let color_code;
    
        for (const rb of rbs) {
            if (rb.checked) {
                color_code = rb.value;
                break;
            }
        }

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

        /* Section upper label */
        else if (btn_id === "btn_upper_label") {
            newStyle = section_theme+ " .container-upper-label { color: var("+color_code+") }\n";
            sub_string = ".container-upper-label";
            doUpdateArray(sub_string,newStyle);
        }

        /* Section upper heading */
        else if (btn_id === "btn_upper_head") {
            newStyle = section_theme+ " .col-1 h2 { color: var("+color_code+") }\n";
            sub_string = "h2";
            doUpdateArray(sub_string,newStyle);
        }

        /* Section upper subheading */
        else if (btn_id === "btn_upper_subhead") {
            newStyle = section_theme+ " .col-1 h3 { color: var("+color_code+") }\n";
            sub_string = "col-1 h3";
            doUpdateArray(sub_string,newStyle); 
        }
        
        /* Column subheading */
        else if (btn_id === "btn_col_subhead") {
            newStyle = section_theme+ " "+col_no+" h3 { color: var("+color_code+") }\n";
            sub_string = section_class+" "+col_no+" h3";
            doUpdateArray(sub_string,newStyle);  
        }
        
        /* Column text */
        else if (btn_id === "btn_col_text") {
            newStyle = section_theme+ " "+col_no+" p { color: var("+color_code+") }\n." +section_class+" "+col_no+" li { color: var("+color_code+") }\n"; 
            sub_string = col_no+" p {";
            doUpdateArray(sub_string,newStyle); 
        }
        
        /* Column background */
        else if (btn_id === "btn_col_background") {
            newStyle = section_theme+ " "+col_no+" { background-color: var("+color_code+") }\n";
            sub_string = col_no+" { background-color";
            doUpdateArray(sub_string,newStyle);

            // Set session storage
            if ( ((iframe.contentWindow.document.querySelector("section.theme-light")) && (color_code==="--white-000")) || ((iframe.contentWindow.document.querySelector("section.theme-dark")) && (color_code==="--slate-900")) ) {
                sessionStorage.setItem('col-background', 'default');
                RemoveColPadding();
            }
            else {
                sessionStorage.setItem('col-background', 'nondefault');
                // Add col-padding if not already present
                if(!iframe.contentWindow.document.querySelector("section.col-padding")) {
                    const el_section = iframe.contentWindow.document.querySelector("section");
                    el_section.classList.add("col-padding");
                }
                // Enable col corners
                document.getElementById("cb_col_corners").disabled=false; 
                document.getElementById("cb_col_corners").checked=false; 
            }
        }
        
        /* Column borders colour */
        else if (btn_id === "btn_col_border_color") {
            newStyle = section_theme+ ".col-borders "+col_no+" { border-color: var("+color_code+") }\n";
            sub_string = "col-borders";
            doUpdateArray(sub_string,newStyle);
        }            
        
        /* === Buttons === */        
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

        /* Icons colour */
        else if (btn_id === "btn_icon_color") {
            newStyle =  section_theme+" "+col_no+" figure.icon { color: var("+color_code+") }\n";
            sub_string = "figure.icon";
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

function RemoveColPadding() {
    // Test for no border, no shadow and not default theme
    if ((!iframe.contentWindow.document.querySelector("section.col-borders")) && (!iframe.contentWindow.document.querySelector("section.col-shadows") )  ) {
        if (sessionStorage.getItem('col-background')) {
            const sessData = sessionStorage.getItem('col-background');
            if (sessData==="default") {
                const el_section = iframe.contentWindow.document.querySelector("section");
                el_section.classList.remove("col-padding");
            }
        }
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
//////////////// UPPER COLUMN WIDTH ///////////////
*/

document.querySelector("#dd_upper_block_width").addEventListener("change", doUpperBlockWidth);

function doUpperBlockWidth() {
    let opt = document.querySelector("#dd_upper_block_width").value;

    if (opt==="0") {
        iframe.contentWindow.document.querySelector("#HTML-Content section .col-1").classList.remove("col-1-width-960px");
        iframe.contentWindow.document.querySelector("#HTML-Content section .col-1").classList.remove("col-1-width-1140px");
        iframe.contentWindow.document.querySelector("#HTML-Content section .col-1").classList.add("col-1-width-800px");
    }

    else if (opt==="1") {
        iframe.contentWindow.document.querySelector("#HTML-Content section .col-1").classList.remove("col-1-width-800px");
        iframe.contentWindow.document.querySelector("#HTML-Content section .col-1").classList.remove("col-1-width-1140px");
        iframe.contentWindow.document.querySelector("#HTML-Content section .col-1").classList.add("col-1-width-960px");
    }

    else if (opt==="2") {
        iframe.contentWindow.document.querySelector("#HTML-Content section .col-1").classList.remove("col-1-width-800px");
        iframe.contentWindow.document.querySelector("#HTML-Content section .col-1").classList.remove("col-1-width-960px");
        iframe.contentWindow.document.querySelector("#HTML-Content section .col-1").classList.add("col-1-width-1140px");
    }    
}

/*
//////////////// UPPER COLUMN ALIGN ///////////////
*/

if (document.querySelector("#switch-upper-block-align")) {
    document.querySelector("#switch-upper-block-align").addEventListener("change", doUpperBlockAlign);
}

function doUpperBlockAlign() {
    const rbs = document.querySelectorAll("input[name='upper-block-align']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        iframe.contentWindow.document.querySelector("section .col-1").classList.remove("text-center");
    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector("section .col-1").classList.add("text-center"); 
    }
}

/*
//////////////// UPPER CATEGORY LABEL ABOVE H2 ///////////////
*/

document.querySelector("#cb_upper_label").addEventListener("change", doUpperLabel);

function doUpperLabel() {

    if (iframe.contentWindow.document.querySelector("section .col-1")) {
        if (!document.getElementById("cb_upper_label").checked) {
            removeUpperLabel();
        }
        else {
            removeUpperLabel();
            const newUpperLabelDiv = document.createElement("div");
            const newUpperLabelSpan = document.createElement("span");
            newUpperLabelDiv.appendChild(newUpperLabelSpan);
            newUpperLabelDiv.classList.add("container-upper-label"); 
            iframe.contentWindow.document.querySelector("section .col-1").prepend(newUpperLabelDiv);
            iframe.contentWindow.document.querySelector("section .col-1 .container-upper-label span").innerText = "CATEGORY";
            iframe.contentWindow.document.querySelector('.col-1').innerHTML = iframe.contentWindow.document.querySelector('.col-1').innerHTML.replace("<div class=\"container-upper-label\">", "\n\t\t\t<div class=\"container-upper-label\">\n\t\t\t\t");
            iframe.contentWindow.document.querySelector('.col-1').innerHTML = iframe.contentWindow.document.querySelector('.col-1').innerHTML.replace("<\/span>", "<\/span>\n\t\t\t");
            document.getElementById("btn_upper_label").disabled=false;
        }
    }
}

function removeUpperLabel() {
    if (iframe.contentWindow.document.querySelector('.container-upper-label')) {
        const upperLabel = iframe.contentWindow.document.querySelector('.container-upper-label');
        upperLabel.remove();
        iframe.contentWindow.document.querySelector('.col-1').innerHTML = iframe.contentWindow.document.querySelector('.col-1').innerHTML.replace("\t\t\t\n", "");
        document.getElementById("btn_upper_label").disabled=true;
        if ( (!iframe.contentWindow.document.querySelector('.col-1 > h2')) && (!iframe.contentWindow.document.querySelector('.col-1 > h3')) ) {
            removeUpperBlock();
        }
    }
}

/*
//////////////// UPPER BLOCK: MAIN HEADING H2 ///////////////
*/

if (document.querySelector("#cb_upper_h2")) {
    document.querySelector("#cb_upper_h2").addEventListener("change", doUpperH2);
}

function doUpperH2() {
    if (!document.getElementById("cb_upper_h2").checked) {
        removeUpperH2();
    }
    else {
        removeUpperH2();
        document.getElementById("btn_upper_head").disabled=false;
        const newH2 = iframe.contentWindow.document.createElement("h2");
        const newContent = iframe.contentWindow.document.createTextNode("Nice section heading");
        newH2.appendChild(newContent);
        const currentDiv = iframe.contentWindow.document.querySelector('.col-1');
        if (!iframe.contentWindow.document.querySelector('.container-upper-label')) {
            currentDiv.prepend(newH2);
        }
        else {
            iframe.contentWindow.document.querySelector(".container-upper-label").insertAdjacentHTML("afterend", "<h2>Nice section heading</h2>"); 
        }
    }
}

function removeUpperH2() {
    if (iframe.contentWindow.document.querySelector('.col-1 h2')) {
        document.getElementById("btn_upper_head").disabled=true;
        const elH2 = iframe.contentWindow.document.querySelector('.col-1 h2');
        elH2.remove();
        if (iframe.contentWindow.document.querySelector('section .col-1.text-center')) {
            iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace('<div class=\"col-1 text-center\">\n\t\t\t', '<div class=\"col-1 text-center\">');
        }
        if (iframe.contentWindow.document.querySelector('section .col-1')) {
            iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace('<div class=\"col-1\">\n\t\t\t', '<div class=\"col-1\">');
        }
    }
}

/*
//////////////// UPPER H3 SUB-HEADING ////////////////////
*/

document.querySelector("#cb_upper_h3").addEventListener("change", doUpperH3);

function doUpperH3() {
    if (!document.getElementById("cb_upper_h3").checked) {
        removeUpperH3();
    }
    else {
        removeUpperH3();
        const newSubHead = document.createElement("h3");
        const newContent = document.createTextNode("Leverage agile frameworks to provide a robust synopsis for high level overviews to foster collaborative thinking.");
        newSubHead.appendChild(newContent);
        const currentDiv = iframe.contentWindow.document.querySelector('.col-1');
        currentDiv.append(newSubHead);
        document.getElementById("btn_upper_subhead").disabled=false;
    }
}


function removeUpperH3() {
    if (iframe.contentWindow.document.querySelector("section > h3")) {
        iframe.contentWindow.document.querySelector("section > h3").remove();
        document.getElementById("btn_subhead").disabled=true;
    }

    else if (iframe.contentWindow.document.querySelector("section.cols-2-split")) {
        iframe.contentWindow.document.querySelector("section.cols-2-split .col-2 h3").remove();
        document.getElementById("btn_subhead").disabled=true;
    }
    else if (iframe.contentWindow.document.querySelector("section .col-1 h3")) {
        iframe.contentWindow.document.querySelector("section .col-1 h3").remove();
        document.getElementById("btn_upper_subhead").disabled=true;
    }
    if (iframe.contentWindow.document.querySelector('.col-1 h2')) {
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace('<\/h2>\n\t\t\t', '<\/h2>');
    }
    // if (document.querySelector('section .col-1')) {
    //     document.querySelector('section').innerHTML = document.querySelector('section').innerHTML.replace('<div class=\"col-1\">\n\t\t\t', '<div class=\"col-1\">');
    // }
}

/*
//////////////// UPPER BLOCK ///////////////
*/

document.querySelector("#cb_upper_block").addEventListener("change", doUpperBlock);

function doUpperBlock() {
    if (!document.getElementById("cb_upper_block").checked) {
        removeUpperBlock();
    }
    else {
        const newUpperBlockDiv = iframe.contentWindow.document.createElement("div");
        newUpperBlockDiv.classList.add("col-1"); 
        newUpperBlockDiv.classList.add("text-center"); 
        iframe.contentWindow.document.querySelector("section").prepend(newUpperBlockDiv);
        iframe.contentWindow.document.querySelector('.col-1').innerHTML = iframe.contentWindow.document.querySelector('.col-1').innerHTML.replace('', '\n\t\t\t<h2>Nice section heading</h2>\n\t\t\t<h3>Leverage agile frameworks to provide a robust synopsis for high level overviews to foster collaborative thinking.</h3>\n\t\t');
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace('<div class="col-1 text-center">', '\n\n\t\t<div class="col-1 text-center">');
        // Enable properties
        document.getElementById("dd_upper_block_width").disabled=false;
        document.getElementById("rb_upper_align_left").disabled=false;
        document.getElementById("rb_upper_align_left").checked=false;
        document.getElementById("rb_upper_align_center").checked=true;
        document.getElementById("rb_upper_align_center").disabled=false;
        document.getElementById("dd_upper_block_width").disabled=false;

        document.getElementById("cb_upper_label").disabled=false;
        document.getElementById("cb_upper_label").checked=false;
        document.getElementById("cb_upper_h2").disabled=false;
        document.getElementById("cb_upper_h2").checked=true;
        document.getElementById("cb_upper_h3").disabled=false;
        document.getElementById("cb_upper_h3").checked=true;
        document.getElementById("btn_upper_label").disabled=true;
        document.getElementById("btn_upper_head").disabled=false;
        document.getElementById("btn_upper_subhead").disabled=false;
        document.querySelector("#content-2 .svg-icon-desktop").style.fill='#fff';
    }
}

function removeUpperBlock() {
    if (iframe.contentWindow.document.querySelector('.col-1')) {
        const elCol1 = iframe.contentWindow.document.querySelector('.col-1');
        elCol1.remove();
        col_no = col_no.slice(1)
        iframe.contentWindow.document.querySelector('section').innerHTML = 
        iframe.contentWindow.document.querySelector('section').innerHTML.replace("\n\n\t\t<div class=\""+col_no+"\">", "<div class=\""+col_no+"\">");

        // Disable properties
        document.getElementById("cb_upper_block").checked=false;
        document.getElementById("rb_upper_align_left").disabled=true;
        document.getElementById("rb_upper_align_left").checked=false;
        document.getElementById("rb_upper_align_center").disabled=true;
        document.getElementById("rb_upper_align_center").checked=false;
        document.getElementById("dd_upper_block_width").disabled=true;

        document.querySelector("#content-2 .svg-icon-desktop").style.fill='var(--gray-600)';
        document.getElementById("cb_upper_label").disabled=true;
        document.getElementById("cb_upper_label").checked=false;
        document.getElementById("cb_upper_h2").disabled=true;
        document.getElementById("cb_upper_h2").checked=false;
        document.getElementById("cb_upper_h3").disabled=true;
        document.getElementById("cb_upper_h3").checked=false;
        document.getElementById("btn_upper_label").disabled=true;
        document.getElementById("btn_upper_head").disabled=true;
        document.getElementById("btn_upper_subhead").disabled=true;
        // Restore .col-n
        col_no = "."+col_no;
    }
}


/*
//////////////// COLUMNS ALIGN ///////////////
*/

document.querySelector("#switch-col-align").addEventListener("change", doColAlign);

function doColAlign() {
    const rbs = document.querySelectorAll("input[name='col-align']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        iframe.contentWindow.document.querySelector("section").classList.remove("text-center");
    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector("section").classList.add("text-center"); 
    }
}

/*
//////////////// COLUMNS WIDTH ON MOBILES ///////////////
*/

if (document.querySelector("#dd_cols_mobile")) {
    document.querySelector("#dd_cols_mobile").addEventListener("change", doColMobileWidth);
}

function doColMobileWidth() {
    let opt = document.querySelector("#dd_cols_mobile").value;
    const el_section = iframe.contentWindow.document.querySelector('section')

    if (opt==="0") {
        el_section.classList.remove("mobile-col-2");
    }

    else if (opt==="1") {
        el_section.classList.add("mobile-col-2");
    }
}

/*
//////////////// COLUMN SUB-HEADINGS ////////////////////
*/

document.querySelector("#cb_h3").addEventListener("change", doColH3);

function doColH3() {
    if (!document.getElementById("cb_h3").checked) {
        removeColH3();
    }

    else {
        removeColH3();
        document.getElementById("btn_col_subhead").disabled=false;

        // Test for .col-1. Affects div:nth-of-type loop.
        let counterOffset;
        if (iframe.contentWindow.document.querySelector("section > .col-1")) {
            counterOffset = 2;
        }
        else {
            counterOffset = 1;
        }

        // Count column blocks
        let col_count = parseInt(sessionStorage.getItem('col-count'));

        // Test for figures (images or icons)
        if (iframe.contentWindow.document.querySelector("section > "+col_no+" > figure")) {
            // Loop through figures
            let el_fig;
            for (let i = 0; i < col_count; i++) {
                el_fig = iframe.contentWindow.document.querySelector('section > div:nth-of-type('+[i+counterOffset]+') > figure');
                el_fig.insertAdjacentHTML("afterend", content_h3[i]);
            }
        }
            
        // Test for paragraphs
        else if (iframe.contentWindow.document.querySelector("section > "+col_no+" p")) {
            // Loop through paragraphs
            let el_para;
            for (let j = 0; j < col_count; j++) {
                el_para = iframe.contentWindow.document.querySelector('section > div:nth-of-type('+[j+counterOffset]+') > p');                
                el_para.insertAdjacentHTML("beforebegin", content_h3[j]);
            }
        }

        // Test for lists
        else if (iframe.contentWindow.document.querySelector("section > "+col_no+" > ul")) {
            // Loop through lists
            let el_ul;
            for (let k = 0; k < col_count; k++) {
                el_ul = iframe.contentWindow.document.querySelector('section > div:nth-of-type('+[k+counterOffset]+') > ul');
                el_ul.insertAdjacentHTML("beforebegin", content_h3[k]);
            }
        }

        // No pics, icons, paras, lists
        else {
            // Loop through columns
            let el_col;
            for (let n = 0 ; n < col_count; n++) {
                el_col = iframe.contentWindow.document.querySelector(col_no+":nth-child("+n+")");
                el_col.innerHTML = content_h3[n];
            }
        }
    }
}

function removeColH3() {
    if (iframe.contentWindow.document.querySelector(col_no+" h3")) {
        document.getElementById("btn_col_subhead").disabled=true;
        const elH3 = iframe.contentWindow.document.querySelectorAll(col_no+" h3");
        for (let i = 0 ; i < elH3.length ; i++) {
            elH3[i].remove();
        }
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replaceAll('</figure>\n\t\t\t', '</figure>');  
    }
}

/*
//////////////// COLUMN PARAGRAPHS OR LISTS ////////////////////
*/

document.querySelector("#dd_text").addEventListener("change", doText);

function doText() {

    let opt = document.querySelector("#dd_text").value;
   
    // remove
    if (opt==="0") {
        document.querySelector("#btn_col_text").disabled=true;
        removeText();
    }
    
    else if (opt==="1") {
        document.querySelector("#btn_col_text").disabled=false;
        // Do Paragraphs
        removeText();

        // Test for .col-1. Affects div:nth-of-type loop.
        let counterOffset;
        if (iframe.contentWindow.document.querySelector("section > .col-1")) {
            counterOffset = 2;
        }
        else {
            counterOffset = 1;
        }

        // Count column blocks
        let col_count = parseInt(sessionStorage.getItem('col-count'));

        // Test for figures AND h3 column headings
        if ( (iframe.contentWindow.document.querySelector("section > "+col_no+" > figure")) && (iframe.contentWindow.document.querySelector("section > "+col_no+" > h3")) ) {
            // Loop through h3 sub-headings
            let el_h3;
            for (let i = 0; i < col_count; i++) {
                el_h3 = iframe.contentWindow.document.querySelector('section > div:nth-of-type('+[i+counterOffset]+') > h3');
                el_h3.insertAdjacentHTML("afterend", content_paras[i]);
           }
        }
        
        // Test for figures (images or icons) and NO h3 column headings
        else if ( (iframe.contentWindow.document.querySelector("section > "+col_no+" > figure")) && (!iframe.contentWindow.document.querySelector("section > "+col_no+" > h3")) ) {
            // Loop through figures
            let el_fig;
            for (let j = 0; j < col_count; j++) {
                el_fig = iframe.contentWindow.document.querySelector('section > div:nth-of-type('+[j+counterOffset]+') > figure');
                el_fig.insertAdjacentHTML("afterend", content_paras[j]);
           }
        }

        // Test for h3 column headings and NO figures
        else if ( (!iframe.contentWindow.document.querySelector("section > "+col_no+" figure")) && (iframe.contentWindow.document.querySelector("section > "+col_no+" > h3")) ) {
            // Loop through h3 sub-headings
            let el_h3;
            for (let k = 0; k < col_count; k++) {
                el_h3 = iframe.contentWindow.document.querySelector('section > div:nth-of-type('+[k+counterOffset]+') > h3');
                el_h3.insertAdjacentHTML("afterend", content_paras[k]);
           }
        }

        // No figures AND no column headings
        else if ( (!iframe.contentWindow.document.querySelector("section > "+col_no+" > figure")) && (!iframe.contentWindow.document.querySelector("section > "+col_no+" > h3")) ) {
            // Loop through columns
            let el_col;
            for (let n = 0; n < col_count; n++) {
                el_col = iframe.contentWindow.document.querySelector('section > div:nth-of-type('+[n+counterOffset]);
                el_col.innerHTML = content_paras[n];
            }
        }
    }

    else if (opt==="2") {
        removeText();
        document.querySelector("#btn_col_text").disabled=false;

        // Test for .col-1. Affects div:nth-of-type loop.
        let counterOffset;
        if (iframe.contentWindow.document.querySelector("section > .col-1")) {
            counterOffset = 2;
        }
        else {
            counterOffset = 1;
        }

        // Count column blocks
        let col_count = parseInt(sessionStorage.getItem('col-count'));

        // Test for figures AND h3 column headings
        if ( (iframe.contentWindow.document.querySelector("section > "+col_no+" > figure")) && (iframe.contentWindow.document.querySelector("section > "+col_no+" h3")) ) {
            // Loop through h3 sub-headings
            let el_h3;
            for (let i = 0; i < col_count; i++) {
                el_h3 = iframe.contentWindow.document.querySelector('section > div:nth-of-type('+[i+counterOffset]+') > h3');
                el_h3.insertAdjacentHTML("afterend", content_list[i]);
           }
        }
        
        // Test for figures (images or icons)
        else if (iframe.contentWindow.document.querySelector("section > "+col_no+" figure")) {
            // Loop through figures
            let el_fig;
            for (let j = 0; j < col_count; j++) {
                el_fig =  iframe.contentWindow.document.querySelector('section > div:nth-of-type('+[j+counterOffset]+') > figure');
                el_fig.insertAdjacentHTML("afterend", content_list[j]);
           }
        }

        // Test for h3 column headings
        else if (iframe.contentWindow.document.querySelector("section > "+col_no+" h3")) {
            // Loop through h3 sub-headings
            let el_h3;
            for (let k = 0; k < col_count; k++) {
                el_h3 = iframe.contentWindow.document.querySelector('section > div:nth-of-type('+[k+counterOffset]+') > h3');
                el_h3.insertAdjacentHTML("afterend", content_list[k]);
           }
        }

        // No pics, icons, h3 headings
        else {
            // Loop through columns
            let el_col;
            for (let n = 0; n < col_count; n++) {
                el_col = iframe.contentWindow.document.querySelector('section > div:nth-of-type('+[n+counterOffset]);
                el_col.innerHTML = content_list;
            }
        }
    }
}

function removeText() {
    const el_para = iframe.contentWindow.document.querySelectorAll(col_no+" p");
    for (var i = 0 ; i < el_para.length ; i++) {
      el_para[i].remove();
    }
    const el_bullet = iframe.contentWindow.document.querySelectorAll(col_no+" li");
    for (var i = 0 ; i < el_bullet.length ; i++) {
        el_bullet[i].remove();
    }
    const el_list = iframe.contentWindow.document.querySelectorAll(col_no+" ul");
    for (var i = 0 ; i < el_list.length ; i++) {
        el_list[i].remove();
    }
}

/*
//////////////// COLUMNS SHADOWS ///////////////
*/

document.querySelector("#cb_col_shadows").addEventListener("change", doColShadows);

function doColShadows() {

    const el_section = iframe.contentWindow.document.querySelector('section')

    if (!document.getElementById("cb_col_shadows").checked) {
        el_section.classList.remove("col-shadows");
        el_section.classList.remove("corners-soft");
        // Enable corner and border options
        document.getElementById("cb_col_borders").disabled=false;
        document.getElementById("cb_col_borders").checked=false;
        document.getElementById("cb_col_corners").disabled=false; 
        document.getElementById("cb_col_corners").checked=false;
        // document.getElementById("cb_col_shadows").disabled=true; 
        document.getElementById("cb_col_shadows").checked=false; 
        RemoveColPadding();
    }

    else {
        el_section.classList.add("col-padding");
        el_section.classList.add("col-shadows");
        el_section.classList.add("corners-soft");
        // Disable corner and border options
        document.getElementById("cb_col_borders").disabled=true;
        document.getElementById("cb_col_borders").checked=false;
        document.getElementById("cb_col_corners").disabled=true; 
        document.getElementById("cb_col_corners").checked=false;
    }
}

/*
//////////////// COLUMNS BORDERS ///////////////
*/

document.querySelector("#cb_col_borders").addEventListener("change", doColBorders);

function doColBorders() {
    const el_section = iframe.contentWindow.document.querySelector('section')

    if (!document.getElementById("cb_col_borders").checked) {
        el_section.classList.remove("col-borders");
        el_section.classList.remove("corners-soft");
        document.getElementById("cb_col_corners").disabled=true; 
        document.getElementById("cb_col_corners").checked=false;
        document.getElementById("cb_col_borders").disabled=false;
        document.getElementById("btn_col_border_color").disabled=true;
        document.getElementById("cb_col_shadows").disabled=false; 
        document.getElementById("cb_col_shadows").checked=false; 
        RemoveColPadding();
    }

    else {
        el_section.classList.add("col-padding");
        el_section.classList.add("col-borders");
        document.getElementById("cb_col_corners").disabled=false; 
        document.getElementById("cb_col_corners").checked;
        document.getElementById("cb_col_borders").disabled=false;
        document.getElementById("btn_col_border_color").disabled=false;
        document.getElementById("cb_col_shadows").disabled=true; 
        document.getElementById("cb_col_shadows").checked=false; 
    }
}

/*
//////////////// COLUMNS BORDER CORNERS ///////////////
*/

document.querySelector("#cb_col_corners").addEventListener("change", doColCorners);

function doColCorners() {
    const el_section = iframe.contentWindow.document.querySelector('section')

    if (!document.getElementById("cb_col_corners").checked) {
        el_section.classList.remove("corners-soft");
    }

    else {
        el_section.classList.add("corners-soft");
    }
}

/*
//////////////// BUTTONS ////////////////////
*/

document.querySelector("#cb_colButtons").addEventListener("change", doColButtons);

function doColButtons() {
    if (!document.getElementById("cb_colButtons").checked) {
        removeColButtons();
        disableColButtons();
    }
    else {
        const btn_class="btn-primary";
        const col_count = parseInt(sessionStorage.getItem('col-count'));
        const obj_col = iframe.contentWindow.document.querySelectorAll('section > '+col_no);
        let el_col; // each child column block
        // Loop through columns
        for (let i = 0; i < col_count; i++) {        
            el_col = obj_col[i];
            addColButtons(el_col,btn_class);
        }
        enableColButtons();
    }
}

function addColButtons(el_cols,btn_class) {
    const el_btn = document.createElement('a');
    el_btn.setAttribute("href", "#");
    el_btn.setAttribute("class", "btn "+btn_class);
    const el_icon = document.createElement('i');
    el_icon.setAttribute("class", "fas fa-shopping-cart");
    el_btn.append(el_icon);
    const btn_text = "<span>Order Now</span>";
    el_icon.insertAdjacentHTML('afterend', btn_text);
    el_cols.append(el_btn);
    window.scrollTo(0,iframe.contentWindow.document.querySelector("#HTML-Content").scrollHeight);
}

function removeColButtons() {
    const col_count = parseInt(sessionStorage.getItem('col-count'));
    const obj_btn = iframe.contentWindow.document.querySelectorAll('section > '+col_no+' > a.btn');
    let el_btn;
    // Loop through buttons
    for (let i = 0; i < col_count; i++) {        
        el_btn = obj_btn[i];
        el_btn.remove();
    }
    document.getElementById("dd_buttons_style").disabled=true;
    document.getElementById("dd_buttons_style").value="0";
    disableColButtons();
}

/*
//////////////// BUTTONS: TYPE ////////////////////
*/

document.querySelector("#dd_buttons_type").addEventListener("change", doButtonsType);

function doButtonsType() {
    let opt = document.querySelector("#dd_buttons_type").value;
    const col_count = parseInt(sessionStorage.getItem('col-count'));
    const obj_btn = iframe.contentWindow.document.querySelectorAll('section > '+col_no+' > a.btn');
    let el_btn;
    
    // Solid
    if (opt==="0") {
        // Loop through buttons
        for (let i = 0; i < col_count; i++) {        
            el_btn = obj_btn[i];
            el_btn.classList.remove("btn-outline");
            el_btn.classList.remove("btn-link");
            el_btn.classList.add("btn-primary");
        }
    }

    // Outline
    else if (opt==="1") {
        // Loop through buttons
        for (let i = 0; i < col_count; i++) {        
            el_btn = obj_btn[i];
            el_btn.classList.remove("btn-primary");
            el_btn.classList.remove("btn-link");
            el_btn.classList.add("btn-outline");
        }
    }

    // Link
    else if (opt==="2") {
        // Loop through buttons
        for (let i = 0; i < col_count; i++) {        
            el_btn = obj_btn[i];
            el_btn.classList.remove("btn-primary");
            el_btn.classList.remove("btn-outline");
            el_btn.classList.add("btn-link");
        }
    }
}

/*
//////////////// BUTTONS: STYLE ////////////////////
*/

document.querySelector("#dd_buttons_style").addEventListener("change", doButtonsStyle);

function doButtonsStyle() {
    let opt = document.querySelector("#dd_buttons_style").value;
    const col_count = parseInt(sessionStorage.getItem('col-count'));
    const obj_btn = iframe.contentWindow.document.querySelectorAll('section > '+col_no+' > a.btn');
    let el_btn;
    
    // remove
    if (opt==="0") {
        removeButtonsStyle();
    }

    // soft
    else if (opt==="1") {
        removeButtonsStyle();
        // Loop through buttons
        for (let i = 0; i < col_count; i++) {        
            el_btn = obj_btn[i];
            el_btn.classList.add("btn-soft");
        }
    }

    // rounded
    else if (opt==="2") {
        removeButtonsStyle();
        // Loop through buttons
        for (let i = 0; i < col_count; i++) {        
            el_btn = obj_btn[i];
            el_btn.classList.add("btn-rounded");
        }
    }
}

function removeButtonsStyle() {
    let opt = document.querySelector("#dd_buttons_style").value;
    const col_count = parseInt(sessionStorage.getItem('col-count'));
    const obj_btn = iframe.contentWindow.document.querySelectorAll('section > '+col_no+' > a.btn');
    let el_btn;
    // Loop through buttons
    for (let i = 0; i < col_count; i++) {        
        el_btn = obj_btn[i];
        el_btn.classList.remove("btn-soft");
        el_btn.classList.remove("btn-rounded");
    }
}

/*
//////////////// BUTTONS: ICONS POSITION ////////////////////
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

    if (iframe.contentWindow.document.querySelector('section > '+col_no+' > a.btn')) {
        const col_count = parseInt(sessionStorage.getItem('col-count'));
        const obj_btn = iframe.contentWindow.document.querySelectorAll('section > '+col_no+' > a.btn');
        const icon_left  ="<i class=\"fas fa-shopping-cart\"><\/i><span>Order Now<\/span>";
        const icon_right ="<span>Order Now<\/span><i class=\"fas fa-arrow-circle-right\"><\/i>";
        let el_btn;

        if (selectedValue==="btns-icons-left") {
        // Loop through buttons
        // Move text to right, icon to left
            for (let i = 0; i < col_count; i++) {        
                el_btn = obj_btn[i];
                btn_content = el_btn.innerHTML;
                if (( btn_content = icon_right) || (btn_content = icon_right)) {
                    btn_content = btn_content.replace(icon_right, icon_left);
                    el_btn.innerHTML = btn_content;
                }
            }
        }
    
        else if (selectedValue==="btns-icons-right") {
            // Loop through buttons
            // Move text to left, icon to right
            for (let i = 0; i < col_count; i++) {        
                el_btn = obj_btn[i];
                btn_content = el_btn.innerHTML;

                if (( btn_content = icon_right) || (btn_content = icon_right)) {
                    btn_content = btn_content.replace(icon_left, icon_right);
                    el_btn.innerHTML = btn_content;
                }
            }
        }
    
        else if (selectedValue==="btns-icons-none") {
            // Loop through buttons
            // Only text. No icons.
            for (let i = 0; i < col_count; i++) {        
                el_btn = obj_btn[i];
                btn_content = el_btn.innerHTML;
                btn_content = "<span>Order now</span>";
                el_btn.innerHTML = btn_content;
            }
        }
    }
}


/*
//////////////// BUTTONS: WIDTH ///////////////
*/

document.querySelector("#cb_col_buttons_width").addEventListener("change", doBtnWidth);

function doBtnWidth() {
    const col_count = parseInt(sessionStorage.getItem('col-count'));
    const obj_btn = iframe.contentWindow.document.querySelectorAll('section > '+col_no+' > a.btn');
    let el_btn;

    if (!document.getElementById("cb_col_buttons_width").checked) {
        // Loop through buttons
        for (let i = 0; i < col_count; i++) {        
            el_btn = obj_btn[i];
            el_btn.classList.remove("btn-block");
        }
    }
    else {
        // Loop through buttons
        for (let i = 0; i < col_count; i++) {        
            el_btn = obj_btn[i];
            el_btn.classList.add("btn-block");
        }
    }
}

/*
//////////////// BUTTONS: SIZE ////////////////////
*/

document.querySelector("#dd_buttons_size").addEventListener("change", doButtonsSize);

function doButtonsSize() {
    let opt = document.querySelector("#dd_buttons_size").value;
    const col_count = parseInt(sessionStorage.getItem('col-count'));
    const obj_btn = iframe.contentWindow.document.querySelectorAll('section > '+col_no+' > a.btn');
    let el_btn;
    
    // Small
    if (opt==="0") { 
        // Loop through buttons
        for (let i = 0; i < col_count; i++) {        
            el_btn = obj_btn[i];
            el_btn.classList.remove("btn-large");
            el_btn.classList.add("btn-small");
        }
    }
    // Regular
    else if (opt==="1") { 
        // Loop through buttons
        for (let i = 0; i < col_count; i++) {        
            el_btn = obj_btn[i];
            el_btn.classList.remove("btn-small");
            el_btn.classList.remove("btn-large");
        }
    }
    
    // Large
    else if (opt==="2") { 
        // Loop through buttons
        for (let i = 0; i < col_count; i++) {        
            el_btn = obj_btn[i];
            el_btn.classList.remove("btn-small");
            el_btn.classList.add("btn-large");
        }
    }    
}


function enableColButtons() {
    document.getElementById("btn_a_primary_passive_text").disabled=false;
    document.getElementById("btn_a_primary_active_text").disabled=false;
    document.getElementById("btn_a_primary_passive_bg").disabled=false;
    document.getElementById("btn_a_primary_active_bg").disabled=false;
    document.getElementById("btn_a_primary_passive_border").disabled=false;
    document.getElementById("btn_a_primary_active_border").disabled=false;
    document.getElementById("dd_buttons_type").disabled=false;
    document.getElementById("dd_buttons_type").value="0";
    document.getElementById("dd_buttons_style").value="0";
    document.getElementById("dd_buttons_style").disabled=false;
    document.getElementById("dd_buttons_size").value="1";
    document.getElementById("dd_buttons_size").disabled=false;
    document.getElementById("rd-btns-icons-left").checked=true;
    document.getElementById("rd-btns-icons-left").disabled=false;
    document.getElementById("rd-btns-icons-right").disabled=false;
    document.getElementById("rd-btns-icons-none").disabled=false;
    document.getElementById("cb_col_buttons_width").disabled=false;
    document.getElementById("cb_col_buttons_width").checked=false;
}

function disableColButtons() {
    document.getElementById("btn_a_primary_passive_text").disabled=true;
    document.getElementById("btn_a_primary_active_text").disabled=true;
    document.getElementById("btn_a_primary_passive_bg").disabled=true;
    document.getElementById("btn_a_primary_active_bg").disabled=true;
    document.getElementById("btn_a_primary_passive_border").disabled=true;
    document.getElementById("btn_a_primary_active_border").disabled=true;
    document.getElementById("rd-btns-icons-left").checked=false;
    document.getElementById("rd-btns-icons-right").checked=false;
    document.getElementById("rd-btns-icons-none").checked=false;
    document.getElementById("rd-btns-icons-left").disabled=true;
    document.getElementById("rd-btns-icons-right").disabled=true;
    document.getElementById("rd-btns-icons-none").disabled=true;
    document.getElementById("dd_buttons_type").disabled=true;
    document.getElementById("dd_buttons_type").value="0";
    document.getElementById("dd_buttons_style").value="0";
    document.getElementById("dd_buttons_style").disabled=true;
    document.getElementById("dd_buttons_size").value="1";
    document.getElementById("dd_buttons_size").disabled=true;
    document.getElementById("cb_col_buttons_width").disabled=true;
    document.getElementById("cb_col_buttons_width").checked=false;
}

/*
////////////////////// VISUALS ///////////////////////
*/

document.querySelector("#vis-types-all").addEventListener("click", doVisType);

function doVisType() { 
    const rbs = document.querySelectorAll("#vis-types-all input[name='visual_options']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
  
    if (selectedValue==="none") {
        removeVisual();
    }

    else if ( (selectedValue==="pictures") || (selectedValue==="transparent") || (selectedValue==="illustrations") ) {
        removeVisual();
        const obj_col = iframe.contentWindow.document.querySelectorAll(col_no);
        let el_cols; // each child column block
        // loop through columns.
        // nth-child cols begin at 2.
        // So first column updated has loop index [i] of 2, second has [i] of 3, etc.
        for (let i = 2; i <= obj_col.length+1; i++) {
            // Current content of each column block
            el_cols = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+")");
            // Add figure at end of current content
            if (selectedValue==="pictures") {
                el_cols.innerHTML = arrPic[i-2] + el_cols.innerHTML; 
            }
            else if (selectedValue==="transparent") {
                el_cols.innerHTML = arrTrans[i-2] + el_cols.innerHTML; 
            }
            else if (selectedValue==="illustrations") {
                el_cols.innerHTML = arrIllus[i-2] + el_cols.innerHTML; 
            }
        }
        // Enable image properties
        enableImgProps();
    }

    else if ( (selectedValue==="icons-fa") || (selectedValue==="icons-la") ) {
        removeVisual();
        const obj_col = iframe.contentWindow.document.querySelectorAll(col_no);
        for (let i = 2; i <= parseInt(obj_col.length)+1; i++) {
            el_cols = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+")");
            if (selectedValue==="icons-fa") {
                el_cols.innerHTML = arrIconFA[i-2] + el_cols.innerHTML; 
            }
            else if (selectedValue==="icons-la") {
                el_cols.innerHTML = arrIconLA[i-2] + el_cols.innerHTML; 
            }
        }
        // Enables icon properties
        document.getElementById("cb-icon-size-plus").checked=true;
        document.getElementById("cb-icon-size-minus").checked=false;
        document.getElementById("cb-icon-size-plus").disabled=false;
        document.getElementById("cb-icon-size-minus").disabled=false;
        document.getElementById("radio-icon-align-left").disabled=false;
        document.getElementById("radio-icon-align-center").disabled=false;
        document.getElementById("radio-icon-align-left").checked=false;
        document.getElementById("radio-icon-align-center").checked=true;        
        document.getElementById("btn_icon_color").disabled=false;
    }
}


/*
//////////////// VISUAL PROPERTIES: IMAGE CORNERS ///////////////
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

/*
//////////////// VISUAL PROPERTIES: IMAGE SHADOWS ///////////////
*/

/* Enable image shadows */
document.querySelector("#cb_img_shadowsOn").addEventListener("change", doImgShadows);


function doImgShadows() {
    if (!document.getElementById("cb_img_shadowsOn").checked) {
        iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
    }
    else {
        iframe.contentWindow.document.querySelector('section').classList.add("fig-shadow");
    }
}


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
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-corners-soft");
}


/*
//////////////// ICON PROPERTIES: SIZE ///////////////
*/

document.querySelector("#switch-icon-size").addEventListener("change", doIconSize);

function doIconSize() {
    const rbs = document.querySelectorAll("input[name='icon-size']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    const el_section = iframe.contentWindow.document.querySelector("section");
    if (selectedValue==="icon-plus") {
        el_section.classList.remove("icon-small");
    }
    else if (selectedValue==="icon-minus") {
        el_section.classList.add("icon-small");
    }
}

/*
//////////////// ICON PROPERTIES: ALIGN ///////////////
*/

document.querySelector("#switch-icon-align").addEventListener("change", doIconAlign);

function doIconAlign() {

    const rbs = document.querySelectorAll("input[name='radio-icon-align']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    const el_section = iframe.contentWindow.document.querySelector("section");

    if (selectedValue==="left") {
        el_section.classList.add("icon-left");
    }
    else if (selectedValue==="center") {
        el_section.classList.remove("icon-left");
    }
}


function removeVisual() {
    const parentNode = iframe.contentWindow.document.querySelector("#HTML-Content");
    var el_img = Array.prototype.slice.call(iframe.contentWindow.document.getElementsByTagName("figure"),0); 
    for (let i = 0; i < el_img.length; i++) {
        el_img[i].parentNode.removeChild(el_img[i]);
    }

    iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replaceAll("<div class=\"col-3\">\n\t\t\t", "<div class=\"col-3\">");
    // Remove any corner or shadow properties
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-corners-soft");
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
    // Disable image properties
    disableImgProps();
    // Disable icon properties
    document.getElementById("cb-icon-size-plus").checked=false;
    document.getElementById("cb-icon-size-minus").checked=false;
    document.getElementById("cb-icon-size-plus").disabled=true;
    document.getElementById("cb-icon-size-minus").disabled=true;
    document.getElementById("radio-icon-align-left").disabled=true;
    document.getElementById("radio-icon-align-center").disabled=true;
    document.getElementById("radio-icon-align-left").checked=false;
    document.getElementById("radio-icon-align-center").checked=false;        
    document.getElementById("btn_icon_color").disabled=true;
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
    document.querySelector('.page-preview-options').classList.add("show-options");
}

function hideRespIcons() {
    document.querySelector('.page-preview-options').classList.remove("show-options");
}

const iconsResponsive = document.querySelectorAll('.icon_resize_respon');

iconsResponsive.forEach(icon => {
    icon.addEventListener('click', (e) => {
        // Get current icon id
        const iconId = e.currentTarget.id.toString();
        document.getElementById(iconId).classList.add("selected");
        resetResponsive();

        if (iconId==="respDesktopLarge") {
            document.getElementById("page-preview-body").classList.add("resp-desktop-large");
            document.querySelector("#respDesktopLarge img").src = "assets/img/icons/icon-resize-desktop-large.png";
        }

        else if (iconId==="respDesktopSmall") {
            document.getElementById("page-preview-body").classList.add("resp-desktop-small");
            document.querySelector("#respDesktopSmall img").src = "assets/img/icons/icon-resize-desktop-small.png";
        }

        else if (iconId==="respTabletLandscape") {
            document.getElementById("page-preview-body").classList.add("resp-tablet-landscape");
            document.querySelector("#respTabletLandscape img").src = "assets/img/icons/icon-resize-tablet-landscape.png";
        }
        else if (iconId==="respTabletPortrait") {
            document.getElementById("page-preview-body").classList.add("resp-tablet-portrait");
            document.querySelector("#respTabletPortrait img").src = "assets/img/icons/icon-resize-tablet-portrait.png";
        }        
        
        else if (iconId==="respMobileLarge") {
            document.getElementById("page-preview-body").classList.add("resp-mobile-large");
            document.querySelector("#respMobileLarge img").src = "assets/img/icons/icon-resize-mobile-large.png";
        }        

        else if (iconId==="respMobileSmall") {
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