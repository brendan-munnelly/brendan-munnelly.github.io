function loadAllGrid3() {

// *** Global variables
// Number of dropdown menus on Lunevery navbar
const uiUIenusLength = document.querySelectorAll("#ui-menus li").length;

// Used by color picker to identify section for copying to user's HTML file.
// values with be "section-selector-1", ... "section-selector-6".
let section_class ="section-selector-1"; 

// Used by color picker. Either 'theme-light' or 'theme-dark'.
let section_theme = "section.theme-light."+section_class;

// Class names of columns in grid: .col-2, .col-3 or .col-4
let col_no;
if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

// Number column blocks to loop through
let col_count = iframe.contentWindow.document.querySelectorAll(col_no).length;

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
    
    if (iframe.contentWindow.document.querySelector('.col-3') || iframe.contentWindow.document.querySelector('.col-4') ) {
        // Work with upper block
        if (menuId==="2") {
            window.scrollTo(0,0);
        }
        // Work with columns
        else if (menuId==="3") {
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

/*
//////////////// GRID-0 AND GRID-2-SPLIT: SECTION WIDTH ///////////////
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
//////////////// GRID-2, GRID-3 and GRID-4: UPPER COLUMN WIDTH ///////////////
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
//////////////// GRID-0: ALIGN FOR ENTIRE SECTION ///////////////
*/

if (document.querySelector("#switch-horz-align-desktop")) {
    document.querySelector("#switch-horz-align-desktop").addEventListener("change", doAlignDesktopSection);
}

function doAlignDesktopSection() {
    const rbs = document.querySelectorAll("input[name='horz-align-desktop']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        iframe.contentWindow.document.querySelector("#HTML-Content section").classList.remove("text-center-desktop");
        iframe.contentWindow.document.getElementById("dd_align_desktop_btns").disabled=false;
        iframe.contentWindow.document.getElementById("dd_align_desktop_btns").value="0";

    }
    else if (selectedValue==="center") {
        document.querySelector("#HTML-Content section").classList.add("text-center-desktop"); 
        iframe.contentWindow.document.getElementById("dd_align_desktop_btns").value="1";
        iframe.contentWindow.document.getElementById("dd_align_desktop_btns").disabled=true;
    }
}

if (document.querySelector("#switch-horz-align-mobile")) {
    document.querySelector("#switch-horz-align-mobile").addEventListener("change", doAlignMobileSection);
}

function doAlignMobileSection() {

    const rbs = document.querySelectorAll("input[name='horz-align-mobile']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        document.querySelector("section").classList.remove("text-center-mobile");
        document.getElementById("dd_align_desktop_btns").disabled=false;
        document.getElementById("dd_align_desktop_btns").value="0";

    }
    else if (selectedValue==="center") {
        document.querySelector("section").classList.add("text-center-mobile"); 
        document.getElementById("dd_align_desktop_btns").value="1";
        document.getElementById("dd_align_desktop_btns").disabled=true;
    }
}

/*
//////////////// GRID-0, GRID-2, GRID-3 and GRID-4: UPPER COLUMN ALIGN ///////////////
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
//////////////// ALL GRIDS: UPPER CATEGORY LABEL ABOVE H2 ///////////////
*/

document.querySelector("#cb_upperLabelOn").addEventListener("change", doUpperLabel);

function doUpperLabel() {

    // Single column
    if (iframe.contentWindow.document.querySelector("section > h2")) {
        if (!document.getElementById("cb_upperLabelOn").checked) {
            removeUpperLabel();
        }
        else {
            iframe.contentWindow.document.querySelector("section > h2").insertAdjacentHTML("beforebegin", "<div class=\"container-upper-label\"><span>CATEGORY<\/span><\/div>\n\n\t");
            document.getElementById("btn_upper_label").disabled=false;
        }
    }

    // 2, 3 or 4-Column
    else if (iframe.contentWindow.document.querySelector("section .col-1")) {
        if (!document.getElementById("cb_upperLabelOn").checked) {
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
            document.getElementById("btn_upper_label").disabled=false;
        }
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
//////////////// UPPER BLOCK GRID-3 AND GRID-4: MAIN HEADING H2 ///////////////
*/
if (document.querySelector("#cb_upperH2On")) {
    document.querySelector("#cb_upperH2On").addEventListener("change", doUpperH2);
}

function doUpperH2() {
    if (!document.getElementById("cb_upperH2On").checked) {
        removeUpperH2();
    }
    else {
        removeUpperH2();
        document.getElementById("btn_upper_head").disabled=false;
        const newH2 = document.createElement("h2");
        const newContent = document.createTextNode("Nice section heading");
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
    }
}

/*
//////////////// UPPER H3 SUB-HEADINGS ////////////////////
*/

document.querySelector("#cb_upperH3On").addEventListener("change", doUpperH3);

function doUpperH3() {

    // Single column
    if (iframe.contentWindow.document.querySelector("section > h2")) {
        if (!iframe.contentWindow.getElementById("cb_upperH3On").checked) {
            removeUpperH3();
        }
        else {
            removeUpperH3();
            iframe.contentWindow.document.querySelector("section p").insertAdjacentHTML("afterend", assets_header_h3);
            document.getElementById("btn_subhead").disabled=false;
        }            
    }

    // 2, 3 or 4-Column
    else if (iframe.contentWindow.document.querySelector("section .col-1")) {
        if (!document.getElementById("cb_upperH3On").checked) {
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
}

function removeUpperH3() {
    if (iframe.contentWindow.document.querySelector("section > h3")) {
        iframe.contentWindow.document.querySelector("section > h3").remove();
        document.getElementById("btn_subhead").disabled=true;
    }
    else if (iframe.contentWindow.document.querySelector("section .col-1 h3")) {
        iframe.contentWindow.document.querySelector("section .col-1 h3").remove();
        document.getElementById("btn_upper_subhead").disabled=true;
    }
}

/*
//////////////// GRID-0: DECKHEAD / STANDFIRST ///////////////
*/

if (document.querySelector("#cb_standfirstOn")) {
    document.querySelector("#cb_standfirstOn").addEventListener("change", doStandFirst);
}

function doStandFirst() {
    if (!document.getElementById("cb_standfirstOn").checked) {
        iframe.contentWindow.document.querySelector("section > p").classList.remove("standfirst");
    }
    else {
        document.querySelector("label[for='cb_standfirstOn']").style.color = "#fff";
        iframe.contentWindow.document.querySelector("section > p").classList.add("standfirst");
    }
}

/*
//////////////// UPPER BLOCK GRID-3 AND GRID-4: MAIN HEADING H2 ///////////////
*/

document.querySelector("#cb_upperBlockOn").addEventListener("change", doUpperBlock);

function doUpperBlock() {
    if (!document.getElementById("cb_upperBlockOn").checked) {
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
        document.getElementById("radio-upper-align-left").disabled=false;
        document.getElementById("radio-upper-align-left").checked=false;
        document.getElementById("radio-upper-align-center").disabled=false;
        document.getElementById("radio-upper-align-center").checked=true;
        document.getElementById("cb_upperLabelOn").disabled=false;
        document.getElementById("cb_upperLabelOn").checked=false;
        document.getElementById("cb_upperH2On").disabled=false;
        document.getElementById("cb_upperH2On").checked=true;
        document.getElementById("cb_upperH3On").disabled=false;
        document.getElementById("cb_upperH3On").checked=true;
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
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace("\n\n\t\t<div class="+col_no+">", "<div class="+col_no+">");
    }
    // Disable properties
    document.getElementById("dd_upper_block_width").disabled=true;
    document.getElementById("radio-upper-align-left").disabled=true;
    document.getElementById("radio-upper-align-left").checked=false;
    document.getElementById("radio-upper-align-center").disabled=true;
    document.getElementById("radio-upper-align-center").checked=false;
    document.getElementById("cb_upperBlockOn").checked=false;
    document.querySelector("#content-2 .svg-icon-desktop").style.fill='var(--gray-600)';
    document.getElementById("cb_upperLabelOn").disabled=true;
    document.getElementById("cb_upperLabelOn").checked=false;
    document.getElementById("cb_upperH2On").disabled=true;
    document.getElementById("cb_upperH2On").checked=false;
    document.getElementById("cb_upperH3On").disabled=true;
    document.getElementById("cb_upperH3On").checked=false;
    document.getElementById("btn_upper_label").disabled=true;
    document.getElementById("btn_upper_head").disabled=true;
    document.getElementById("btn_upper_subhead").disabled=true;
}

/*
//////////////// UPPER BLOCK GRID-3 AND GRID-4: MAIN HEADING H2 ///////////////
*/

document.querySelector("#cb_upperH2On").addEventListener("change", doUpperH2);


function doUpperH2() {
    if (!document.getElementById("cb_upperH2On").checked) {
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
//////////////// H3 SUB-HEADINGS ////////////////////
*/

document.querySelector("#cb_upperH3On").addEventListener("change", doUpperH3);

function doUpperH3() {

    // Single column
    if (iframe.contentWindow.document.querySelector("section > h2")) {
        if (!document.getElementById("cb_upperH3On").checked) {
            removeUpperH3();
        }
        else {
            removeUpperH3();
            // document.querySelector("label[for='cb_upperH3On']").style.color = "#fff";
            iframe.contentWindow.document.querySelector("section p").insertAdjacentHTML("afterend", assets_header_h3);
            document.getElementById("btn_subhead").disabled=false;
        }            
    }

    // 2-Column split
    else if (iframe.contentWindow.document.querySelector("section.cols-2-split")) {
        if (!document.getElementById("cb_upperH3On").checked) {
            removeUpperH3();
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

    // 2, 3 or 4-Column
    else if (iframe.contentWindow.document.querySelector("section .col-1")) {
        if (!document.getElementById("cb_upperH3On").checked) {
            removeUpperH3();
        }
        else {
            removeUpperH3();
            const newSubHead = iframe.contentWindow.document.createElement("h3");
            const newContent = iframe.contentWindow.document.createTextNode("Leverage agile frameworks to provide a robust synopsis for high level overviews to foster collaborative thinking.");
            newSubHead.appendChild(newContent);
            const currentDiv = iframe.contentWindow.document.querySelector('.col-1');
            currentDiv.append(newSubHead);
            document.getElementById("btn_upper_subhead").disabled=false;
        }
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

document.querySelector("#dd_cols_mobile").addEventListener("change", doColMobileWidth);

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
            console.log("Got here 2");
            removeColH3();
        }

        else {
            removeColH3();
            document.getElementById("btn_col_subhead").disabled=false;
            
            // Test for figures (images or icons)
            if (iframe.contentWindow.document.querySelector(col_no+" figure")) {
                const obj_fig = iframe.contentWindow.document.querySelectorAll('figure');
                for (let i=2 ; i <= obj_fig.length+1 ; i++) {
                    el_fig = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") figure");
                    el_fig.insertAdjacentHTML("afterend", content_h3[i]);
               }
            }
            
            // Test for paragraphs
            else if (iframe.contentWindow.document.querySelector(col_no+" p")) {
                const obj_para = iframe.contentWindow.document.querySelectorAll(col_no+" p");
                let el_para;
                for (let i=2 ; i <= obj_para.length+1 ; i++) {
                    el_para = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") p");
                    el_para.insertAdjacentHTML("beforebegin", content_h3[i]);
               }
            }

            // Test for lists
            else if (iframe.contentWindow.document.querySelector(col_no+" ul")) {
                const obj_ul = iframe.contentWindow.document.querySelectorAll(col_no+" ul");
                let el_ul;
                for (let i=2 ; i <= obj_ul.length+1 ; i++) {
                    el_ul = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") ul");
                    el_ul.insertAdjacentHTML("beforebegin", content_h3[i]);
               }
            }

            // No pics, icons, paras, lists
            else {
                const obj_col = iframe.contentWindow.document.querySelectorAll(col_no);
                let el_col;
                for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
                    el_col = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+")");
                    el_col.innerHTML = content_h3[i];
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
        // Test for figures AND h3 column headings
        if ( (iframe.contentWindow.document.querySelector(col_no+" figure")) && (iframe.contentWindow.document.querySelector(col_no+" h3")) ) {
            const obj_h3 = iframe.contentWindow.document.querySelectorAll(col_no+" h3");
            let el_h3;
            for (let i=2 ; i <= obj_h3.length+1 ; i++) {
                el_h3 = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") h3");
                el_h3.insertAdjacentHTML("afterend", content_paras[i]);
           }
        }
        
        // Test for figures (images or icons) and NO h3 column headings
        else if ( (iframe.contentWindow.document.querySelector(col_no+" figure")) && (!iframe.contentWindow.document.querySelector(col_no+" h3")) ) {
            const obj_fig = iframe.contentWindow.document.querySelectorAll(col_no+" figure");
            let el_fig;
            for (let i=2 ; i <= obj_fig.length+1 ; i++) {
                el_fig = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") figure");
                el_fig.insertAdjacentHTML("afterend", content_paras[i]);
           }
        }

        // Test for h3 column headings and NO figures
        else if ( (!iframe.contentWindow.document.querySelector(col_no+" figure")) && (iframe.contentWindow.document.querySelector(col_no+" h3")) ) {
            const obj_h3 = iframe.contentWindow.document.querySelectorAll(col_no+" h3");
            let el_h3;
            for (let i=2 ; i <= obj_h3.length+1 ; i++) {
                el_h3 = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") h3");
                el_h3.insertAdjacentHTML("afterend", content_paras[i]);
           }
        }

        // No figures AND no column headings
        else if ( (!iframe.contentWindow.document.querySelector(col_no+" figure")) && (!iframe.contentWindow.document.querySelector(col_no+" h3")) ) {
            const obj_col = iframe.contentWindow.document.querySelectorAll(col_no);
            let el_col;
            for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
                el_col = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+")");
                el_col.innerHTML = content_paras[i];
            }
        }
    }

    else if (opt==="2") {
        removeText();
        document.querySelector("#btn_col_text").disabled=false;
        // Test for figures AND h3 column headings
        if ( (iframe.contentWindow.document.querySelector(col_no+" figure")) && (iframe.contentWindow.document.querySelector(col_no+" h3")) ) {
            const obj_h3 = iframe.contentWindow.document.querySelectorAll(col_no+" h3");
            let el_h3;
            for (let i=2 ; i <= obj_h3.length+1 ; i++) {
                el_h3 = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") h3");
                el_h3.insertAdjacentHTML("afterend", content_list[i]);
           }
        }
        
        // Test for figures (images or icons)
        else if (iframe.contentWindow.document.querySelector(col_no+" figure")) {
            const obj_fig = iframe.contentWindow.document.querySelectorAll(col_no+" figure");
            let el_fig;
            for (let i=2 ; i <= obj_fig.length+1 ; i++) {
                el_fig =  iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") figure");
                el_fig.insertAdjacentHTML("afterend", content_list[i]);
           }
        }

        // Test for h3 column headings
        else if (iframe.contentWindow.document.querySelector(col_no+" h3")) {
            const obj_h3 = iframe.contentWindow.document.querySelectorAll(col_no+" h3");
            let el_h3;
            for (let i=2 ; i <= obj_h3.length+1 ; i++) {
                el_h3 = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") h3");
                el_h3.insertAdjacentHTML("afterend", content_list[i]);
           }
        }

        // No pics, icons, h3 headings
        else {
            const obj_col = iframe.contentWindow.document.querySelectorAll(col_no);
            let el_col;
            for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
                el_col = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+")");
                el_col.innerHTML =  content_list;
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

document.querySelector("#dd_col_shadows").addEventListener("change", doColShadows);

function doColShadows() {
    let opt = document.querySelector("#dd_col_shadows").value;
    const el_section = iframe.contentWindow.document.querySelector('section')

    if (opt==="0") {
        el_section.classList.remove("col-shadows");
        el_section.classList.remove("corners-soft");
        // Enable corner and border options
        document.getElementById("dd_col_borders").disabled=false;
        document.getElementById("dd_col_borders").value="0";
        document.getElementById("dd_col_corners").disabled=false; 
        document.getElementById("dd_col_corners").value="0";
    }

    else if (opt==="1") {
        el_section.classList.add("col-shadows");
        el_section.classList.add("corners-soft");
        // Disable corner and border options
        document.getElementById("dd_col_borders").disabled=true;
        document.getElementById("dd_col_borders").value="0";
        document.getElementById("dd_col_corners").disabled=true; 
        document.getElementById("dd_col_corners").value="0";
    }
}

/*
//////////////// COLUMNS BORDERS ///////////////
*/

document.querySelector("#dd_col_borders").addEventListener("change", doColBorders);

function doColBorders() {
    let opt = document.querySelector("#dd_col_borders").value;
    const el_section = iframe.contentWindow.document.querySelector('section')

    if (opt==="0") {
        el_section.classList.remove("col-borders");
        el_section.classList.remove("corners-soft");
        document.getElementById("dd_col_corners").disabled=true; 
        document.getElementById("dd_col_corners").value="0";
        document.getElementById("dd_col_borders").disabled=false;
        document.getElementById("btn_col_border_color").disabled=true;
    }

    else if (opt==="1") {
        el_section.classList.add("col-borders");
        document.getElementById("dd_col_corners").disabled=false; 
        document.getElementById("dd_col_corners").value="0";
        document.getElementById("dd_col_borders").disabled=false;
        document.getElementById("btn_col_border_color").disabled=false;
    }
}

/*
//////////////// COLUMNS BORDER CORNERS ///////////////
*/

document.querySelector("#dd_col_corners").addEventListener("change", doColCorners);

function doColCorners() {
    let opt = document.querySelector("#dd_col_corners").value;
    const el_section = iframe.contentWindow.document.querySelector('#HTML-Content .container-flex')

    if (opt==="0") {
        el_section.classList.remove("corners-soft");
    }

    else if (opt==="1") {
        el_section.classList.add("corners-soft");
    }
}



/*
//////////////// BUTTONS ////////////////////
*/

document.querySelector("#cb_colButtonsOn").addEventListener("change", doColButtons);

function doColButtons() {
    if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
    else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
    else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

    // console.log("col_no is: "+col_no)
    if (!document.getElementById("cb_colButtonsOn").checked) {
        removeColButtons();
        disableColButtons();
    }
    else {
        let btn_class="btn-primary";
        const obj_col = iframe.contentWindow.document.querySelectorAll(col_no);
        let el_cols; // each child column block

        for (let i = 2; i <= obj_col.length+1; i++) {            
            el_cols = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+")");
            addColButtons(el_cols,btn_class);
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
    const obj_btns = iframe.contentWindow.document.querySelectorAll("a.btn");
    let el_btns;
    for (let i=2 ; i <= obj_btns.length+1; i++) {
        el_btns = iframe.contentWindow.document.querySelector("a.btn");
        el_btns.remove();
    }
    document.getElementById("dd_buttons_style").disabled=true;
    document.getElementById("dd_buttons_style").value="0";
    disableColButtons();
}

/*
//////////////// BUTTONS: ICONS POSITION ////////////////////
*/

document.querySelector("#switch-btns-icons-position").addEventListener("change", swapButtonIcons);

function swapButtonIcons() {
    if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
    else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
    else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

    const rbs = document.querySelectorAll("input[name='btns-icons-position']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (iframe.contentWindow.document.querySelector("a.btn")) {
            
        let el_btns;
        const obj_btns = iframe.contentWindow.document.querySelectorAll("a.btn");
        const icon_left  ="<i class=\"fas fa-shopping-cart\"><\/i><span>Order Now<\/span>";
        const icon_right ="<span>Order Now<\/span><i class=\"fas fa-arrow-circle-right\"><\/i>";

        if (selectedValue==="btns-icons-left") {
        // move text to right, icon to left
            for (let i=2 ; i <= obj_btns.length+1; i++) {
                el_btns = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") a.btn");
                btn_content = el_btns.innerHTML;

                if (( btn_content = icon_right) || (btn_content = icon_right)) {
                    btn_content = btn_content.replace(icon_right, icon_left);
                    el_btns.innerHTML = btn_content;
                }
            }
        }
    
        else if (selectedValue==="btns-icons-right") {
            // move text to left, icon to right
            for (let i=2 ; i <= obj_btns.length+1; i++) {
                el_btns = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") a.btn");
                btn_content = el_btns.innerHTML;

                if (( btn_content = icon_right) || (btn_content = icon_right)) {
                    btn_content = btn_content.replace(icon_left, icon_right);
                    el_btns.innerHTML = btn_content;
                }
            }
        }
    
        else if (selectedValue==="btns-icons-none") {
            // Only text, No icons.
            for (let i=2 ; i <= obj_btns.length+1; i++) {
                el_btns = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") a.btn");
                btn_content = el_btns.innerHTML;
                btn_content = "<span>Order now</span>";
                el_btns.innerHTML = btn_content;
            }
        }

    }
}

/*
//////////////// BUTTONS: STYLE ////////////////////
*/

document.querySelector("#dd_buttons_style").addEventListener("change", doButtonsStyle);

    function doButtonsStyle() {
        if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
        else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
        else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

        let opt = document.querySelector("#dd_buttons_style").value;
        // remove
        if (opt==="0") {
            removeButtonsStyle();
        }
        // soft
        else if (opt==="1") {
            removeButtonsStyle();
            const obj_btns = iframe.contentWindow.document.querySelectorAll("a.btn");
            let el_btns;
            for (let i=2 ; i <= obj_btns.length+1; i++) {
                el_btns = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") a.btn");
                el_btns.classList.add("btn-soft");
            }
        }

        // rounded
        else if (opt==="2") {
            removeButtonsStyle();
            const obj_btns = iframe.contentWindow.document.querySelectorAll("a.btn");
            let el_btns;
            // loop through columns.
            // nth-child cols begin at 2.
            // So first column updated has loop index [i] of 2, second has [i] of 3, etc.
            for (let i=2 ; i <= obj_btns.length+1; i++) {
                el_btns = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") a.btn");
                el_btns.classList.add("btn-rounded");
            }
        }
    }

    function removeButtonsStyle() {
        if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
        else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
        else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

        const obj_btns = iframe.contentWindow.document.querySelectorAll("a.btn");

        let el_btns;
        for (let i=2 ; i <= obj_btns.length+1; i++) {
            el_btns = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") a.btn");
            el_btns.classList.remove("btn-soft");
            el_btns.classList.remove("btn-rounded");
        }
    }

    function enableColButtons() {
        document.getElementById("btn_a_primary_passive_text").disabled=false;
        document.getElementById("btn_a_primary_active_text").disabled=false;
        document.getElementById("btn_a_primary_passive_bg").disabled=false;
        document.getElementById("btn_a_primary_active_bg").disabled=false;
        document.getElementById("btn_a_primary_passive_border").disabled=false;
        document.getElementById("btn_a_primary_active_border").disabled=false;
        document.getElementById("dd_buttons_style").value="0";
        document.getElementById("dd_buttons_style").disabled=false;
        document.getElementById("rd-btns-icons-left").checked=true;
        document.getElementById("rd-btns-icons-left").disabled=false;
        document.getElementById("rd-btns-icons-right").disabled=false;
        document.getElementById("rd-btns-icons-none").disabled=false;
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
    }

/*
////////////////////// VISUALS  ///////////////////////
*/

document.querySelector("#vis-types-all").addEventListener("click", doVisType);

function doVisType() { 
    if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
    else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
    else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

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

    else if ( (selectedValue==="icons-fa") || (selectedValue==="icons-la") || (selectedValue==="icons-md") ) {
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
            else if (selectedValue==="icons-md") {
                el_cols.innerHTML = arrIconMD[i-2] + el_cols.innerHTML; 
            }
        }
        // Enables icon properties
        document.getElementById("dd_icon_size").disabled=false;
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

document.querySelector("#dd_icon_size").addEventListener("change", doIconSize);


function doIconSize() {
    let opt = document.querySelector("#dd_icon_size").value;
    //Restore normal size
    if (opt==="0") {
        const el_section = iframe.contentWindow.document.querySelector("section");
        el_section.classList.remove("icon-small");
    }
    //Left align
    else if (opt==="1") {
        const el_section = iframe.contentWindow.document.querySelector("section");
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
    // Remove any corner or shadow properties
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-corners-soft");
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
    // Disable image properties
    disableImgProps();
    // Disable icon properties
    document.getElementById("dd_icon_size").disabled=true;
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